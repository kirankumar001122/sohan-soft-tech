import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const reliabilityPoints = [
  {
    number: "01",
    title: "Secure by design",
    description:
      "Security considerations are incorporated into the solution architecture and implementation process.",
  },
  {
    number: "02",
    title: "Reliable systems",
    description:
      "Solutions are structured with maintainability, stability and dependable operation in mind.",
  },
  {
    number: "03",
    title: "Performance focused",
    description:
      "Web experiences and digital systems are developed with responsive performance and efficient delivery in mind.",
  },
  {
    number: "04",
    title: "Maintainable technology",
    description:
      "Clear architecture and reusable components help make systems easier to maintain and evolve.",
  },
];

export default function SecuritySection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Security & Reliability
          </p>

          <Heading as="h2">
            Technology built with reliability in mind.
          </Heading>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Digital systems need to be dependable beyond their initial
            launch. Our implementation approach considers security,
            performance, maintainability and the long-term operation of the
            solution.
          </p>
        </div>

        {/* Reliability Points */}
        <div className="grid gap-4 sm:grid-cols-2">
          {reliabilityPoints.map((point) => (
            <div
              key={point.number}
              className="rounded-2xl border border-[var(--border-light)] bg-[var(--background-soft)] p-7"
            >
              <span className="text-sm font-medium text-[var(--brand-green)]">
                {point.number}
              </span>

              <h3 className="mt-8 text-lg font-semibold tracking-tight">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}