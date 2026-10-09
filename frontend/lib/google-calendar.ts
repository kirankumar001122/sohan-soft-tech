
import { google } from "googleapis";

const TIME_ZONE = "Asia/Kolkata";
const HOST_EMAIL = "info@junkitout.in";

type CreateDemoMeetingInput = {
  name: string;
  email: string;
  company: string;
  category: string;
  date: string;
  time: string;
  reference: string;
};

export async function createDemoMeeting(
  input: CreateDemoMeetingInput
): Promise<{ eventId: string; meetingUrl: string }> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();

  if (!clientId || !clientSecret || !refreshToken || !calendarId) {
    throw new Error("Google Calendar environment variables are missing.");
  }


const auth = new google.auth.OAuth2(clientId, clientSecret);

auth.setCredentials({
  refresh_token: refreshToken,
});

try {
  const tokenResponse = await auth.getAccessToken();

  console.log(
    "Google OAuth access token obtained:",
    Boolean(tokenResponse.token)
  );
} catch (error) {
  console.error(
    "Google Calendar OAuth authentication failed:",
    error instanceof Error ? error.message : "Unknown authentication error"
  );

  throw new Error(
    "Google Calendar authentication failed. Verify that the OAuth client ID, client secret, and refresh token belong together."
  );
}

const calendar = google.calendar({ version: "v3", auth });


  const [startTime, endTime] = input.time.split("-");

  if (!startTime || !endTime) {
    throw new Error("Invalid demo booking time slot.");
  }

  // Convert the selected local time to an ISO timestamp with IST offset.
  const toIsoWithIstOffset = (time: string) =>
    `${input.date}T${time}:00+05:30`;

  const response = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: 1,
    sendUpdates: "all",
    requestBody: {
      summary: `Sohan Soft Tech Demo - ${input.company || input.name}`,
      description: [
        `Booking reference: ${input.reference}`,
        `Contact: ${input.name}`,
        `Company: ${input.company || "Not provided"}`,
        `Category: ${input.category}`,
      ].join("\n"),
      start: {
        dateTime: toIsoWithIstOffset(startTime),
        timeZone: TIME_ZONE,
      },
      end: {
        dateTime: toIsoWithIstOffset(endTime),
        timeZone: TIME_ZONE,
      },
      attendees: [
        { email: input.email },
        { email: HOST_EMAIL },
      ],
      conferenceData: {
        createRequest: {
          requestId: `${input.reference.replace(/[^a-zA-Z0-9]/g, "")}-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
  });

  const eventId = response.data.id;

  if (!eventId) {
    throw new Error("Google Calendar did not return an event ID.");
  }

  // Google may create the Meet conference asynchronously.
  let meetingUrl =
    response.data.hangoutLink ??
    response.data.conferenceData?.entryPoints?.find(
      (entry) => entry.entryPointType === "video"
    )?.uri ??
    "";

  for (let attempt = 0; !meetingUrl && attempt < 4; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const event = await calendar.events.get({
      calendarId,
      eventId,
    });

    meetingUrl =
      event.data.hangoutLink ??
      event.data.conferenceData?.entryPoints?.find(
        (entry) => entry.entryPointType === "video"
      )?.uri ??
      "";
  }

  if (!meetingUrl) {
    // Preserve the event ID so the event can be inspected or repaired.
    throw new Error(
      `Calendar event ${eventId} was created, but its Meet link is not ready yet.`
    );
  }

  return { eventId, meetingUrl };
}
