import { NextResponse } from "next/server";
import { AdminConfigurationError, getAdminContext } from "@/lib/admin-auth";

export const runtime = "nodejs";

const allowedStatuses = new Set(["pending", "confirmed", "completed", "cancelled"]);

export async function GET(request: Request) {
  let context;
  try {
    context = await getAdminContext();
  } catch (error) {
    if (error instanceof AdminConfigurationError) {
      return NextResponse.json({ message: error.message }, { status: 503 });
    }
    console.error("Admin authorization error:", error);
    return NextResponse.json({ message: "Unable to authorize admin request." }, { status: 500 });
  }
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const url = new URL(request.url);
  const format = url.searchParams.get("format");
  const search = url.searchParams.get("search")?.trim();
  const status = url.searchParams.get("status");
  const bookingDate = url.searchParams.get("bookingDate");
  const page = Math.max(Number(url.searchParams.get("page") ?? 1) || 1, 1);
  const pageSize = Math.min(Math.max(Number(url.searchParams.get("pageSize") ?? 25) || 25, 1), 100);

  if (status && !allowedStatuses.has(status)) {
    return NextResponse.json({ message: "Invalid booking status." }, { status: 400 });
  }

  try {
    let query = context.database
      .from("demo_bookings")
      .select("id, booking_reference, attendee_name, work_email, company_name, phone, booking_date, booking_time, timezone, booking_category, status, calendar_event_id, meeting_url, created_at, updated_at", { count: "exact" })
      .order("booking_date", { ascending: false })
      .order("booking_time", { ascending: false });

    if (status) query = query.eq("status", status);
    if (bookingDate) query = query.eq("booking_date", bookingDate);
    if (search) {
      const term = search.replace(/[%(),]/g, " ").trim();
      if (term) {
        query = query.or(`attendee_name.ilike.%${term}%,work_email.ilike.%${term}%,company_name.ilike.%${term}%,booking_reference.ilike.%${term}%`);
      }
    }

    if (format !== "csv") {
      query = query.range((page - 1) * pageSize, page * pageSize - 1);
    }

    const { data, count, error } = await query;
    if (error) throw error;

    const bookings = (data ?? []).map((booking) => {
      if (!isBookingStatus(booking.status)) {
        throw new Error("Booking data contains an invalid status.");
      }

      return booking;
    });

    if (format === "csv") {
      return new NextResponse(toCsv(bookings), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=\"sohan-soft-bookings.csv\"",
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({ bookings, page, pageSize, total: count ?? 0 });
  } catch (error) {
    console.error("Admin booking list error:", error);
    return NextResponse.json({ message: "Unable to load bookings." }, { status: 500 });
  }
}

function isBookingStatus(value: unknown): value is "pending" | "confirmed" | "completed" | "cancelled" {
  return (
    typeof value === "string" &&
    ["pending", "confirmed", "completed", "cancelled"].includes(value)
  );
}

function toCsv(bookings: Array<Record<string, unknown>>) {
  const fields = ["booking_reference", "attendee_name", "work_email", "company_name", "phone", "booking_date", "booking_time", "booking_category", "status", "meeting_url", "created_at"];
  const escape = (value: unknown) => {
    let text = value == null ? "" : String(value);
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""').replaceAll("\r", " ").replaceAll("\n", " ")}"`;
  };
  return [fields.join(","), ...bookings.map((booking) => fields.map((field) => escape(booking[field])).join(","))].join("\r\n");
}
