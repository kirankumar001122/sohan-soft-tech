import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: " Services ",
  description:
    "Explore Sohan Soft Tech services across web development, e-commerce, mobile apps, AI and automation, business software, digital marketing, office IT and technical solutions.",
  keywords: [
    "IT services",
    "software development",
    "web development",
    "ecommerce development",
    "mobile app development",
    "AI automation",
    "business software",
    "office IT",
    "Sohan Soft Tech",
  ],
  openGraph: {
    title: "IT Services & Technology Solutions | Sohan Soft Tech",
    description:
      "Explore technology, software, automation, digital and IT services from Sohan Soft Tech.",
    type: "website",
  },
};

const services = [
  {
    title: "Web Development",
    description:
      "Websites and web applications designed around business requirements and digital experiences.",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce",
    description:
      "Digital commerce solutions for businesses looking to sell, manage and grow online.",
    href: "/services/ecommerce",
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile applications designed around customer, employee and business requirements.",
    href: "/services/mobile-app-development",
  },
  {
    title: "AI & Automation",
    description:
      "AI-powered solutions and automation designed to streamline business processes.",
    href: "/services/ai-automation",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automated WhatsApp communication and workflows for business use cases.",
    href: "/services/whatsapp-automation",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital services that help businesses improve visibility and customer engagement.",
    href: "/services/digital-marketing",
  },
  {
    title: "Business Software",
    description:
      "Software systems designed around business operations and organizational requirements.",
    href: "/services/business-software",
  },
  {
    title: "Office IT Setup",
    description:
      "Technology infrastructure and IT setup for modern business environments.",
    href: "/services/office-it-setup",
  },
  {
    title: "Technical Services",
    description:
      "Specialized technical capabilities supporting digital and business requirements.",
    href: "/services/technical-services",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 text-[#172033] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* LEFT — CONTENT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl xl:text-7xl">
                Technology services built around your business.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
                Explore our technology, digital, automation and business
                services designed to help organizations build, operate and
                grow.
              </p>
            </div>

            {/* RIGHT — SERVICES IMAGE */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative mx-auto w-full max-w-[550px] lg:max-w-none">
                {/* Subtle ambient backdrop */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-[#8B2346]/10 blur-[80px]"
                  aria-hidden="true"
                />

                {/* Editorial Frame */}
                <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2.5 shadow-[0_30px_70px_rgba(23,32,51,0.10)] sm:rounded-[32px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F7F8FA] sm:rounded-[26px]">
                    <Image
                      src="/images/technologyy.png"
                      alt="Technology services built around your business"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Capabilities
          </p>

          <Heading as="h2" className="text-[#172033]">
            Explore our service capabilities.
          </Heading>

          <p className="mt-6 text-base leading-8 text-[#64748B]">
            Browse the service areas below to understand how each capability
            can support different business and technology requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg text-[#64748B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h2 className="mt-12 text-xl font-semibold tracking-tight text-[#172033]">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                {service.description}
              </p>

              <p className="mt-7 text-sm font-semibold text-[#8B2346] transition-colors group-hover:text-[#6F1837]">
                Explore service →
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}