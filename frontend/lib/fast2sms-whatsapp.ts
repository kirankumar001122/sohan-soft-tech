
interface DemoBookingWhatsApp {
  meetingUrl: string;
  name: string;
  phone: string;
  reference: string;
  date: string;
  time: string;
}

export async function sendDemoBookingWhatsApp({
  name,
  phone,
  reference,
  date,
  time,
  meetingUrl,
}: DemoBookingWhatsApp): Promise<void> {
  const authorization =
    process.env.FAST2SMS_WHATSAPP_AUTHORIZATION?.trim();
  const messageId =
    process.env.FAST2SMS_WHATSAPP_MESSAGE_ID?.trim();
  const phoneNumberId =
    process.env.FAST2SMS_WHATSAPP_PHONE_NUMBER_ID?.trim();

  if (!authorization || !messageId || !phoneNumberId) {
    throw new Error("Fast2SMS WhatsApp configuration is incomplete.");
  }

  // Validate the Google Meet link before sending.
  if (
    !meetingUrl ||
    !/^https:\/\/meet\.google\.com\/[a-z0-9-]+(?:\?.*)?$/i.test(
      meetingUrl.trim()
    )
  ) {
    throw new Error(
      "A valid Google Meet link is required for the WhatsApp notification."
    );
  }

  let number = phone.replace(/\D/g, "");

  if (number.startsWith("91") && number.length === 12) {
    number = number.slice(2);
  }

  if (!/^[6-9]\d{9}$/.test(number)) {
    throw new Error("Invalid Indian mobile number for WhatsApp.");
  }

  const formattedDate = new Date(
    `${date}T00:00:00+05:30`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const [startTime] = time.split("-");

  if (!startTime || !/^([01]\d|2[0-3]):[0-5]\d$/.test(startTime)) {
    throw new Error("Invalid booking time slot.");
  }

  const formattedTime = new Date(
    `2000-01-01T${startTime}:00+05:30`
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  // Must match your approved Fast2SMS template's variable order.
  const variables = [
    name,
    "Website demo",
    reference,
    formattedDate,
    formattedTime,
    meetingUrl.trim(),
  ].join("|");

  const params = new URLSearchParams({
    message_id: messageId,
    phone_number_id: phoneNumberId,
    numbers: number,
    variables_values: variables,
  });

  const response = await fetch(
    `https://www.fast2sms.com/dev/whatsapp?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: authorization,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const result: unknown = await response.json().catch(() => null);

  // Log provider response so we can identify delivery/API errors.
  console.log("Fast2SMS WhatsApp HTTP status:", response.status);
  console.log("Fast2SMS WhatsApp provider response:", result);

  if (!response.ok) {
    throw new Error(
      `Fast2SMS WhatsApp request failed with HTTP ${response.status}.`
    );
  }

  if (
    result !== null &&
    typeof result === "object" &&
    "return" in result &&
    result.return === false
  ) {
    throw new Error("Fast2SMS reported that the WhatsApp request failed.");
  }
}
