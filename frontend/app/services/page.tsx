import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
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
      "Websites and web applications designed around business requirements, customer experiences and long-term digital needs.",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce",
    description:
      "Digital commerce solutions for businesses looking to present products, manage online operations and support customers throughout the buying journey.",
    href: "/services/ecommerce",
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile applications designed around customer, employee and business requirements, with experiences focused on usability and practical workflows.",
    href: "/services/mobile-app-development",
  },
  {
    title: "AI & Automation",
    description:
      "AI-powered solutions and workflow automation designed to reduce repetitive work, connect processes and support practical business operations.",
    href: "/services/ai-automation",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automated WhatsApp communication and workflows for enquiries, notifications, customer interactions and business processes.",
    href: "/services/whatsapp-automation",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital services that help businesses improve their online presence, reach relevant audiences and create more consistent customer engagement.",
    href: "/services/digital-marketing",
  },
  {
    title: "Business Software",
    description:
      "Software systems designed around business operations, internal workflows, data management and organizational requirements.",
    href: "/services/business-software",
  },
  {
    title: "Office IT Setup",
    description:
      "Technology infrastructure and IT setup for modern business environments, including workplace systems, connectivity and technology support.",
    href: "/services/office-it-setup",
  },
  {
    title: "Technical Services",
    description:
      "Specialized technical capabilities supporting software, infrastructure, integrations and other digital and business technology requirements.",
    href: "/services/technical-services",
  },
];

const serviceFocus = [
  {
    number: "01",
    title: "Digital Products",
    description:
      "Websites, web applications and mobile experiences designed around users and business requirements.",
  },
  {
    number: "02",
    title: "Business Technology",
    description:
      "Software, systems and integrations that support everyday business operations and internal workflows.",
  },
  {
    number: "03",
    title: "Automation & AI",
    description:
      "Practical automation and AI capabilities that can simplify repetitive processes and connect workflows.",
  },
  {
    number: "04",
    title: "Technology Infrastructure",
    description:
      "Cloud, office IT and technical solutions that support reliable digital operations.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
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

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
                From customer-facing digital products to internal business
                systems, we design and develop technology around your
                requirements, workflows and operational needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-2 text-sm text-[#64748B]">
                  Software & Digital Products
                </span>

                <span className="rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-2 text-sm text-[#64748B]">
                  Automation & AI
                </span>

                <span className="rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-2 text-sm text-[#64748B]">
                  Business Technology
                </span>
              </div>
            </div>

            {/* RIGHT — SERVICES IMAGE */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative mx-auto w-full max-w-[550px] lg:max-w-none">
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-[#8B2346]/10 blur-[80px]"
                  aria-hidden="true"
                />

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

      {/* =====================================================
          SERVICE FOCUS
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              What We Do
            </p>

            <Heading as="h2" className="text-[#172033]">
              Technology capabilities connected to real business needs.
            </Heading>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-[#64748B] sm:text-lg">
              Our services cover the technology areas organizations commonly
              need to build digital experiences, improve internal processes,
              automate repetitive work and support day-to-day operations.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#64748B]">
              Each engagement can be shaped around the organization's
              requirements, existing systems, users and technology
              environment.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceFocus.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {item.number}
              </span>

              <h3 className="mt-7 text-lg font-semibold tracking-tight text-[#172033]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Capabilities
          </p>

          <Heading as="h2" className="text-[#172033]">
            Explore our service capabilities.
          </Heading>

          <p className="mt-6 text-base leading-8 text-[#64748B]">
            Explore the service areas below to understand how Sohan Soft Tech
            can support different digital, operational and technology
            requirements.
          </p>

          <p className="mt-4 text-base leading-8 text-[#64748B]">
            Each service page provides more detail about the capability, use
            cases, technology considerations and the types of requirements it
            can support.
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

                <span className="text-lg text-[#64748B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8B2346]">
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

      {/* =====================================================
          APPROACH
      ====================================================== */}
      <section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
                Our Approach
              </p>

              <Heading as="h2" className="text-[#172033]">
                From requirement to implementation.
              </Heading>
            </div>

            <div>
              <p className="text-base leading-8 text-[#64748B] sm:text-lg">
                We begin by understanding the requirement, users, existing
                processes and technology environment. From there, the
                appropriate service and implementation approach can be
                defined.
              </p>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                Whether the requirement involves a new website, business
                application, automation workflow, mobile experience or
                technical setup, the objective is to build a solution that
                fits the way the organization works.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}