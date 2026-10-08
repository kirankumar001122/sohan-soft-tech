
const FAST2SMS_URL = "https://www.fast2sms.com/dev/bulkV2";

interface DemoBookingSms {
  name: string;
  phone: string;
  reference: string;
}

export async function sendDemoBookingSms({
  name,
  phone,
  reference,
}: DemoBookingSms): Promise<void> {
  const apiKey = process.env.FAST2SMS_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("FAST2SMS_API_KEY is not configured.");
  }

  // Normalize an Indian mobile number.
  let number = phone.replace(/\D/g, "");

  if (number.startsWith("91") && number.length === 12) {
    number = number.slice(2);
  }

  if (!/^[6-9]\d{9}$/.test(number)) {
    throw new Error("Invalid Indian mobile number.");
  }

  // DLT template variables:
  // customer name | inquiry type | reference number
  const variables = [
    name.trim(),
    "Demo Booking",
    reference,
  ].join("|");

  const params = new URLSearchParams({
    sender_id: "SOHSFT",
    message: "214471",
    variables_values: variables,
    route: "dlt",
    numbers: number,
  });

  const response = await fetch(
    `${FAST2SMS_URL}?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: apiKey,
      },
      cache: "no-store",
    }
  );

  const result: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    console.error("Fast2SMS HTTP error:", response.status, result);
    throw new Error(
      `Fast2SMS request failed with HTTP ${response.status}.`
    );
  }

  if (
    !result ||
    typeof result !== "object" ||
    !("return" in result) ||
    result.return !== true
  ) {
    console.error("Fast2SMS rejected the request:", result);
    throw new Error("Fast2SMS did not accept the SMS request.");
  }

  console.log("Fast2SMS accepted the demo booking SMS request.");
}
