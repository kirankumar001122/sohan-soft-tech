import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function CompanyIntro() {
  return (
    <Section
      id="company-intro"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* LEFT — INTRO */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[var(--brand-green)]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-green)]">
              Who We Are
            </p>
          </div>

          <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--text-muted)]">
            Technology designed around the way your business actually works.
          </p>
        </div>

        {/* RIGHT — CONTENT */}
        <div>
          <Heading
            as="h2"
            className="max-w-5xl text-[2.8rem] leading-[1.02] tracking-[-0.05em] sm:text-[3.8rem] lg:text-[4.7rem]"
          >
            We turn business needs into practical technology.
          </Heading>

          <div className="mt-10 grid gap-8 border-t border-[var(--border-light)] pt-8 sm:grid-cols-2">
            <p className="max-w-md text-base leading-7 text-[var(--text-secondary)]">
              Sohan Soft Tech builds digital solutions, business software,
              automation and technology systems that help organisations work
              better.
            </p>

            <div>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                From building digital experiences to connecting business
                processes and automating repetitive work, our approach focuses
                on technology that is useful, scalable and connected to real
                business requirements.
              </p>

              <Link
                href="/company"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-green)]"
              >
                Discover Sohan Soft Tech
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}