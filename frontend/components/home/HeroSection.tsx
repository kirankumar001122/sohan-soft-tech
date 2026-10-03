import Link from "next/link";
import Section from "@/components/ui/Section";
import RequestDemoButton from "@/components/demo/RequestDemoButton";

export default function HeroSection() {
  return (
    <Section
      tone="dark"
      className="hero-surface !pb-20 !pt-16 sm:!pb-28 sm:!pt-24 lg:!pb-32 lg:!pt-28"
    >
      <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-gold-rich)]/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-rich)]">
            <span className="size-1.5 rounded-full bg-[var(--brand-gold-rich)] shadow-[0_0_14px_var(--brand-gold-rich)]" />
            Sohan Soft Tech
          </div>
          <h1 className="mt-7 max-w-[12ch] text-balance font-[var(--font-heading)] text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-[5.9rem]">
            Technology that moves business forward.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            We build software, AI and automation systems that make ambitious businesses faster, clearer and ready for what&apos;s next.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <RequestDemoButton className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-rich)] px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] shadow-[0_12px_30px_var(--brand-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold-rich)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-night)]">
              Start a conversation
            </RequestDemoButton>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10">
              Explore capabilities <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.14em] text-white/45">
            <span>Build</span><span>Automate</span><span>Operate</span><span>Grow</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem] lg:justify-self-end">
          <div className="hero-orbit absolute -inset-5 rounded-[2.5rem] border border-[var(--brand-gold-rich)]/20" />
          <div className="hero-orbit-reverse absolute -inset-10 rounded-full border border-white/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#211d14]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.16em] text-white/40">
                <span>Systems / 01</span><span className="text-[var(--brand-gold-rich)]">Live</span>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 sm:col-span-2">
                  <p className="text-xs text-white/45">Operating clarity</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-white">+42.8%</p>
                  <div className="mt-5 flex h-16 items-end gap-1.5" aria-label="Performance trend visualization">
                    {[32, 44, 38, 58, 52, 70, 64, 88, 76, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-[var(--brand-gold-deep)] to-[var(--brand-gold-rich)]" style={{ height: `${height}%` }} />)}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4"><p className="text-xs text-white/45">Automations</p><p className="mt-2 text-xl font-semibold text-white">24 active</p></div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4"><p className="text-xs text-white/45">Systems connected</p><p className="mt-2 text-xl font-semibold text-white">18+</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
