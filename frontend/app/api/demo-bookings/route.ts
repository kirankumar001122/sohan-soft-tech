
import { NextResponse } from "next/server";
import { sendDemoBookingSms } from "@/lib/fast2sms";
import {
  createBookingDatabaseClient,
  BookingSetupError,
  getBookingSchedule,
  getScheduleTimes,
  isValidDate,
} from "@/lib/demo-bookings";

export const runtime = "nodejs";

// GET: Return available dates for a month or available slots for a date.
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const month = url.searchParams.get("month");
    const date = url.searchParams.get("date");

    const database = createBookingDatabaseClient();
    const schedule = getBookingSchedule();

    if (month !== null) {
      if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
        return NextResponse.json(
          { message: "Choose a valid month in YYYY-MM format." },
          { status: 400 }
        );
      }

      const [year, monthNumber] = month.split("-").map(Number);
      const monthStart = `${month}-01`;
      const monthEnd = new Date(
        Date.UTC(year, monthNumber, 0)
      )
        .toISOString()
        .slice(0, 10);

      const { data, error } = await database
        .from("demo_bookings")
        .select("booking_date, booking_time")
        .gte("booking_date", monthStart)
        .lte("booking_date", monthEnd);

      if (error) throw error;

      const bookedByDate = new Map<string, Set<string>>();

      for (const booking of data ?? []) {
        const bookedTimes =
          bookedByDate.get(booking.booking_date) ??
          new Set<string>();

        bookedTimes.add(
          String(booking.booking_time).slice(0, 5)
        );

        bookedByDate.set(booking.booking_date, bookedTimes);
      }

      const availableDates: string[] = [];
      const daysInMonth = new Date(
        Date.UTC(year, monthNumber, 0)
      ).getUTCDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const dayValue = String(day).padStart(2, "0");
        const dateValue = `${month}-${dayValue}`;
        const booked =
          bookedByDate.get(dateValue) ?? new Set<string>();

        const slots = getScheduleTimes(dateValue, schedule);

        if (slots.some((slot) => !booked.has(slot))) {
          availableDates.push(dateValue);
        }
      }

      return NextResponse.json({
        availableDates,
        timezone: "Asia/Kolkata",
      });
    }

    if (date !== null) {
      if (!isValidDate(date)) {
        return NextResponse.json(
          { message: "Choose a valid date." },
          { status: 400 }
        );
      }

      const { data, error } = await database
        .from("demo_bookings")
        .select("booking_time")
        .eq("booking_date", date);

      if (error) throw error;

      const bookedTimes = new Set(
        (data ?? []).map((booking) =>
          String(booking.booking_time).slice(0, 5)
        )
      );

      const availableSlots = getScheduleTimes(
        date,
        schedule
      ).filter((slot) => !bookedTimes.has(slot));

      return NextResponse.json({
        availableSlots,
        timezone: "Asia/Kolkata",
      });
    }

    return NextResponse.json(
      {
        message:
          "Provide a month or date to check availability.",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Demo booking availability error:", error);

    return availabilityErrorResponse(error, "load");
  }
}

