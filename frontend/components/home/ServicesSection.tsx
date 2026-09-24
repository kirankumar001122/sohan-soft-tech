import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const services = [
  {
    number: "01",
    title: "Web & Digital Solutions",
    description:
      "Websites, web applications and digital experiences designed around business needs.",
    href: "/services/web-development",
    items: ["Web Development", "E-Commerce", "Web Applications"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Mobile solutions that help businesses connect with customers and teams.",
    href: "/services/mobile-app-development",
    items: ["Android Apps", "Business Apps", "Customer Apps"],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Intelligent technology and automation that streamline business processes.",
    href: "/services/ai-automation",
    items: ["AI Solutions", "Process Automation", "WhatsApp Automation"],
  },
  {
    number: "04",
    title: "Business Software",
    description:
      "Custom software and digital systems built around everyday business operations.",
    href: "/services/business-software",
    items: ["Business Systems", "Custom Software", "Management Platforms"],
  },
  {
    number: "05",
    title: "Digital Growth",
    description:
      "Digital services that help businesses improve visibility, communication and customer engagement.",
    href: "/services/digital-marketing",
    items: ["SEO", "Digital Marketing", "Social Media"],
  },
  {
    number: "06",
    title: "IT & Infrastructure",
    description:
      "Technology infrastructure and office IT solutions for reliable business operations.",
    href: "/services/office-it-setup",
    items: ["Office IT", "Infrastructure", "Technical Support"],
  },
];

export default function ServicesSection() {
  return (
    <Section className="bg-white">
      {/* Section Header */}
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
          Our Services
        </p>

        <Heading as="h2">
          Technology services for the way your business works.
        </Heading>

        <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          From building digital products to automating operations and
          supporting business technology, we bring the capabilities needed
          to solve practical technology challenges.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--border-light)] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.number}
            href={service.href}
            className="group bg-white p-7 transition-colors duration-200 hover:bg-[var(--background-soft)] sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-[var(--brand-green)]">
                {service.number}
              </span>

              <span className="text-lg text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <h3 className="mt-12 text-xl font-semibold tracking-tight">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              {service.description}
            </p>

            <div className="mt-6 space-y-2">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 text-sm font-semibold text-[var(--brand-green)]">
              Explore service →
            </div>
          </Link>
        ))}
      </div>

      {/* All Services CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="rounded-full border border-[var(--border-light)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
        >
          Explore All Services
        </Link>
      </div>
    </Section>
  );
}