import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section tone="white" className="!py-16 sm:!py-20 lg:!py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Sohan Soft Tech
        </p>
        <h1 className="mx-auto mt-7 max-w-[18ch] text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem] xl:text-[4.75rem]">
            Technology That Works
            <span className="mt-1 block text-[var(--brand-gold-deep)]">
              for Your Business.
            </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            We bring software, AI, automation and digital expertise together
            to help businesses work smarter, connect better and grow with
            confidence.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact">
            <Button>Get a Free Consultation</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">Explore Our Capabilities</Button>
          </Link>
        </div>
        <p className="mt-9 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Build. Automate. Operate. Grow.
        </p>
      </div>
    </Section>
  );
}
