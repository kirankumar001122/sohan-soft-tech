"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Booking = {
  id: string;
  booking_reference: string | null;
  attendee_name: string;
  work_email: string;
  company_name: string;
  phone: string | null;
  booking_date: string;
  booking_time: string;
  timezone: string;
  booking_category: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  calendar_event_id: string | null;
  meeting_url: string | null;
  created_at: string;
  updated_at: string;
};

const statuses = ["all", "pending", "confirmed", "completed", "cancelled"] as const;

export default function AdminDashboard({ adminEmail }: { adminEmail: string }) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [status, setStatus] = useState<(typeof statuses)[number]>("all");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadBookings = useCallback(async () => {
    setLoading(true);
    setError("");
    const params = new URLSearchParams({ page: "1", pageSize: "100" });
    if (status !== "all") params.set("status", status);
    if (search.trim()) params.set("search", search.trim());
    if (date) params.set("bookingDate", date);

    const response = await fetch(`/api/admin/bookings?${params}`);
    const result = await response.json();
    if (!response.ok) {
      setError(result.message ?? "Unable to load bookings.");
      setLoading(false);
      return;
    }
    setBookings(result.bookings);
    setLoading(false);
  }, [date, search, status]);

  useEffect(() => {
    const handle = window.setTimeout(() => {
      void loadBookings();
    }, 0);
    return () => window.clearTimeout(handle);
  }, [loadBookings]);

  async function updateBooking(id: string, action: "confirm" | "complete") {
    setError("");
    setMessage("");
    const response = await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.message ?? "Unable to update booking.");
      return;
    }
    setMessage(result.message);
    await loadBookings();
  }

  async function exportCsv() {
    const params = new URLSearchParams({ format: "csv" });
    if (status !== "all") params.set("status", status);
    if (search.trim()) params.set("search", search.trim());
    if (date) params.set("bookingDate", date);
    const response = await fetch(`/api/admin/bookings?${params}`);
    if (!response.ok) {
      const result = await response.json();
      setError(result.message ?? "Unable to export bookings.");
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sohan-soft-bookings.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  async function signOut(event: FormEvent) {
    event.preventDefault();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  const counts = {
    total: bookings.length,
    pending: bookings.filter((booking) => booking.status === "pending").length,
    confirmed: bookings.filter((booking) => booking.status === "confirmed").length,
    completed: bookings.filter((booking) => booking.status === "completed").length,
  };

  return (
    <main className="min-h-screen bg-[var(--background-soft)] px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-eyebrow">Sohan Soft Tech</p>
            <h1 className="mt-2 text-3xl font-semibold">Booking management</h1>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{adminEmail}</p>
          </div>
          <form onSubmit={signOut}>
            <button className="rounded-lg border border-[var(--border-light)] bg-white px-4 py-2 text-sm font-semibold">
              Sign out
            </button>
          </form>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Visible bookings", counts.total],
            ["Pending", counts.pending],
            ["Confirmed", counts.confirmed],
            ["Completed", counts.completed],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[var(--border-light)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <p className="text-sm text-[var(--text-secondary)]">{label}</p>
              <p className="mt-2 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-xl border border-[var(--border-light)] bg-white p-5 shadow-[var(--shadow-soft)]">
          <div className="mb-5 flex flex-wrap gap-3">
            <form
              className="flex min-w-[240px] flex-1 gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                void loadBookings();
              }}
            >
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, email, company or reference"
                className="min-w-0 flex-1 rounded-lg border border-[var(--border-light)] px-3 py-2 text-sm"
              />
              <button className="rounded-lg bg-[var(--brand-gold-deep)] px-4 py-2 text-sm font-semibold text-white">
                Search
              </button>
            </form>
            <select value={status} onChange={(event) => setStatus(event.target.value as (typeof statuses)[number])} className="rounded-lg border border-[var(--border-light)] px-3 py-2 text-sm">
              {statuses.map((value) => <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>)}
            </select>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="rounded-lg border border-[var(--border-light)] px-3 py-2 text-sm" />
            <button onClick={() => void exportCsv()} className="rounded-lg border border-[var(--brand-gold)] px-4 py-2 text-sm font-semibold text-[var(--brand-gold-deep)]">
              Export CSV
            </button>
          </div>

          {error && <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          {message && <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{message}</p>}
          {loading ? <p className="py-12 text-center text-sm text-[var(--text-secondary)]">Loading bookings...</p> : bookings.length === 0 ? <p className="py-12 text-center text-sm text-[var(--text-secondary)]">No bookings match these filters.</p> : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead><tr className="border-b border-[var(--border-light)] text-[var(--text-secondary)]"><th className="px-3 py-3">Booking</th><th className="px-3 py-3">Customer</th><th className="px-3 py-3">Appointment</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Actions</th></tr></thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="px-3 py-4"><strong>{booking.booking_reference ?? "No reference"}</strong><div className="text-xs text-[var(--text-secondary)]">{booking.booking_category ?? "Demo"}</div></td>
                      <td className="px-3 py-4"><strong>{booking.attendee_name}</strong><div className="text-xs text-[var(--text-secondary)]">{booking.work_email}<br />{booking.company_name}</div></td>
                      <td className="px-3 py-4">{booking.booking_date}<br />{booking.booking_time.slice(0, 5)} IST</td>
                      <td className="px-3 py-4"><span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1 text-xs font-semibold capitalize">{booking.status}</span></td>
                      <td className="px-3 py-4"><div className="flex flex-wrap gap-2">{booking.status === "pending" && <button onClick={() => void updateBooking(booking.id, "confirm")} className="text-xs font-semibold text-green-700">Confirm</button>}{booking.status === "confirmed" && <button onClick={() => void updateBooking(booking.id, "complete")} className="text-xs font-semibold text-blue-700">Complete</button>}{booking.meeting_url && <a href={booking.meeting_url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[var(--brand-gold-deep)]">Meet</a>}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
