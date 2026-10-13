import { createClient } from "@/lib/supabase/server";
import { createBookingDatabaseClient } from "@/lib/demo-bookings";

export const FOUNDER_ADMIN_EMAIL = "krkirankumar827@gmail.com";

export class AdminConfigurationError extends Error {
  constructor() {
    super("Admin service is not configured.");
    this.name = "AdminConfigurationError";
  }
}

export type AdminContext = {
  user: {
    id: string;
    email: string;
  };
  database: ReturnType<typeof createBookingDatabaseClient>;
};

function getAdminEmails() {
  return new Set(
    (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean)
  );
}

function assertAdminConfiguration() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ||
    !process.env.ADMIN_EMAILS?.trim()
  ) {
    throw new AdminConfigurationError();
  }
}

export function isAuthorizedAdmin(email: string | undefined) {
  const normalizedEmail = email?.trim().toLowerCase();

  return Boolean(
    normalizedEmail === FOUNDER_ADMIN_EMAIL &&
      getAdminEmails().has(FOUNDER_ADMIN_EMAIL)
  );
}

export async function getAdminContext(): Promise<AdminContext | null> {
  assertAdminConfiguration();
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user || !user.email || !isAuthorizedAdmin(user.email)) {
    return null;
  }

  return {
    user: { id: user.id, email: user.email },
    database: createBookingDatabaseClient(),
  };
}
