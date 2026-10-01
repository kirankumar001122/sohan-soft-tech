import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Clarify the business, users, constraints and intended outcome.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Choose a practical approach, scope and sequence of work.",
  },
  {
    number: "03",
    title: "Design",
    description: "Shape the experience, information and system structure.",
  },
  {
    number: "04",
    title: "Build",
    description: "Implement software, automation, content or infrastructure.",
  },
  {
    number: "05",
    title: "Test",
    description: "Review quality, usability and integration before go-live.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy, train teams and connect the required channels.",
  },
  {
    number: "07",
    title: "Support",
    description: "Stay available as requirements and systems evolve.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="how-we-work" className="bg-[var(--background)]">
      <div className="max-w-3xl">
        <p className="text-eyebrow">How we work</p>
        <Heading as="h2" className="mt-4">
          Seven stages from first conversation to ongoing support.
        </Heading>
      </div>
      <div className="mt-12 hidden lg:grid lg:grid-cols-7">
        {steps.map((step, index) => (
          <div key={step.number} className="relative px-3">
            <span className="text-xs font-semibold text-[var(--brand-gold-deep)]">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-0 top-2 hidden h-px w-6 bg-[var(--brand-gold)]/40 xl:block"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-0 border-y border-[var(--border-light)] lg:hidden">
        {steps.map((step) => (
          <div key={step.number} className="border-b border-[var(--border-light)] py-6 last:border-b-0">
            <span className="text-xs font-semibold text-[var(--brand-gold-deep)]">
              {step.number}
            </span>
            <h3 className="mt-2 text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
