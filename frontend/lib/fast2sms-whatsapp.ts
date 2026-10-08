
interface DemoBookingWhatsApp {
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
}: DemoBookingWhatsApp): Promise<void> {
  const authorization =
    process.env.FAST2SMS_WHATSAPP_AUTHORIZATION?.trim();
  const messageId =
    process.env.FAST2SMS_WHATSAPP_MESSAGE_ID?.trim();
  const phoneNumberId =
    process.env.FAST2SMS_WHATSAPP_PHONE_NUMBER_ID?.trim();
  const meetingUrl =
    process.env.FAST2SMS_WHATSAPP_MEETING_URL?.trim();

  if (!authorization || !messageId || !phoneNumberId || !meetingUrl) {
    throw new Error("Fast2SMS WhatsApp configuration is incomplete.");
  }

  let number = phone.replace(/\D/g, "");

  if (number.startsWith("91") && number.length === 12) {
    number = number.slice(2);
  }

  if (!/^[6-9]\d{9}$/.test(number)) {
    throw new Error("Invalid Indian mobile number for WhatsApp.");
  }

  const formattedDate = new Date(`${date}T00:00:00+05:30`)
    .toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });

  const [hours, minutes] = time.split(":").map(Number);
  const formattedTime = new Date(
    `2000-01-01T${time}:00+05:30`
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  // Keep the six values in the same order as template {{1}}–{{6}}.
  const variables = [
    name,
    "Website demo",
    reference,
    formattedDate,
    formattedTime,
    meetingUrl,
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

  if (!response.ok) {
    console.error("Fast2SMS WhatsApp HTTP error:", response.status, result);
    throw new Error(
      `Fast2SMS WhatsApp request failed with HTTP ${response.status}.`
    );
  }

  console.log("Fast2SMS WhatsApp provider response:", result);
}