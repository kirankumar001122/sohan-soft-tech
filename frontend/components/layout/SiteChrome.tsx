"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute =
    pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}