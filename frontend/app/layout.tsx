import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
