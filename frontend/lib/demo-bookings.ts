import { createClient } from "@supabase/supabase-js";

export const BOOKING_TIMEZONE = "Asia/Kolkata";
const MAX_DAYS_AHEAD = 60;

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
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export function getBookingSchedule(): BookingSchedule {
  const weekdaysValue = process.env.DEMO_BOOKING_DAYS;
  const startValue = process.env.DEMO_BOOKING_START_TIME;
  const endValue = process.env.DEMO_BOOKING_END_TIME;
  const durationValue = process.env.DEMO_BOOKING_DURATION_MINUTES;
  const weekdays = weekdaysValue
    ?.split(",")
    .map((value) => Number(value.trim()));
  const startMinutes = parseTime(startValue);
  const endMinutes = parseTime(endValue);
  const durationMinutes = Number(durationValue);

  if (
    !weekdays?.length ||
    weekdays.some((day) => !Number.isInteger(day) || day < 0 || day > 6) ||
    startMinutes === null ||
    endMinutes === null ||
    startMinutes >= endMinutes ||
    !Number.isInteger(durationMinutes) ||
    durationMinutes < 15 ||
    durationMinutes > 240
  ) {
    throw new BookingSetupError(
      "Booking setup required: configure DEMO_BOOKING_DAYS, DEMO_BOOKING_START_TIME, DEMO_BOOKING_END_TIME, and DEMO_BOOKING_DURATION_MINUTES using Asia/Kolkata time."
    );
  }

  return {
    weekdays: new Set(weekdays),
    startMinutes,
    endMinutes,
    durationMinutes,
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

export function getScheduleTimes(date: string, schedule: BookingSchedule) {
  if (!isValidDate(date) || date < getTodayInBookingTimezone()) return [];

  const today = getTodayInBookingTimezone();
  const latestDate = new Date(`${today}T00:00:00.000Z`);
  latestDate.setUTCDate(latestDate.getUTCDate() + MAX_DAYS_AHEAD);
  if (date > latestDate.toISOString().slice(0, 10)) return [];

  const weekday = new Date(`${date}T00:00:00.000Z`).getUTCDay();
  if (!schedule.weekdays.has(weekday)) return [];

  const now = new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date());
  const times: string[] = [];
  for (
    let minutes = schedule.startMinutes;
    minutes + schedule.durationMinutes <= schedule.endMinutes;
    minutes += schedule.durationMinutes
  ) {
    const time = formatTime(minutes);
    if (date !== today || time > now) times.push(time);
  }
  return times;
}

export function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function parseTime(value: string | undefined) {
  if (!value || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return null;
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTime(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}