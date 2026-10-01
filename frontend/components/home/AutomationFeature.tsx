import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const nodes = [
  "Enquiry",
  "Intelligent Automation",
  "Business Process",
  "Customer Communication",
  "Reporting",
];

export default function AutomationFeature() {
  return (
    <Section className="section-dark bg-[var(--background-dark)]">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-rich)]">
            Visual demonstration
          </p>
          <Heading as="h2" className="mt-4 text-white">
            Make your business work smarter.
          </Heading>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            A conceptual workflow showing how enquiries can move through
            automation, operations, customer messaging and reporting. This
            is an illustrative diagram, not a live system.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/75">
            <li>AI-assisted workflow design</li>
            <li>WhatsApp, email and SMS automation</li>
            <li>Integrations between business tools</li>
            <li>Reporting that follows the process</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[var(--background-dark-soft)] p-6">
          <div className="space-y-3">
            {nodes.map((node, index) => (
              <div key={node} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold-deep)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{node}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
