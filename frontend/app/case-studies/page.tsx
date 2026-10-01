import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore documented technology projects, business challenges and solution approaches from Sohan Soft Tech.",
  keywords: [
    "Sohan Soft Tech case studies",
    "technology case studies",
    "software projects",
    "business automation projects",
    "digital transformation projects",
  ],
  openGraph: {
    title: "Case Studies | Sohan Soft Tech",
    description:
      "Explore documented projects, business challenges and technology solution approaches.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-18 lg:py-14 md:py-16 lg:py-18 sm:px-6 sm:py-18 md:py-14 md:py-16 lg:py-18 lg:py-16 md:py-18 lg:py-14 md:py-16 lg:py-18 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Case Studies
            </p>

            <Heading as="h1" className="mt-5 text-[var(--ink)]">
              Documented technology work and solution approaches.
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Explore documented projects and solution approaches as verified
              case study information becomes available.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Area */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Project Stories
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Verified project stories will appear here.
          </Heading>

          <p className="mt-6 leading-8 text-[var(--text-secondary)]">
            Case studies should be published using verified project
            information, including the actual business challenge, solution,
            implementation details and documented outcomes. No client names,
            statistics, testimonials or project results are being invented
            here.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--background-soft)]">
        <div className="rounded-[var(--radius-lg)] bg-[var(--background-soft)] p-8 sm:p-12">
          <Heading as="h2" className="text-[var(--ink)]">
            Have a project you would like to discuss?
          </Heading>

          <p className="mt-5 max-w-2xl leading-8 text-[var(--text-secondary)]">
            Tell us about your business requirements and technology goals.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
          >
            Talk to Us →
          </a>
        </div>
      </Section>
    </main>
  );
}
