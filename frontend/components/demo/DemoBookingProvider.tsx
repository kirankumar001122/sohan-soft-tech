"use client";

import Image from "next/image";
import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";

interface DemoBookingContextValue {
  openBooking: () => void;
}

const DemoBookingContext = createContext<DemoBookingContextValue | null>(null);

export function useDemoBooking() {
  const context = useContext(DemoBookingContext);
  if (!context) {
    throw new Error("Demo booking controls must be used inside DemoBookingProvider.");
  }
  return context;
}

export default function DemoBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(() => getCurrentMonth());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilityState, setAvailabilityState] = useState<
    "loading" | "ready" | "setup_required" | "error"
  >("loading");
  const [availabilityError, setAvailabilityError] = useState("");
  const [availabilityRefreshKey, setAvailabilityRefreshKey] = useState(0);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingComplete, setBookingComplete] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  function openBooking() {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setMonth(getCurrentMonth());
    setSelectedDate("");
    setSelectedTime("");
    setAvailableDates([]);
    setAvailableSlots([]);
    setAvailabilityState("loading");
    setAvailabilityError("");
    setAvailabilityLoading(true);
    setBookingError("");
    setBookingComplete(false);
    setIsOpen(true);
  }

  function closeBooking() {
    setIsOpen(false);
  }

  function changeMonth(nextMonth: Date) {
    setAvailabilityLoading(true);
    setAvailabilityState("loading");
    setAvailableDates([]);
    setSelectedDate("");
    setSelectedTime("");
    setAvailableSlots([]);
    setAvailabilityError("");
    setMonth(nextMonth);
  }

  function retryAvailability() {
    setAvailabilityLoading(true);
    setAvailabilityState("loading");
    setAvailabilityError("");
    setAvailabilityRefreshKey((value) => value + 1);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const restoreFocus = previousFocusRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      restoreFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || bookingComplete) return;

    let cancelled = false;
    const monthValue = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;

    fetch(`/api/demo-bookings?month=${monthValue}`)
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          if (result.status === "not_configured") {
            if (!cancelled) {
              setAvailabilityState("setup_required");
              setAvailabilityError(result.message || "Booking setup is required.");
            }
            return null;
          }
          throw new Error(result.message || "Could not load availability.");
        }
        if (!Array.isArray(result.availableDates)) {
          throw new Error("The availability response was incomplete. Please try again.");
        }
        return result as { availableDates: string[] };
      })
      .then((result) => {
        if (!cancelled && result) {
          setAvailableDates(result.availableDates);
          setAvailabilityState("ready");
          setAvailabilityError("");
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setAvailableDates([]);
          setAvailabilityState("error");
          setAvailabilityError(
            error instanceof Error ? error.message : "Could not load availability."
          );
        }
      })
      .finally(() => {
        if (!cancelled) setAvailabilityLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, month, bookingComplete, availabilityRefreshKey]);

  async function selectDate(date: string) {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailableSlots([]);
    setAvailabilityError("");
    setAvailabilityLoading(true);

    try {
      const response = await fetch(`/api/demo-bookings?date=${date}`);
      const result = await response.json();
      if (!response.ok && result.status === "not_configured") {
        setAvailabilityState("setup_required");
        setAvailabilityError(result.message || "Booking setup is required.");
        return;
      }
      if (!response.ok) throw new Error(result.message || "Could not load time slots.");
      if (!Array.isArray(result.availableSlots)) {
        throw new Error("The time-slot response was incomplete. Please try again.");
      }
      setAvailableSlots(result.availableSlots);
    } catch (error) {
      setAvailabilityError(
        error instanceof Error ? error.message : "Could not load time slots."
      );
    } finally {
      setAvailabilityLoading(false);
    }
  }

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      setBookingError("Choose an available date and time before confirming.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    setBookingLoading(true);
    setBookingError("");

    try {
      const response = await fetch("/api/demo-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          phone: formData.get("phone"),
          date: selectedDate,
          time: selectedTime,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "We could not save your booking.");
      }
      setBookingComplete(true);
    } catch (error) {
      setBookingError(
        error instanceof Error ? error.message : "We could not save your booking."
      );
      if (error instanceof Error && error.message.includes("just booked")) {
        void selectDate(selectedDate);
      }
    } finally {
      setBookingLoading(false);
    }
  }

  function trapFocus(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      closeBooking();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <DemoBookingContext.Provider value={{ openBooking }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeBooking();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-booking-title"
            onKeyDown={trapFocus}
            className="relative max-h-[calc(100dvh-24px)] w-full max-w-5xl overflow-y-auto rounded-xl border border-[var(--border-light)] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.25)] sm:max-h-[calc(100dvh-48px)]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeBooking}
              aria-label="Close demo booking"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-white text-2xl leading-none text-[var(--ink)] hover:bg-[var(--background-soft)]"
            >
              <span aria-hidden="true">×</span>
            </button>

            {bookingComplete ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center px-6 py-16 text-center sm:px-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--status-success-soft)] text-2xl font-semibold text-[var(--status-success)]" aria-hidden="true">
                  ✓
                </div>
                <p className="mt-6 text-eyebrow">Booking confirmed</p>
                <h2 id="demo-booking-title" className="mt-3 text-3xl font-semibold text-[var(--ink)]">
                  Your demo is scheduled.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
                  We have saved your appointment for {formatDate(selectedDate)} at {formatTime(selectedTime)} IST. Our team will follow up using the details you provided.
                </p>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--brand-gold-rich)]"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <header className="border-b border-[var(--border-light)] px-6 py-6 pr-16 sm:px-9 sm:py-7 sm:pr-20">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0">
                      <Image src="/sohan-logo.png" alt="" fill sizes="44px" className="object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--ink)]">Sohan Soft Tech</span>
                  </div>
                  <p className="mt-5 text-eyebrow">A conversation built around your goals</p>
                  <h2 id="demo-booking-title" className="mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
                    Book Your Demo
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                    Choose a time to see how our products and services can support your business.
                  </p>
                </header>

                <form onSubmit={submitBooking} className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <section className="border-b border-[var(--border-light)] px-6 py-6 sm:px-9 lg:border-b-0 lg:border-r" aria-label="Choose an appointment time">
                    {availabilityState === "setup_required" ? (
                      <div className="rounded-lg border border-[var(--border-light)] bg-[var(--background)] p-5" role="status">
                        <p className="text-eyebrow">Booking setup required</p>
                        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{availabilityError}</p>
                        <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                          Enable bookings by setting the Supabase server key and real weekly schedule, then applying the demo-bookings migration. See frontend/supabase/README.md for setup details.
                        </p>
                        <button type="button" onClick={retryAvailability} className="mt-4 text-sm font-semibold text-[var(--brand-gold-deep)] underline underline-offset-4">
                          Check setup again
                        </button>
                      </div>
                    ) : availabilityState === "error" ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-5" role="alert">
                        <p className="text-sm leading-6 text-red-800">{availabilityError}</p>
                        <button type="button" onClick={retryAvailability} className="mt-4 text-sm font-semibold text-red-800 underline underline-offset-4">
                          Retry availability
                        </button>
                      </div>
                    ) : (
                      <BookingCalendar
                        month={month}
                        selectedDate={selectedDate}
                        availableDates={availableDates}
                        loading={availabilityLoading && !selectedDate}
                        onMonthChange={changeMonth}
                        onSelectDate={selectDate}
                      />
                    )}
                    {selectedDate && availabilityState !== "setup_required" && (
                      <TimeSlotPicker
                        date={selectedDate}
                        slots={availableSlots}
                        selectedTime={selectedTime}
                        loading={availabilityLoading}
                        onSelect={setSelectedTime}
                      />
                    )}
                    <div className="mt-6 flex items-center gap-2 border-t border-[var(--border-light)] pt-4 text-xs text-[var(--text-secondary)]">
                      <svg className="h-4 w-4 text-[var(--brand-gold-deep)]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      Timezone: Asia/Kolkata (IST)
                    </div>
                    {availabilityError && availabilityState === "ready" && <p role="alert" className="mt-3 text-sm text-red-700">{availabilityError}</p>}
                  </section>

                  <section className="px-6 py-6 sm:px-9" aria-label="Your details">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">Your details</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">We&apos;ll use these details to follow up about your demo.</p>
                    <div className="mt-5 space-y-4">
                      <BookingField label="Full name" name="name" autoComplete="name" required />
                      <BookingField label="Work email" name="email" type="email" autoComplete="email" required />
                      <BookingField label="Company name" name="company" autoComplete="organization" required />
                      <BookingField label="Phone number (optional)" name="phone" type="tel" autoComplete="tel" />
                    </div>
                    {bookingError && <p role="alert" className="mt-4 text-sm text-red-700">{bookingError}</p>}
                    <button
                      type="submit"
                      disabled={bookingLoading || !selectedDate || !selectedTime}
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-gold)] px-6 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-gold-rich)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {bookingLoading ? "Confirming..." : "Confirm Booking"}
                      {!bookingLoading && <span aria-hidden="true">→</span>}
                    </button>
                    <p className="mt-3 text-center text-xs text-[var(--text-muted)]">Your appointment is confirmed only after it is saved.</p>
                  </section>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </DemoBookingContext.Provider>
  );
}

function BookingField({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-[var(--ink)]">
      {label}{required && <span aria-hidden="true"> *</span>}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        maxLength={name === "name" ? 120 : name === "email" ? 254 : name === "company" ? 160 : 40}
        className="mt-1.5 min-h-11 w-full rounded-md border border-[var(--border-light)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand-gold-deep)] focus:ring-2 focus:ring-[var(--brand-gold)]/15"
      />
    </label>
  );
}

function getCurrentMonth() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  return new Date(year, month - 1, 1);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
  }).format(new Date(`${date}T12:00:00+05:30`));
}

function formatTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}