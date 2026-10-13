import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard";
import { AdminConfigurationError, getAdminContext } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let context;
  try {
    context = await getAdminContext();
  } catch (error) {
    if (error instanceof AdminConfigurationError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background-soft)] px-5">
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            Admin service is not configured.
          </p>
        </main>
      );
    }
    throw error;
  }

  if (!context) {
    redirect("/admin/login");
  }

  return <AdminDashboard adminEmail={context.user.email ?? ""} />;
}
