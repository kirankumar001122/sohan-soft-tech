
alter table public.demo_bookings
  add column if not exists booking_category text,
  add column if not exists booking_reference text,
  add column if not exists calendar_event_id text,
  add column if not exists meeting_url text;

-- Prevent duplicate booking references when one is present.
create unique index if not exists
  demo_bookings_booking_reference_unique
on public.demo_bookings (booking_reference)
where booking_reference is not null;

-- Prevent duplicate Calendar event IDs when one is present.
create unique index if not exists
  demo_bookings_calendar_event_id_unique
on public.demo_bookings (calendar_event_id)
where calendar_event_id is not null;
