import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const points = [
  {
    title: "Business-first thinking",
    description:
      "Requirements, users and outcomes come before tools.",
  },
  {
    title: "Customized solutions",
    description:
      "Implementation is shaped around how your organization already works.",
  },
  {
    title: "Multiple capabilities, one partner",
    description:
      "Digital products, software, automation and infrastructure can sit together.",
  },
  {
    title: "Appropriate modern technology",
    description:
      "We choose technology that fits the problem, not a single default stack.",
  },
  {
    title: "Scalable implementation",
    description:
      "Start with what is needed now, with room to expand later.",
  },
  {
    title: "System integration",
    description:
      "Connect forms, messaging, records and operations where it reduces manual work.",
  },
  {
    title: "Long-term technology support",
    description:
      "Delivery includes the expectation that systems will continue to change.",
  },
];

export default function WhySohanSection() {
  return (
    <Section className="bg-[var(--background)]">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-eyebrow">Why Sohan Soft Tech</p>
          <Heading as="h2" className="mt-4 max-w-[12ch]">
            A partner for practical technology work.
          </Heading>
          <p className="mt-6 max-w-md text-base leading-8 text-[var(--text-secondary)]">
            We do not publish awards, client counts or testimonials that we
            cannot verify. The case for working with us is the way we think
            and deliver.
          </p>
        </div>
        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={point.title} className="grid gap-3 sm:grid-cols-[70px_1fr]">
              <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