// POST: Save the booking and send the SMS confirmation.
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Enter valid booking details." },
      { status: 400 }
    );
  }

  if (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body)
  ) {
    return NextResponse.json(
      { message: "Enter your booking details." },
      { status: 400 }
    );
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      date,
      time,
    } = body as Record<string, unknown>;

    const cleanName =
      typeof name === "string" ? name.trim() : "";

    const cleanEmail =
      typeof email === "string"
        ? email.trim().toLowerCase()
        : "";

    const cleanCompany =
      typeof company === "string" ? company.trim() : "";

    const cleanPhone =
      typeof phone === "string" ? phone.trim() : "";

    const cleanDate =
      typeof date === "string" ? date : "";

    const cleanTime =
      typeof time === "string" ? time : "";

    if (
      !cleanName ||
      cleanName.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      !cleanCompany ||
      cleanCompany.length > 160 ||
      cleanPhone.length > 40 ||
      !isValidDate(cleanDate) ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(cleanTime)
    ) {
      return NextResponse.json(
        {
          message:
            "Check the required fields and selected appointment time.",
        },
        { status: 400 }
      );
    }

    // Validate the requested slot against the configured schedule.
    const schedule = getBookingSchedule();

    if (
      !getScheduleTimes(cleanDate, schedule).includes(
        cleanTime
      )
    ) {
      return NextResponse.json(
        {
          message:
            "That time is no longer available. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    // Save the booking in Supabase first.
    const database = createBookingDatabaseClient();

    const { data: booking, error } = await database
      .from("demo_bookings")
      .insert({
        attendee_name: cleanName,
        work_email: cleanEmail,
        company_name: cleanCompany,
        phone: cleanPhone || null,
        booking_date: cleanDate,
        booking_time: `${cleanTime}:00`,
        timezone: "Asia/Kolkata",
      })
      .select("id")
      .single();

    if (error?.code === "23505") {
      return NextResponse.json(
        {
          message:
            "That time was just booked. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    if (error) throw error;

    if (!booking?.id) {
      throw new Error(
        "The booking was saved, but its reference ID was not returned."
      );
    }

    const reference = `DEMO-${String(booking.id)
      .replace(/-/g, "")
      .slice(0, 8)
      .toUpperCase()}`;

    // Attempt SMS only after Supabase confirms the booking.
    let smsSent = false;

    if (cleanPhone) {
      try {
        await sendDemoBookingSms({
          name: cleanName,
          phone: cleanPhone,
          reference,
        });

        smsSent = true;
      } catch (smsError) {
        console.error(
          "Demo booking SMS failed:",
          smsError
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        reference,
        smsSent,
        message: smsSent
          ? "Your booking has been saved and the SMS provider accepted the request."
          : cleanPhone
            ? "Your booking has been saved, but the SMS could not be confirmed."
            : "Your booking has been saved. Add a phone number to receive an SMS confirmation.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Demo booking save error:", error);

    return availabilityErrorResponse(error, "save");
  }
}

function availabilityErrorResponse(
  error: unknown,
  action: "load" | "save"
) {
  if (error instanceof BookingSetupError) {
    return NextResponse.json(
      {
        status: "not_configured",
        code: "BOOKING_SETUP_REQUIRED",
        message: error.message,
      },
      { status: 503 }
    );
  }

  if (isMissingBookingsTable(error)) {
    return NextResponse.json(
      {
        status: "not_configured",
        code: "BOOKING_MIGRATION_REQUIRED",
        message:
          "The demo_bookings table was not found. Apply the demo bookings migration to the configured Supabase project.",
      },
      { status: 503 }
    );
  }

  const databaseError = getDatabaseError(error);

  // Give an actionable message for an incorrectly configured URL.
  if (
    databaseError.code === "PGRST125" ||
    databaseError.message.toLowerCase().includes(
      "invalid path specified in request url"
    )
  ) {
    return NextResponse.json(
      {
        status: "error",
        code: "SUPABASE_URL_INVALID",
        message:
          "The Supabase request URL is invalid. Set NEXT_PUBLIC_SUPABASE_URL to your project URL, such as https://your-project.supabase.co, without /rest/v1.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json(
    {
      status: "error",
      code: "BOOKING_AVAILABILITY_ERROR",
      message:
        action === "load"
          ? "We could not load booking availability. Check the Supabase URL, server key, table, and schedule configuration."
          : "We could not save your booking. Check the Supabase connection and table configuration.",
    },
    { status: 503 }
  );
}

function getDatabaseError(error: unknown) {
  if (!error || typeof error !== "object") {
    return { code: "", message: "" };
  }

  const value = error as {
    code?: unknown;
    message?: unknown;
  };

  return {
    code: typeof value.code === "string" ? value.code : "",
    message:
      typeof value.message === "string"
        ? value.message
        : "",
  };
}

function isMissingBookingsTable(error: unknown) {
  const { code, message } = getDatabaseError(error);
  const normalizedMessage = message.toLowerCase();

  return (
    code === "42P01" ||
    code === "PGRST205" ||
    (normalizedMessage.includes("demo_bookings") &&
      (normalizedMessage.includes("schema cache") ||
        normalizedMessage.includes("does not exist")))
  );
}
