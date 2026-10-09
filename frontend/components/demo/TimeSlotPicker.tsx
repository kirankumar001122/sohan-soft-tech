
interface TimeSlotPickerProps {
  date: string;
  slots: string[];
  selectedTime: string;
  loading: boolean;
  onSelect: (time: string) => void;
}

export default function TimeSlotPicker({
  date,
  slots,
  selectedTime,
  loading,
  onSelect,
}: TimeSlotPickerProps) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
  }).format(new Date(`${date}T12:00:00+05:30`));

  return (
    <div className="mt-6 border-t border-[var(--border-light)] pt-5">
      <h3 className="text-sm font-semibold text-[var(--ink)]">
        Available times{" "}
        <span className="font-normal text-[var(--text-muted)]">
          · {formattedDate}
        </span>
      </h3>

      {loading ? (
        <p
          className="mt-3 text-sm text-[var(--text-secondary)]"
          role="status"
        >
          Loading available times...
        </p>
      ) : slots.length > 0 ? (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              aria-pressed={selectedTime === slot}
              onClick={() => onSelect(slot)}
              className={`flex min-h-10 items-center justify-center whitespace-nowrap rounded-md border px-2 text-xs font-medium transition ${
                selectedTime === slot
                  ? "border-[var(--brand-gold-deep)] bg-[var(--brand-gold-soft)] text-[var(--ink)]"
                  : "border-[var(--border-light)] bg-white text-[var(--ink)] hover:border-[var(--brand-gold)]"
              }`}
            >
              {formatSlotTime(slot)}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          No times remain on this date. Please choose another.
        </p>
      )}
    </div>
  );
}

function formatSlotTime(slot: string) {
  const [start, end] = slot.split("-");

  if (!start || !end) {
    return slot;
  }

  return `${formatSingleTime(start)} – ${formatSingleTime(end)}`;
}

function formatSingleTime(time: string) {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);

  if (!match) {
    return time;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${String(minutes).padStart(2, "0")} ${period}`;
}
