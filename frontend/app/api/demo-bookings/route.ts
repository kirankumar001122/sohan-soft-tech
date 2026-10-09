
import { sendDemoBookingWhatsApp } from "@/lib/fast2sms-whatsapp";
import { NextResponse } from "next/server";
import { sendDemoBookingSms } from "@/lib/fast2sms";
import { createDemoMeeting } from "@/lib/google-calendar";
import {
  createBookingDatabaseClient,
  BookingSetupError,
  getBookingSchedule,
  getScheduleTimes,
  isValidDate,
} from "@/lib/demo-bookings";

export const runtime = "nodejs";

const BOOKING_TIMEZONE = "Asia/Kolkata";

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
        const booked =
          bookedByDate.get(booking.booking_date) ??
          new Set<string>();

        booked.add(String(booking.booking_time).slice(0, 5));
        bookedByDate.set(booking.booking_date, booked);
      }

      const availableDates: string[] = [];
      const daysInMonth = new Date(
        Date.UTC(year, monthNumber, 0)
      ).getUTCDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const dateValue =
          `${month}-${String(day).padStart(2, "0")}`;

        const booked =
          bookedByDate.get(dateValue) ?? new Set<string>();

        const hasAvailableSlot = getScheduleTimes(
          dateValue,
          schedule
        ).some((slot) => !booked.has(slot.split("-")[0]));

        if (hasAvailableSlot) availableDates.push(dateValue);
      }

      return NextResponse.json({
        availableDates,
        timezone: BOOKING_TIMEZONE,
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

      const availableSlots = getScheduleTimes(date, schedule)
        .filter((slot) => !bookedTimes.has(slot.split("-")[0]));

      return NextResponse.json({
        availableSlots,
        timezone: BOOKING_TIMEZONE,
      });
    }

    return NextResponse.json(
      { message: "Provide a month or date to check availability." },
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
    return NextResponse.json(
      { message: "Enter valid booking details." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
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
      category,
    } = body as Record<string, unknown>;

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanCompany =
      typeof company === "string" ? company.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanDate = typeof date === "string" ? date : "";
    const cleanTime = typeof time === "string" ? time.trim() : "";
    const cleanCategory =
      typeof category === "string" ? category.trim() : "";

    const timeParts = cleanTime.split("-");
    const bookingStartTime = timeParts[0] ?? "";

    if (
      !cleanName ||
      cleanName.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      !cleanCompany ||
      cleanCompany.length > 160 ||
      !cleanCategory ||
      cleanCategory.length > 120 ||
      !cleanPhone ||
      cleanPhone.length > 40 ||
      !isValidDate(cleanDate) ||
      timeParts.length !== 2 ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(bookingStartTime)
    ) {
      return NextResponse.json(
        {
          message:
            "Check your name, email, company, booking category, phone number, and selected appointment time.",
        },
        { status: 400 }
      );
    }

    const schedule = getBookingSchedule();
    const allowedSlots = getScheduleTimes(cleanDate, schedule);

    if (!(allowedSlots as readonly string[]).includes(cleanTime)) {
      return NextResponse.json(
        {
          message:
            "That appointment time is invalid or no longer available. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    const database = createBookingDatabaseClient();

    const { data: booking, error } = await database
      .from("demo_bookings")
      .insert({
        attendee_name: cleanName,
        work_email: cleanEmail,
        company_name: cleanCompany,
        phone: cleanPhone,
        booking_date: cleanDate,
        booking_time: `${bookingStartTime}:00`,
        timezone: BOOKING_TIMEZONE,
        booking_category: cleanCategory,
      })
      .select("id, booking_reference")
      .single();

    if (error?.code === "23505") {
      return NextResponse.json(
        {
          message:
            "That time was just booked, or the reference already exists. Please choose another slot.",
        },
        { status: 409 }
      );
    }

    if (error) throw error;

    if (!booking?.id) {
      throw new Error("The saved booking did not return an ID.");
    }

    const reference = booking.booking_reference;

    if (
      typeof reference !== "string" ||
      !/^#SST\d+$/.test(reference)
    ) {
      console.error("Invalid booking reference:", reference);

      return NextResponse.json(
        {
          success: true,
          reference: null,
          meetingCreated: false,
          message:
            "Your booking was saved, but its reference needs administrator attention.",
        },
        { status: 201 }
      );
    }

    let calendarEventId: string | null = null;
    let meetingUrl = "";
    let meetingCreated = false;

    try {
      const meeting = await createDemoMeeting({
        name: cleanName,
        email: cleanEmail,
        company: cleanCompany,
        category: cleanCategory,
        date: cleanDate,
        time: cleanTime,
        reference,
      });

      calendarEventId = meeting.eventId;
      meetingUrl = meeting.meetingUrl;

      const { error: updateError } = await database
        .from("demo_bookings")
        .update({
          calendar_event_id: calendarEventId,
          meeting_url: meetingUrl,
        })
        .eq("id", booking.id);

      if (updateError) {
        console.error(
          "Could not save Google Calendar details:",
          updateError
        );
        throw new Error(
          "Calendar event created, but saving its details failed."
        );
      }

      meetingCreated = true;
    } catch (error) {
      console.error(
        "Demo booking Calendar integration failed:",
        error
      );
    }

    let smsSent = false;
    let whatsappSent = false;

    try {
      await sendDemoBookingSms({
        name: cleanName,
        phone: cleanPhone,
        reference,
      });

      smsSent = true;
    } catch (error) {
      console.error("Demo booking SMS failed:", error);
    }

    try {
      await sendDemoBookingWhatsApp({
        name: cleanName,
        phone: cleanPhone,
        reference,
        date: cleanDate,
        time: cleanTime,
        meetingUrl,
      });

      whatsappSent = true;
    } catch (error) {
      console.error("Demo booking WhatsApp failed:", error);
    }

    return NextResponse.json(
      {
        success: true,
        reference,
        meetingCreated,
        meetingUrl: meetingUrl || null,
        smsSent,
        whatsappSent,
        message: meetingCreated
          ? "Your booking has been saved and the meeting invitation has been created."
          : "Your booking has been saved, but the meeting link could not be created yet. Please contact the team.",
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
      { message: error.message },
      { status: 503 }
    );
  }

  const message =
    action === "load"
      ? "Unable to load demo availability right now."
      : "Unable to save your demo booking right now.";

  return NextResponse.json({ message }, { status: 500 });
}
