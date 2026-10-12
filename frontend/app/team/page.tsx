import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import TeamCard from "@/components/team/TeamCard";
import { deliveryTeam, leadershipTeam } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the people behind Sohan Soft Tech, bringing thoughtful technology solutions from strategy through delivery.",
  openGraph: {
    title: "Meet Our Team | Sohan Soft Tech",
    description:
      "Meet the people behind Sohan Soft Tech and the team building thoughtful technology solutions.",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--background-dark)] py-20 text-white sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[var(--brand-gold)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#8c5a00]/15 blur-3xl" />
        <Container className="relative">
          <div className="max-w-4xl team-reveal">
            <p className="text-eyebrow text-[var(--brand-gold-rich)]">Our Team</p>
            <Heading as="h1" className="mt-6 max-w-4xl text-white">
              Meet the People Behind Sohan Soft Tech
            </Heading>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              A focused team collaborating across strategy, design, engineering
              and delivery to build thoughtful technology solutions that work.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-eyebrow">Leadership</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
                Direction with a practical point of view.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              The leadership team sets the direction and keeps every engagement
              grounded in real business needs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.875fr_0.875fr]">
            {leadershipTeam.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                featured={index === 0}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background-soft)] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-eyebrow">Development &amp; Delivery Team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
              Specialists who turn ideas into dependable outcomes.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryTeam.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + 3} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background-dark)] py-16 text-white sm:py-20">
        <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-eyebrow text-[var(--brand-gold-rich)]">Work with us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Have a technology challenge to solve?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold)] px-7 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-gold-rich)]"
          >
            Talk to the team
          </Link>
        </Container>
      </section>
    </main>
  );
}
