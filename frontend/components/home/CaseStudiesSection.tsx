import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function CaseStudiesSection() {
  return (
    <Section className="bg-[var(--background-soft)]">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Section Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Case Studies
          </p>

          <Heading as="h2">
            Work that connects technology with business needs.
          </Heading>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Our case studies will document selected projects, the challenges
            involved, the solutions delivered and the technology used.
          </p>

          <Link
            href="/case-studies"
            className="mt-8 inline-flex rounded-full border border-[var(--border-light)] bg-white px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
          >
            View All Case Studies
          </Link>
        </div>

        {/* Case Study Framework */}
        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10">
          <div className="flex items-start justify-between border-b border-[var(--border-light)] pb-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Project Stories
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                From challenge to solution.
              </h3>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-green-light)] text-[var(--brand-green)]">
              ↗
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Business Challenge
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Each case study will explain the business or operational
                challenge that needed to be addressed.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Solution
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                The documented technology approach, services and systems
                used to address the requirement.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Technology & Implementation
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Relevant technologies, integrations and implementation
                details will be presented using verified project information.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--border-light)] pt-6">
            <p className="text-xs leading-5 text-[var(--text-muted)]">
              Case-study content will be published using verified Sohan Soft
              Tech project information.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}