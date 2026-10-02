# Demo booking setup

1. Apply `migrations/20261002000000_create_demo_bookings.sql` to the Supabase project before deploying the booking API. The table is private to the server-side service role, and its unique date/time constraint rejects duplicate bookings.
2. Set `SUPABASE_SERVICE_ROLE_KEY` as a server-only environment variable in local development and deployment. Do not use a `NEXT_PUBLIC_` prefix or expose this value in client code.
3. Set `DEMO_BOOKING_DAYS`, `DEMO_BOOKING_START_TIME`, `DEMO_BOOKING_END_TIME`, and `DEMO_BOOKING_DURATION_MINUTES` to the team's actual availability. Days are comma-separated weekday numbers (`0` Sunday through `6` Saturday); times are 24-hour `HH:MM` in `Asia/Kolkata`. No time slots are offered until this schedule is configured.
4. Keep the existing `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` settings. The variable names are listed in `.env.example`.

Appointments are saved in Supabase and confirmed only after a successful insert. Calendar-provider synchronization is not configured.