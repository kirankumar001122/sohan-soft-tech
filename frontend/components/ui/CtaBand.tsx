import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CtaBand({
  eyebrow = "Start a conversation",
  title,
  copy,
  primaryHref = "/contact",
  primaryLabel = "Get a Free Consultation",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to Us",
}: CtaBandProps) {
  return (
    <Section className="section-dark bg-[var(--background-dark)]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,var(--background-dark)_0%,var(--ink-soft)_55%,var(--brand-gold-deep)_140%)] px-6 py-14 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-3xl">
          <p className="text-eyebrow text-white/70">{eyebrow}</p>
          <Heading as="h2" className="mt-5 text-white">
            {title}
          </Heading>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            {copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-gold-deep)] transition hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
