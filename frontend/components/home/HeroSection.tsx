import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import RequestDemoButton from "@/components/demo/RequestDemoButton";

export default function HeroSection() {
  return (
    <Section tone="white" className="hero-surface !py-16 sm:!py-24 lg:!py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Sohan Soft Tech
        </p>
        <h1 className="mx-auto mt-7 max-w-[18ch] text-balance text-[2.6rem] font-bold leading-[1.04] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem] xl:text-[4.75rem]">
            Technology That Moves Business Forward
            <span className="mt-1 block text-[var(--brand-gold-deep)]">
              with Confidence.
            </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            We bring software, AI, automation and digital expertise together
            to turn ambitious ideas into elegant, dependable business
            systems.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <RequestDemoButton className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-base font-semibold text-[var(--ink)] shadow-[0_10px_24px_rgba(217,149,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-gold-rich)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2">
            Request a Demo
          </RequestDemoButton>
          <Link href="/services">
            <Button variant="outline" className="text-base">
              Explore Our Capabilities
            </Button>
          </Link>
        </div>
        <p className="mt-9 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Imagine. Build. Elevate.
        </p>
      </div>
    </Section>
  );
}
