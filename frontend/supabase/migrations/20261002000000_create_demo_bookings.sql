create table if not exists public.demo_bookings (
  id uuid primary key default gen_random_uuid(),
  attendee_name text not null check (char_length(attendee_name) between 1 and 120),
  work_email text not null check (char_length(work_email) between 3 and 254),
  company_name text not null check (char_length(company_name) between 1 and 160),
  phone text check (phone is null or char_length(phone) <= 40),
  booking_date date not null,
  booking_time time without time zone not null,
  timezone text not null default 'Asia/Kolkata' check (timezone = 'Asia/Kolkata'),
  created_at timestamptz not null default now(),
  unique (booking_date, booking_time)
);

alter table public.demo_bookings enable row level security;
revoke all on public.demo_bookings from public, anon, authenticated;
grant all on public.demo_bookings to service_role;