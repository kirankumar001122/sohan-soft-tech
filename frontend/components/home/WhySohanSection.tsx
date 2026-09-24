import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const principles = [
  {
    number: "01",
    title: "Business-first thinking",
    description:
      "Technology decisions should start with the business requirement, not with technology for its own sake.",
  },
  {
    number: "02",
    title: "Connected capabilities",
    description:
      "Digital products, automation, software and infrastructure can work together as part of a broader technology ecosystem.",
  },
  {
    number: "03",
    title: "Practical solutions",
    description:
      "Solutions should be understandable, useful and aligned with how organizations actually operate.",
  },
  {
    number: "04",
    title: "Long-term approach",
    description:
      "Technology should support the business beyond the initial implementation as needs evolve.",
  },
];

export default function WhySohanSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Why Sohan Soft Tech
          </p>

          <Heading as="h2">
            Technology with a practical business perspective.
          </Heading>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            We approach technology as a business enabler — connecting
            digital experiences, software, automation and technology
            infrastructure around real organizational requirements.
          </p>
        </div>

        {/* Principles */}
        <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="grid gap-4 py-7 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <span className="text-sm font-medium text-[var(--brand-green)]">
                {principle.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}