"use client";

interface BookingCalendarProps {
  month: Date;
  selectedDate: string;
  availableDates: string[];
  loading: boolean;
  onMonthChange: (month: Date) => void;
  onSelectDate: (date: string) => void;
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BookingCalendar({
  month,
  selectedDate,
  availableDates,
  loading,
  onMonthChange,
  onSelectDate,
}: BookingCalendarProps) {
  const today = getToday();
  const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
  const monthLabel = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(month.getFullYear(), month.getMonth(), 1)));
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const offset = (monthStart.getDay() + 6) % 7;
  const available = new Set(availableDates);
  const currentMonth = new Date(today.slice(0, 7) + "-01T00:00:00");
  const lastMonth = new Date(today + "T00:00:00");
  lastMonth.setDate(lastMonth.getDate() + 60);
  const maxMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-[var(--ink)]">Select a date</h3>
          <p className="mt-1 text-xs text-[var(--text-muted)]">Available times are shown in IST</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous month"
            disabled={month <= currentMonth}
            onClick={() => onMonthChange(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <span className="min-w-28 text-center text-sm font-semibold text-[var(--ink)]" aria-live="polite">{monthLabel}</span>
          <button
            type="button"
            aria-label="Next month"
            disabled={month >= maxMonth}
            onClick={() => onMonthChange(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1" aria-label={monthLabel}>
        {weekdays.map((weekday) => (
          <span key={weekday} className="py-2 text-center text-[11px] font-semibold text-[var(--text-muted)]">{weekday}</span>
        ))}
        {Array.from({ length: offset }, (_, index) => <span key={`empty-${index}`} aria-hidden="true" />)}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const date = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isAvailable = available.has(date) && date >= today;
          return (
            <button
              key={date}
              type="button"
              disabled={!isAvailable || loading}
              onClick={() => onSelectDate(date)}
              aria-pressed={selectedDate === date}
              aria-label={`${monthLabel.split(" ")[0]} ${day}${isAvailable ? ", available" : ", unavailable"}`}
              className={`aspect-square rounded-full text-sm transition ${selectedDate === date ? "bg-[var(--brand-gold)] font-semibold text-[var(--ink)]" : isAvailable ? "font-medium text-[var(--ink)] hover:bg-[var(--brand-gold-soft)]" : "cursor-not-allowed text-slate-300"}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <p className="mt-4 min-h-5 text-center text-xs text-[var(--text-muted)]" role="status" aria-live="polite">
        {loading ? "Checking availability..." : availableDates.length ? "Select an available date" : "No dates are currently available this month"}
      </p>
    </div>
  );
}

function getToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}