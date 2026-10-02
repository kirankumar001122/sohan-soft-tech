import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { industryImages } from "@/data/catalogAssets";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore technology and digital solutions for education, healthcare, retail and e-commerce, manufacturing, food and hospitality, professional services, SMBs and corporate offices.",
  keywords: [
    "technology solutions for industries",
    "education technology",
    "healthcare technology",
    "retail technology",
    "manufacturing technology",
    "hospitality technology",
    "professional services technology",
    "SMB technology",
    "corporate IT solutions",
    "Sohan Soft Tech",
  ],
  openGraph: {
    title: "Industries We Serve | Sohan Soft Tech",
    description:
      "Explore technology, software, automation and digital solutions across multiple business industries.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background)] py-5 text-[var(--ink)] sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* LEFT — CONTENT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
                Industries
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl xl:text-5xl lg:text-6xl">
                Technology built around the way your industry works.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                Sohan Soft Tech brings software, automation, digital systems
                and technology services together around the requirements of
                different industries.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--background-dark)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(17,17,17,0.14)] transition-colors hover:bg-[var(--background-dark-soft)]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#industry-areas"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--brand-gold)] bg-white px-6 py-3 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors hover:bg-[var(--brand-gold-deep)] hover:text-white"
                >
                  Explore Industries
                </Link>
              </div>
            </div>

            {/* RIGHT — INDUSTRY IMAGE */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative mx-auto w-full max-w-[550px] lg:max-w-none">
                {/* Subtle ambient backdrop */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-[var(--brand-gold)]/10 blur-[80px]"
                  aria-hidden="true"
                />

                {/* Editorial Frame */}
                <div className="relative overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white p-2.5 shadow-[0_30px_70px_rgba(17,17,17,0.10)] sm:rounded-[32px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[var(--background-soft)] sm:rounded-[26px]">
                    <Image
                      src="/images/industry.png"
                      alt="Technology built around your industry"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Industry-focused technology
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Technology should fit the business, not the other way around.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[var(--text-secondary)]">
              Every industry has different workflows, communication
              requirements, operational challenges and technology needs.
            </p>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              Explore the industries below to understand the types of
              solutions, services, products and automation opportunities that
              can support different organizations.
            </p>
          </div>
        </div>
      </Section>

      {/* Industry Areas */}
      <section
        id="industry-areas"
        className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Industry areas
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Explore our industry solutions.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Explore technology capabilities aligned with different business
              environments and operational requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--border-light)] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--background-soft)]">
                  <Image
                    src={industryImages[industry.slug] ?? "/images/industry.png"}
                    alt={`${industry.title} industry technology`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.12em] text-[var(--brand-gold-deep)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Industry</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--ink)]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {industry.shortDescription}
                  </p>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold-deep)] transition-colors group-hover:text-[var(--brand-gold-hover)]">
                      Explore industry
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                        <path d="M3.5 10h12m-5-5 5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Model */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Our approach
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Understand the industry. Then build around it.
            </Heading>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Understand the industry's workflows, business requirements and technology environment.",
              },
              {
                number: "02",
                title: "Identify",
                description:
                  "Identify relevant services, products, systems and opportunities for improvement.",
              },
              {
                number: "03",
                title: "Connect",
                description:
                  "Connect the required digital systems, software, communication and automation capabilities.",
              },
              {
                number: "04",
                title: "Evolve",
                description:
                  "Create a technology foundation that can adapt as the organization's requirements change.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[14px] border border-[var(--border-light)] p-6"
              >
                <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cross-Industry Capabilities */}
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Cross-industry capabilities
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Technology capabilities that can work across industries.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Depending on the requirement, organizations can combine
              technology services, software, products and automation
              capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Web & Digital",
              "Business Software",
              "AI & Automation",
              "Communication",
              "Cloud Technology",
              "Office IT",
              "Digital Marketing",
              "Technical Services",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-colors hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
              >
                <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Business Priorities */}
      <section className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Business priorities
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Technology focused on practical business outcomes.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Technology should solve real operational problems. Our approach
              focuses on connecting the right digital capabilities with the
              priorities of each organization.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Improve Operations",
                description:
                  "Digitize processes, organize information and connect business workflows to make day-to-day operations easier to manage.",
              },
              {
                title: "Connect Customers",
                description:
                  "Create better customer communication through websites, WhatsApp, SMS, email and other digital channels.",
              },
              {
                title: "Reduce Repetitive Work",
                description:
                  "Identify repetitive tasks and explore automation opportunities that can improve efficiency and consistency.",
              },
              {
                title: "Manage Business Data",
                description:
                  "Bring business information together through applications, databases, dashboards and connected systems.",
              },
              {
                title: "Modernize Technology",
                description:
                  "Improve existing technology environments through modern applications, cloud platforms, integrations and digital systems.",
              },
              {
                title: "Support Business Growth",
                description:
                  "Build technology foundations that can evolve as the organization, customers and operational requirements grow.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-[var(--border-light)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_15px_40px_rgba(17,17,17,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background-soft)] text-[var(--brand-gold-deep)]">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Technology Model */}
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Industry technology model
              </p>

              <Heading as="h2" className="mt-4 text-[var(--ink)]">
                Start with the requirement. Build the technology around it.
              </Heading>

              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                We do not treat every organization the same. The technology
                approach can be shaped around the organization's workflows,
                customers, teams, existing systems and future requirements.
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
                This allows different technology capabilities to work together
                instead of operating as disconnected systems.
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--border-light)] bg-[var(--background-soft)] p-6 sm:p-8">
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Industry requirement",
                    description:
                      "Understand the organization's workflows, users, challenges and objectives.",
                  },
                  {
                    number: "02",
                    title: "Technology opportunities",
                    description:
                      "Identify suitable software, digital, automation, communication and IT capabilities.",
                  },
                  {
                    number: "03",
                    title: "Connected solution",
                    description:
                      "Bring the relevant technologies together into a practical solution structure.",
                  },
                  {
                    number: "04",
                    title: "Continuous improvement",
                    description:
                      "Adapt the technology as business requirements and operational needs evolve.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-5 border-b border-[var(--border-light)] pb-6 last:border-0 last:pb-0"
                  >
                    <span className="shrink-0 text-sm font-semibold text-[var(--brand-gold-deep)]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-[var(--ink)]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                Looking for technology for your industry?
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                Tell us about your organization, workflow or technology
                requirement and explore the right approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
            >
              Get a Free Consultation
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
