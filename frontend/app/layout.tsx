import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | Sohan Soft Tech",
    default: "Sohan Soft Tech",
  },
  description:
    "Sohan Soft Tech builds technology, automation and digital solutions that help businesses operate, connect and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}