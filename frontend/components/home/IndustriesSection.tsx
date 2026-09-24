import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const industries = [
  {
    number: "01",
    title: "Education",
    description:
      "Digital platforms, education systems and communication tools for educational organizations.",
    href: "/industries/education",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Technology solutions that support healthcare operations, communication and digital experiences.",
    href: "/industries/healthcare",
  },
  {
    number: "03",
    title: "Retail & E-Commerce",
    description:
      "Digital commerce, business systems and customer-focused technology for retail businesses.",
    href: "/industries/retail-ecommerce",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Business technology, automation and digital systems for manufacturing organizations.",
    href: "/industries/manufacturing",
  },
  {
    number: "05",
    title: "Food & Hospitality",
    description:
      "Technology solutions for restaurants, food businesses and hospitality operations.",
    href: "/industries/food-hospitality",
  },
  {
    number: "06",
    title: "Professional Services",
    description:
      "Digital tools and business systems designed for professional service organizations.",
    href: "/industries/professional-services",
  },
  {
    number: "07",
    title: "Small & Medium Businesses",
    description:
      "Practical technology solutions that help growing businesses improve their operations.",
    href: "/industries/smb",
  },
  {
    number: "08",
    title: "Corporate Offices",
    description:
      "Office technology, infrastructure and systems for connected workplace operations.",
    href: "/industries/corporate-offices",
  },
];

export default function IndustriesSection() {
  return (
    <Section className="bg-white">
      {/* Section Header */}
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Industries
          </p>

          <Heading as="h2">
            Technology shaped around your industry.
          </Heading>
        </div>

        <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          Different industries have different challenges. We bring together
          relevant technology, digital services and business systems around
          the needs of each organization.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <Link
            key={industry.number}
            href={industry.href}
            className="group rounded-2xl border border-[var(--border-light)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-[#8B2346]">
                {industry.number}
              </span>

              <span className="text-lg text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <h3 className="mt-10 text-lg font-semibold tracking-tight text-[#172033]">
              {industry.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {industry.description}
            </p>

            <div className="mt-6 text-sm font-semibold text-[#8B2346]">
              Explore industry →
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/industries"
          className="rounded-full border border-[var(--border-light)] bg-white px-6 py-3 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
        >
          Explore All Industries
        </Link>
      </div>
    </Section>
  );
}