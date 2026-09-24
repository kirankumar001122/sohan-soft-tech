import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { careersData } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers at Sohan Soft Tech",
  description:
    "Explore career opportunities, technology roles, working culture and the application process at Sohan Soft Tech.",
  keywords: [
    "Sohan Soft Tech careers",
    "technology jobs",
    "software jobs",
    "IT careers",
    "software developer jobs",
    "AI automation careers",
    "technology careers",
  ],
  openGraph: {
    title: "Careers at Sohan Soft Tech",
    description:
      "Explore opportunities to build technology, solve business problems and grow your capabilities at Sohan Soft Tech.",
    type: "website",
  },
};
export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background-dark)] py-24 text-white sm:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
              Careers
            </p>

            <Heading as="h1" className="text-white">
              Build Your Career Around Technology.
            </Heading>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {careersData.introduction}
            </p>

            <div className="mt-8">
              <a
                href="#openings"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-green-dark)]"
              >
                View Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
            Why Sohan Soft Tech
          </p>

          <Heading as="h2" className="mt-4">
            Work on technology that solves real business problems.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            A technology environment can provide opportunities to build,
            learn, solve problems and develop practical technical skills.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {careersData.whyWorkWithUs.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[var(--border-light)] p-7 sm:p-8"
            >
              <span className="text-sm font-medium text-[var(--brand-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Culture */}
      <Section className="bg-[var(--background-soft)]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Culture
            </p>

            <Heading as="h2" className="mt-4">
              Learn, collaborate and keep improving.
            </Heading>

            <p className="mt-5 leading-8 text-[var(--text-secondary)]">
              The culture section provides a framework for the qualities and
              working principles we want to support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {careersData.culture.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Environment */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Technology Environment
            </p>

            <Heading as="h2" className="mt-4">
              Explore different areas of technology.
            </Heading>

            <p className="mt-5 leading-8 text-[var(--text-secondary)]">
              The technology environment spans multiple disciplines and can
              evolve with project and business requirements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {careersData.technologyEnvironment.map((technology) => (
              <div
                key={technology}
                className="rounded-[var(--radius-md)] border border-[var(--border-light)] p-5 font-medium transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Openings */}
      <Section
        className="bg-[var(--background-soft)]"
        containerClassName=""
      >
        <div id="openings" className="scroll-mt-28">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Current Opportunities
            </p>

            <Heading as="h2" className="mt-4">
              Open positions
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Current openings will be published here when verified
              opportunities are available.
            </p>
          </div>

          {careersData.openings.length > 0 ? (
            <div className="grid gap-5">
              {careersData.openings.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="group rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-7 transition-all duration-300 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {job.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--text-secondary)]">
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green-light)] text-[var(--brand-green)] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white px-7 py-12 text-center sm:px-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-green-light)] text-xl text-[var(--brand-green)]">
                +
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                No current openings
              </h3>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[var(--text-secondary)]">
                There are no verified openings published at the moment.
                Please check back when new opportunities become available.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Application Process */}
      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
            Application Process
          </p>

          <Heading as="h2" className="mt-4">
            A clear path from application to opportunity.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            The exact hiring process can vary by role, but the overall
            journey can follow these stages.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {careersData.applicationProcess.map((step) => (
            <div
              key={step.step}
              className="rounded-[var(--radius-lg)] border border-[var(--border-light)] p-6"
            >
              <span className="text-sm font-medium text-[var(--brand-green)]">
                {step.step}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* General CTA */}
      <Section className="bg-[var(--brand-green-light)]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
            Stay Connected
          </p>

          <Heading as="h2" className="mt-4">
            Looking for a future opportunity?
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Explore Sohan Soft Tech, understand our technology capabilities
            and check this page for verified opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-light)] bg-white px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
            >
              About Sohan Soft Tech
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-green-dark)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}