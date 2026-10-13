import { NextResponse } from "next/server";
import { AdminConfigurationError, getAdminContext } from "@/lib/admin-auth";

type Action = "confirm" | "complete";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
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

  const { id } = await params;
  if (!isUuid(id)) {
    return NextResponse.json({ message: "Invalid booking ID." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Enter a valid action." }, { status: 400 });
  }

  if (!isObject(body)) {
    return NextResponse.json({ message: "Enter a valid action." }, { status: 400 });
  }

  if (!("action" in body) || typeof body.action !== "string") {
    return NextResponse.json({ message: "Enter a valid action." }, { status: 400 });
  }

  if (!isActionBody(body)) {
    return NextResponse.json(
      { message: "Cancellation and rescheduling are disabled until the live schema and availability behavior are verified." },
      { status: 409 }
    );
  }

  try {
    const { data: updated, error } = await context.database.rpc("admin_transition_demo_booking", {
      p_booking_id: id,
      p_action: body.action,
      p_actor_id: context.user.id,
      p_actor_email: context.user.email ?? "",
    });
    if (error) {
      if (error.code === "P0002") {
        return NextResponse.json({ message: "Booking not found." }, { status: 404 });
      }
      if (error.code === "P0001" || error.code === "22000" || error.code === "22023") {
        return NextResponse.json({ message: error.message }, { status: 409 });
      }
      console.error("Admin booking transition error:", error);
      return NextResponse.json({ message: "Unable to update booking safely." }, { status: 500 });
    }
    if (!isBookingRecord(updated)) {
      console.error("Admin booking transition returned an invalid booking.");
      return NextResponse.json({ message: "Unable to update booking safely." }, { status: 500 });
    }

    return NextResponse.json({
      booking: updated,
      message: `Booking ${updated.status}.`,
    });
  } catch (error) {
    console.error("Admin booking transition error:", error);
    return NextResponse.json({ message: "Unable to update booking safely." }, { status: 500 });
  }
}

function isBookingRecord(value: unknown): value is { status: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    typeof value.status === "string" &&
    ["pending", "confirmed", "completed", "cancelled"].includes(value.status)
  );
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isActionBody(value: Record<string, unknown>): value is { action: Action } {
  return value.action === "confirm" || value.action === "complete";
}
