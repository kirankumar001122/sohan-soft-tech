
import { createClient } from "@supabase/supabase-js";

export const BOOKING_TIMEZONE = "Asia/Kolkata";

const MAX_DAYS_AHEAD = 60;

// Exactly seven one-hour appointment slots in IST.
// The 1 PM–2 PM break is intentionally excluded.
const ALLOWED_BOOKING_TIMES = [
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
] as const;

export interface BookingSchedule {
  weekdays: Set<number>;
  startMinutes: number;
  endMinutes: number;
  durationMinutes: number;
}

export class BookingSetupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BookingSetupError";
  }
}

export function createBookingDatabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url) {
    throw new BookingSetupError(
      "Booking setup required: configure NEXT_PUBLIC_SUPABASE_URL."
    );
  }

  if (!serviceRoleKey) {
    throw new BookingSetupError(
      "Booking setup required: set SUPABASE_SERVICE_ROLE_KEY as a server-only secret."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function getBookingSchedule(): BookingSchedule {
  const weekdaysValue = process.env.DEMO_BOOKING_DAYS;

  const weekdays = weekdaysValue
    ?.split(",")
    .map((value) => Number(value.trim()));

  if (
    !weekdays?.length ||
    weekdays.some(
      (day) => !Number.isInteger(day) || day < 0 || day > 6
    )
  ) {
    throw new BookingSetupError(
      "Booking setup required: configure DEMO_BOOKING_DAYS with valid weekday numbers."
    );
  }

  return {
    weekdays: new Set(weekdays),
    startMinutes: 10 * 60,
    endMinutes: 18 * 60,
    durationMinutes: 60,
  };
}

export function getTodayInBookingTimezone() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function getCurrentMinutesInBookingTimezone() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: BOOKING_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const hours = Number(
    parts.find((part) => part.type === "hour")?.value
  );

  const minutes = Number(
    parts.find((part) => part.type === "minute")?.value
  );

  return hours * 60 + minutes;
}

export function getScheduleTimes(
  date: string,
  schedule: BookingSchedule
) {
  if (!isValidDate(date) || date < getTodayInBookingTimezone()) {
    return [];
  }

  const today = getTodayInBookingTimezone();

  const latestDate = new Date(`${today}T00:00:00.000Z`);
  latestDate.setUTCDate(
    latestDate.getUTCDate() + MAX_DAYS_AHEAD
  );

  if (date > latestDate.toISOString().slice(0, 10)) {
    return [];
  }

  // JavaScript weekday numbers: Sunday = 0, Monday = 1, etc.
  const weekday = new Date(
    `${date}T00:00:00.000Z`
  ).getUTCDay();

  if (!schedule.weekdays.has(weekday)) {
    return [];
  }

  // Future dates show all seven slots.
  // Today only shows slots that have not started yet.
  if (date !== today) {
    return [...ALLOWED_BOOKING_TIMES];
  }

  const currentMinutes = getCurrentMinutesInBookingTimezone();

  return ALLOWED_BOOKING_TIMES.filter((slot) => {
    const startTime = slot.split("-")[0];
    const startMinutes = parseTime(startTime);

    return (
      startMinutes !== null &&
      startMinutes > currentMinutes
    );
  });
}

export function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value
  );
}

function parseTime(value: string | undefined) {
  if (!value || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
    return null;
  }

  const [hours, minutes] = value.split(":").map(Number);

  return hours * 60 + minutes;
}

function formatTime(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
    minutes % 60
  ).padStart(2, "0")}`;
}