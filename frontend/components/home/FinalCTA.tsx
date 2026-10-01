import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function FinalCTA() {
  return (
    <Section className="section-dark bg-[var(--background-dark)]">
      <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--background-dark)_0%,var(--ink-soft)_55%,var(--brand-gold-deep)_140%)] px-6 py-16 sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-8 h-48 w-48 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 right-16 h-24 w-24 rounded-full bg-white/10 blur-2xl"
        />
        <div className="relative max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
            Next step
          </p>
          <Heading as="h2" className="mt-5 text-white">
            Have a technology project in mind?
          </Heading>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
            Tell us what your business needs. Let&apos;s explore the right
            technology, software or automation solution together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-gold-deep)]"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
