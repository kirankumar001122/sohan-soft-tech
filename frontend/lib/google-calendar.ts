
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
    sendUpdates: "none",
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

export async function sendDemoBookingEmail(input: {
  name: string;
  email: string;
  category: string;
  date: string;
  time: string;
  reference: string;
  meetingUrl: string;
}): Promise<void> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken =
    process.env.GOOGLE_GMAIL_REFRESH_TOKEN?.trim() ||
    process.env.GOOGLE_REFRESH_TOKEN?.trim();
  const sender = process.env.GOOGLE_CALENDAR_ID?.trim() || HOST_EMAIL;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Google email environment variables are missing.");
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  const gmail = google.gmail({ version: "v1", auth });
  const formattedDate = new Date(`${input.date}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: TIME_ZONE,
    }
  );
  const [startTime, endTime] = input.time.split("-");
  const formatTime = (value: string) =>
    new Date(`2000-01-01T${value}:00+05:30`).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: TIME_ZONE,
    });

  const escapeHtml = (value: string) =>
    value.replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character] ?? character
    );

  const safe = {
    name: escapeHtml(input.name),
    category: escapeHtml(input.category),
    reference: escapeHtml(input.reference),
    meetingUrl: escapeHtml(input.meetingUrl),
  };

  const html = `
    <div style="margin:0;background:#f7f7f8;padding:24px 12px;font-family:Arial,sans-serif;color:#555b66;">
      <div style="max-width:680px;margin:0 auto;background:#fff;">
        <div style="background:#2b0615;border-radius:22px 22px 0 0;padding:42px 54px 38px;">
          <div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:#fff;">
            SOHAN <span style="color:#e88cae;">SOFT TECH</span>
          </div>
          <div style="margin-top:12px;color:#ead9df;font-size:18px;letter-spacing:4px;">
            BUILD. AUTOMATE. OPERATE. GROW.
          </div>
        </div>
        <div style="padding:48px 54px 56px;">
          <h1 style="margin:0 0 40px;color:#2b0615;font-size:40px;line-height:1.3;">
            Your demo meeting is<br />scheduled
          </h1>
          <p style="font-size:22px;line-height:1.7;margin:0 0 24px;">Hello ${safe.name},</p>
          <p style="font-size:22px;line-height:1.7;margin:0 0 34px;">
            Thank you for choosing Sohan Soft Tech. Your demo meeting has been scheduled.
            Here are your meeting details.
          </p>
          <table style="width:100%;border-collapse:collapse;font-size:21px;">
            <tr><td style="padding:18px 20px;border-bottom:1px solid #eadfe3;color:#727782;">Reference<br />No</td><td style="padding:18px 0;border-bottom:1px solid #eadfe3;color:#2b0615;font-weight:700;">${safe.reference}</td></tr>
            <tr><td style="padding:18px 20px;border-bottom:1px solid #eadfe3;color:#727782;">Meeting<br />date</td><td style="padding:18px 0;border-bottom:1px solid #eadfe3;color:#2b0615;font-weight:700;">${formattedDate}</td></tr>
            <tr><td style="padding:18px 20px;border-bottom:1px solid #eadfe3;color:#727782;">Meeting<br />time</td><td style="padding:18px 0;border-bottom:1px solid #eadfe3;color:#2b0615;font-weight:700;">${formatTime(startTime)} - ${formatTime(endTime)} IST</td></tr>
            <tr><td style="padding:18px 20px;color:#727782;">Service</td><td style="padding:18px 0;color:#2b0615;font-weight:700;">${safe.category}</td></tr>
          </table>
          <a href="${safe.meetingUrl}" style="display:inline-block;margin-top:42px;padding:20px 34px;border-radius:12px;background:#d9145c;color:#fff;font-size:22px;font-weight:700;text-decoration:none;">
            Join Google Meet
          </a>
          <p style="font-size:18px;line-height:1.7;margin:44px 0 0;">
            If you need to change your meeting, reply to this email and mention reference
            <strong>${safe.reference}</strong>.
          </p>
        </div>
      </div>
    </div>`;

  const rawMessage = [
    `From: ${sender}`,
    `To: ${input.email}`,
    "Subject: Your Sohan Soft Tech demo meeting is scheduled",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
  ].join("\r\n");
  const raw = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  try {
    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Gmail error";

    if (message.includes("insufficient authentication scopes")) {
      throw new Error(
        "Gmail authorization is missing the https://www.googleapis.com/auth/gmail.send scope. Set GOOGLE_GMAIL_REFRESH_TOKEN after reauthorizing Gmail."
      );
    }

    throw error;
  }
}
