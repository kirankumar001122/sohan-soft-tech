import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const resourceTypes = [
  {
    number: "01",
    title: "Insights",
    description:
      "Technology, automation and digital business insights published by Sohan Soft Tech.",
    href: "/resources/insights",
  },
  {
    number: "02",
    title: "Case Studies",
    description:
      "Documented project stories covering business challenges, solutions and implementation.",
    href: "/case-studies",
  },
  {
    number: "03",
    title: "FAQs",
    description:
      "Answers to common questions about services, solutions and technology projects.",
    href: "/resources/faqs",
  },
];

export default function ResourcesSection() {
  return (
    <Section className="bg-[var(--background-soft)]">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Resources
          </p>

          <Heading as="h2">
            Useful knowledge for better technology decisions.
          </Heading>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Explore insights, project stories and answers designed to help
            businesses understand technology opportunities and make informed
            decisions.
          </p>
        </div>

        {/* Resource Links */}
        <div className="grid gap-4 sm:grid-cols-3">
          {resourceTypes.map((resource) => (
            <Link
              key={resource.number}
              href={resource.href}
              className="group rounded-2xl border border-[var(--border-light)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-[var(--brand-green)]">
                  {resource.number}
                </span>

                <span className="text-lg text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-lg font-semibold tracking-tight">
                {resource.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {resource.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-[var(--brand-green)]">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}