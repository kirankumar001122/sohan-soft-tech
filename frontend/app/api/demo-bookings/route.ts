import { NextResponse } from "next/server";
import {
  createBookingDatabaseClient,
  BookingSetupError,
  getBookingSchedule,
  getScheduleTimes,
  isValidDate,
} from "@/lib/demo-bookings";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const database = createBookingDatabaseClient();
    const schedule = getBookingSchedule();
    const month = url.searchParams.get("month");
    const date = url.searchParams.get("date");

    if (month && /^\d{4}-\d{2}$/.test(month)) {
      const [year, monthNumber] = month.split("-").map(Number);
      if (monthNumber < 1 || monthNumber > 12) {
        return NextResponse.json({ message: "Choose a valid month." }, { status: 400 });
      }

      const monthStart = `${month}-01`;
      const monthEnd = new Date(Date.UTC(year, monthNumber, 0))
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
        const times = bookedByDate.get(booking.booking_date) ?? new Set<string>();
        times.add(String(booking.booking_time).slice(0, 5));
        bookedByDate.set(booking.booking_date, times);
      }

      const availableDates: string[] = [];
      const dayCount = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
      for (let day = 1; day <= dayCount; day += 1) {
        const dayValue = String(day).padStart(2, "0");
        const dateValue = `${month}-${dayValue}`;
        const booked = bookedByDate.get(dateValue) ?? new Set<string>();
        if (getScheduleTimes(dateValue, schedule).some((time) => !booked.has(time))) {
          availableDates.push(dateValue);
        }
      }

      return NextResponse.json({ availableDates, timezone: "Asia/Kolkata" });
    }

    if (date && isValidDate(date)) {
      const { data, error } = await database
        .from("demo_bookings")
        .select("booking_time")
        .eq("booking_date", date);

      if (error) throw error;

      const bookedTimes = new Set(
        (data ?? []).map((booking) => String(booking.booking_time).slice(0, 5))
      );
      const availableSlots = getScheduleTimes(date, schedule).filter(
        (time) => !bookedTimes.has(time)
      );

      return NextResponse.json({ availableSlots, timezone: "Asia/Kolkata" });
    }

    return NextResponse.json(
      { message: "Choose a month or date to see availability." },
      { status: 400 }
    );
  } catch (error) {
    console.error("Demo booking availability error:", error);
    return availabilityErrorResponse(error, "load");
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Enter valid booking details." }, { status: 400 });
  }

  try {
    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Enter your booking details." }, { status: 400 });
    }

    const { name, email, company, phone, date, time } = body as Record<string, unknown>;
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanCompany = typeof company === "string" ? company.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanDate = typeof date === "string" ? date : "";
    const cleanTime = typeof time === "string" ? time : "";

    if (
      !cleanName || cleanName.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || cleanEmail.length > 254 ||
      !cleanCompany || cleanCompany.length > 160 ||
      cleanPhone.length > 40 ||
      !isValidDate(cleanDate) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(cleanTime)
    ) {
      return NextResponse.json(
        { message: "Check the required fields and selected appointment time." },
        { status: 400 }
      );
    }

    const schedule = getBookingSchedule();
    if (!getScheduleTimes(cleanDate, schedule).includes(cleanTime)) {
      return NextResponse.json(
        { message: "That time is no longer available. Choose another slot." },
        { status: 409 }
      );
    }

    const database = createBookingDatabaseClient();
    const { error } = await database.from("demo_bookings").insert({
      attendee_name: cleanName,
      work_email: cleanEmail,
      company_name: cleanCompany,
      phone: cleanPhone || null,
      booking_date: cleanDate,
      booking_time: `${cleanTime}:00`,
      timezone: "Asia/Kolkata",
    });

    if (error?.code === "23505") {
      return NextResponse.json(
        { message: "That time was just booked. Please choose another slot." },
        { status: 409 }
      );
    }
    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Demo booking save error:", error);
    return availabilityErrorResponse(error, "save");
  }
}

function availabilityErrorResponse(error: unknown, action: "load" | "save") {
  if (error instanceof BookingSetupError) {
    return NextResponse.json(
      { status: "not_configured", code: "BOOKING_SETUP_REQUIRED", message: error.message },
      { status: 503 }
    );
  }

  if (isMissingBookingsTable(error)) {
    return NextResponse.json(
      {
        status: "not_configured",
        code: "BOOKING_MIGRATION_REQUIRED",
        message: "Booking setup required: apply frontend/supabase/migrations/20261002000000_create_demo_bookings.sql to the configured Supabase project.",
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
          ? "We could not load booking availability. Check the Supabase connection and try again."
          : "We could not save your booking. Check the Supabase connection and try again.",
    },
    { status: 503 }
  );
}

function isMissingBookingsTable(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const databaseError = error as { code?: unknown; message?: unknown };
  const code = typeof databaseError.code === "string" ? databaseError.code : "";
  const message = typeof databaseError.message === "string"
    ? databaseError.message.toLowerCase()
    : "";

  return (
    code === "42P01" ||
    code === "PGRST205" ||
    (message.includes("demo_bookings") &&
      (message.includes("schema cache") || message.includes("does not exist")))
  );
}