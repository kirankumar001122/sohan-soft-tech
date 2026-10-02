import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { solutionCategoryImages, solutionImages } from "@/data/catalogAssets";
import {
  getSolutionBySlug,
  getSolutionCategoryBySlug,
  solutionCategories,
} from "@/data/solutions";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ---------------------------------------------------------
 * IMAGE MAPPING
 * --------------------------------------------------------- */

function getSolutionImage(slug: string) {
  return solutionImages[slug] ?? "/images/business_solution.jpg";
}

/* ---------------------------------------------------------
 * CATEGORY IMAGE MAPPING
 * --------------------------------------------------------- */

function getCategoryImage(slug: string) {
  return solutionCategoryImages[slug] ?? "/images/business_solution.jpg";
}

/* ---------------------------------------------------------
 * PROFESSIONAL SOLUTION CONTENT
 * --------------------------------------------------------- */

const solutionDetails: Record<
  string,
  { overview: string; capabilities: string[]; value: string }
> = {
  "business-solutions": {
    overview:
      "Connected technology solutions that bring business processes, software and digital operations together around the way an organization works.",
    capabilities: [
      "Business process digitization",
      "Custom business software",
      "Workflow and system integration",
      "Operational dashboards and reporting",
    ],
    value:
      "Improve operational visibility, reduce manual work and give teams technology that supports everyday business processes.",
  },
  "digital-transformation": {
    overview:
      "Modernize business processes and customer experiences by connecting websites, applications, software, cloud, automation and AI into a practical digital environment.",
    capabilities: [
      "Process modernization",
      "Web and application transformation",
      "Cloud and system integration",
      "AI and workflow automation",
    ],
    value:
      "Create a more connected digital environment while improving processes, accessibility and operational efficiency.",
  },
  automation: {
    overview:
      "Automation solutions designed to reduce repetitive work, connect workflows and improve how information moves between people, applications and business systems.",
    capabilities: [
      "Workflow automation",
      "WhatsApp and communication automation",
      "Lead and form automation",
      "Data synchronization and notifications",
    ],
    value:
      "Reduce repetitive tasks, improve response times and allow teams to focus on higher-value activities.",
  },
  "education-solutions": {
    overview:
      "Technology solutions designed around the operational, academic and communication requirements of schools, colleges, PU colleges, coaching institutes and other education organizations.",
    capabilities: [
      "Education ERP systems",
      "Student and staff management",
      "Attendance and fee workflows",
      "Parent communication and notifications",
    ],
    value:
      "Connect academic and administrative workflows while making communication between institutions, staff, students and parents easier.",
  },
  "learning-management": {
    overview:
      "Digital learning solutions that help organizations manage courses, learning content, students, training workflows and online learning activities.",
    capabilities: [
      "Learning management systems",
      "Course and content management",
      "Student learning workflows",
      "Online training and communication",
    ],
    value:
      "Provide a structured digital environment for delivering, managing and tracking learning experiences.",
  },
  "whatsapp-business": {
    overview:
      "WhatsApp-based business communication solutions for customer conversations, notifications, lead management and automated business workflows.",
    capabilities: [
      "WhatsApp business automation",
      "Customer notifications",
      "Lead collection and follow-up",
      "Automated communication workflows",
    ],
    value:
      "Help businesses communicate with customers faster while reducing repetitive communication tasks.",
  },
  "customer-communication": {
    overview:
      "Connected digital communication solutions that help businesses manage customer interactions across WhatsApp, SMS, email and other digital channels.",
    capabilities: [
      "WhatsApp communication",
      "SMS and notification workflows",
      "Email automation",
      "Lead and customer communication",
    ],
    value:
      "Create consistent communication workflows that help businesses stay connected with customers throughout their journey.",
  },
};

/* ---------------------------------------------------------
 * METADATA
 * --------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = getSolutionCategoryBySlug(slug);
  const solution = getSolutionBySlug(slug);

  if (solution) {
    return {
      title: solution.title,
      description: solution.description,
      keywords: [
        solution.title,
        "business solutions",
        "technology solutions",
        "automation",
        "digital transformation",
        "Sohan Soft Tech",
      ],
      openGraph: {
        title: `${solution.title} | Sohan Soft Tech`,
        description: solution.description,
        type: "website",
      },
    };
  }

  if (category) {
    return {
      title: category.title,
      description: category.description,
      keywords: [
        category.title,
        "business solutions",
        "technology solutions",
        "digital transformation",
        "Sohan Soft Tech",
      ],
      openGraph: {
        title: `${category.title} | Sohan Soft Tech`,
        description: category.description,
        type: "website",
      },
    };
  }

  return {
    title: "Solution Not Found",
    description:
      "The requested Sohan Soft Tech solution could not be found.",
  };
}

/* ---------------------------------------------------------
 * STATIC PARAMS
 * --------------------------------------------------------- */

export function generateStaticParams() {
  const categoryParams = solutionCategories.map((category) => ({
    slug: category.slug,
  }));

  const individualParams = solutionCategories.flatMap((category) =>
    category.solutions.map((solution) => ({
      slug: solution.slug,
    }))
  );

  const navigationAliasParams = [
    {
      slug: "digital-communication",
    },
  ];

  return [
    ...categoryParams,
    ...individualParams,
    ...navigationAliasParams,
  ];
}

/* ---------------------------------------------------------
 * PAGE
 * --------------------------------------------------------- */

export default async function SolutionPage({
  params,
}: SolutionPageProps) {
  const { slug } = await params;

  /* ---------------------------------------------------------
   * CATEGORY PAGE
   * --------------------------------------------------------- */

  const solutionCategory = getSolutionCategoryBySlug(slug);

  if (solutionCategory) {
    const categoryImage = getCategoryImage(solutionCategory.slug);

    return (
      <main>
        {/* =====================================================
            CATEGORY HERO
        ===================================================== */}

        <section className="bg-[var(--background)] text-[var(--ink)]">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* LEFT CONTENT */}

              <div className="lg:col-span-7">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-gold-deep)]"
                >
                  ← Back to Solutions
                </Link>

                <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
                  Solution
                </p>

                <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl xl:text-5xl lg:text-6xl">
                  {solutionCategory.title}
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                  {solutionCategory.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
                  >
                    Get a Free Consultation
                  </Link>

                  <Link
                    href="#capabilities"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--brand-gold)] bg-white px-6 py-3 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors hover:bg-[var(--brand-gold-deep)] hover:text-white"
                  >
                    Explore Capabilities
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}

              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-[560px]">
                  <div className="overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-[var(--background-soft)] p-2 shadow-[0_20px_50px_rgba(17,17,17,0.08)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[var(--background-soft)]">
                      <Image
                        src={categoryImage}
                        alt={`${solutionCategory.title} - Sohan Soft Tech`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Overview
              </p>

              <Heading as="h2" className="mt-4 text-[var(--ink)]">
                A connected technology approach.
              </Heading>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                {solutionCategory.description}
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
                Explore the capabilities and solution areas that can form part
                of this technology approach.
              </p>
            </div>
          </div>
        </Section>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section
          id="capabilities"
          className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Capabilities
              </p>

              <Heading as="h2" className="mt-4 text-[var(--ink)]">
                What this solution can include.
              </Heading>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutionCategory.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
                >
                  <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base font-medium text-[var(--ink)]">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SOLUTION AREAS
        ===================================================== */}

        <Section>
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Solution Areas
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Technology solutions built around real business requirements.
            </Heading>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              Explore each solution area to understand the capabilities,
              applications and business value that can be combined around
              your organization's requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {solutionCategory.solutions.map((item, index) => {
              const href =
                item.slug === "customer-communication"
                  ? "/solutions/digital-communication"
                  : `/solutions/${item.slug}`;

              const itemImage = getSolutionImage(item.slug);
              const details = solutionDetails[item.slug] ?? {
                overview: item.description,
                capabilities: [
                  "Requirement-focused implementation",
                  "Business workflow integration",
                  "System integration",
                  "Scalable technology approach",
                ],
                value:
                  "A practical technology solution structured around the organization's requirements and existing systems.",
              };

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className="group overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_18px_45px_rgba(17,17,17,0.08)]"
                >
                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[280px] overflow-hidden bg-[var(--background-soft)] lg:min-h-[360px]">
                      <Image
                        src={itemImage}
                        alt={`${item.title} - Sohan Soft Tech`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-dark)]/30 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-[var(--brand-gold-deep)] shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
                            Solution Area
                          </p>

                          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
                            {item.title}
                          </h3>
                        </div>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--background-soft)] text-[var(--brand-gold-deep)] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>

                      <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
                        {details.overview}
                      </p>

                      <div className="mt-7">
                        <p className="text-sm font-semibold text-[var(--ink)]">
                          What this can include
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {details.capabilities.map((capability) => (
                            <div
                              key={capability}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold-deep)]" />
                              <span className="text-sm leading-6 text-[var(--text-secondary)]">
                                {capability}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 border-t border-[var(--border-light)] pt-6">
                        <p className="text-sm font-semibold text-[var(--ink)]">
                          Business value
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                          {details.value}
                        </p>
                      </div>

                      <div className="mt-7 text-sm font-semibold text-[var(--brand-gold-deep)] transition-colors group-hover:text-[var(--brand-gold-hover)]">
                        Explore solution →
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* =====================================================
            APPROACH
        ===================================================== */}

        <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                  Our Approach
                </p>

                <Heading as="h2" className="mt-4 text-[var(--ink)]">
                  From requirements to connected technology.
                </Heading>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    description:
                      "Understand the organization's requirements, workflows and technology environment.",
                  },
                  {
                    number: "02",
                    title: "Plan",
                    description:
                      "Define the relevant systems, capabilities, integrations and technology approach.",
                  },
                  {
                    number: "03",
                    title: "Build",
                    description:
                      "Develop or configure the required technology components and workflows.",
                  },
                  {
                    number: "04",
                    title: "Evolve",
                    description:
                      "Keep the solution adaptable as business requirements and technology needs change.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
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
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Related Services
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Services that can support this solution.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Solutions often bring multiple technology capabilities together.
              Explore the relevant services that can support this area.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {getRelatedServiceLinks(solutionCategory.slug).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-[var(--border-light)] bg-white px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                FAQ
              </p>

              <Heading as="h2" className="mt-4 text-[var(--ink)]">
                Questions about this solution?
              </Heading>
            </div>

            <div className="mt-10 divide-y divide-[var(--border-light)] rounded-[20px] border border-[var(--border-light)] bg-white">
              {getSolutionFaqs(solutionCategory.slug).map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-[var(--ink)]">
                    <div className="flex items-center justify-between gap-5">
                      <span>{faq.question}</span>

                      <span className="text-xl font-normal text-[var(--brand-gold-deep)] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[var(--background-soft)]">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                  Let's Build
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                  Have a requirement in this area?
                </h2>

                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                  Tell us what you are trying to build, automate, connect or
                  improve.
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

  /* ---------------------------------------------------------
   * INDIVIDUAL SOLUTION PAGE
   * --------------------------------------------------------- */

  const individualSlug =
    slug === "digital-communication"
      ? "customer-communication"
      : slug;

  const individualSolution = getSolutionBySlug(individualSlug);

  if (!individualSolution) {
    notFound();
  }

  const individualImage = getSolutionImage(individualSlug);

  return (
    <main>
      {/* =====================================================
          INDIVIDUAL SOLUTION HERO
      ===================================================== */}

      <section className="bg-[var(--background)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT CONTENT */}

            <div className="lg:col-span-7">
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-gold-deep)]"
              >
                ← Back to Solutions
              </Link>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
                Solution
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl xl:text-5xl lg:text-6xl">
                {individualSolution.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                {individualSolution.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--brand-gold)] bg-white px-6 py-3 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors hover:bg-[var(--brand-gold-deep)] hover:text-white"
                >
                  Explore All Solutions
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[560px]">
                <div className="overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-[var(--background-soft)] p-2 shadow-[0_20px_50px_rgba(17,17,17,0.08)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[var(--background-soft)]">
                    <Image
                      src={individualImage}
                      alt={`${individualSolution.title} - Sohan Soft Tech`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Solution Overview
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Technology designed around the requirement.
            </Heading>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--text-secondary)]">
              {individualSolution.description}
            </p>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              This solution can be considered as part of a broader technology
              approach based on the organization's requirements, workflows and
              existing systems.
            </p>
          </div>
        </div>
      </Section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Explore
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              How this solution can support your organization.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              The solution can be adapted around the relevant business,
              operational and technology requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Requirement-focused implementation",
              "Business workflow integration",
              "Digital communication",
              "Automation opportunities",
              "System integration",
              "Scalable technology approach",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
              >
                <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Structured around the organization's specific requirements
                  and technology environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTED TECHNOLOGY
      ===================================================== */}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Connected Technology
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Part of a broader technology ecosystem.
            </Heading>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Individual solutions can work together with websites, business
              software, automation, digital systems and communication
              platforms where required.
            </p>
          </div>

          <div className="rounded-[20px] border border-[var(--border-light)] bg-[var(--background-soft)] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              Solution
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
              {individualSolution.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              {individualSolution.description}
            </p>
          </div>
        </div>
      </Section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Let's Build
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                Need this solution for your business?
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                Tell us about your requirement and explore the appropriate
                technology approach.
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

/* ---------------------------------------------------------
 * RELATED SERVICES
 * --------------------------------------------------------- */

function getRelatedServiceLinks(slug: string) {
  const common = [
    {
      title: "Web Development",
      href: "/services/web-development",
    },
    {
      title: "Business Software",
      href: "/services/business-software",
    },
  ];

  const serviceMap: Record<
    string,
    { title: string; href: string }[]
  > = {
    business: [
      ...common,
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
    ],

    education: [
      ...common,
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
    ],

    "digital-transformation": [
      ...common,
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "Office & IT Setup",
        href: "/services/office-it-setup",
      },
    ],

    automation: [
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
    ],

    communication: [
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
    ],

    "office-technology": [
      {
        title: "Office & IT Setup",
        href: "/services/office-it-setup",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "Business IT Solutions",
        href: "/services/business-it",
      },
    ],
  };

  return serviceMap[slug] ?? common;
}

/* ---------------------------------------------------------
 * FAQ
 * --------------------------------------------------------- */

function getSolutionFaqs(slug: string) {
  const faqs: Record<
    string,
    { question: string; answer: string }[]
  > = {
    business: [
      {
        question: "Can business solutions be customized?",
        answer:
          "Yes. The solution approach can be structured around the organization's workflows, requirements and technology environment.",
      },
      {
        question: "Can different business systems be connected?",
        answer:
          "Where suitable integration options are available, different systems can be connected through APIs and other integration mechanisms.",
      },
    ],

    education: [
      {
        question: "What education workflows can be supported?",
        answer:
          "The project scope includes education ERP, LMS, student management, attendance, fees, SMS, WhatsApp and parent communication.",
      },
      {
        question: "Can education systems include communication features?",
        answer:
          "Yes. SMS, WhatsApp automation and parent communication are included within the education solution scope.",
      },
    ],

    "digital-transformation": [
      {
        question: "What does digital transformation cover?",
        answer:
          "The solution can bring together websites, applications, cloud, automation, AI, integrations and business systems according to organizational requirements.",
      },
      {
        question: "Can existing systems be part of the transformation?",
        answer:
          "Existing systems can be considered when defining the required integrations and technology approach.",
      },
    ],

    automation: [
      {
        question: "What types of workflows can be automated?",
        answer:
          "The project scope includes lead, form, email, SMS, WhatsApp, reporting, data synchronization and workflow automation.",
      },
      {
        question: "Can automation connect multiple systems?",
        answer:
          "Third-party integrations and data synchronization are included within the automation service scope where suitable integration mechanisms are available.",
      },
    ],

    communication: [
      {
        question: "Which communication channels are included?",
        answer:
          "The project scope includes WhatsApp, SMS/DLT, email automation, lead collection, notifications and customer communication workflows.",
      },
      {
        question: "Can communication workflows be automated?",
        answer:
          "Yes. Automated responses, lead collection, notifications and WhatsApp automation are included within the communication scope.",
      },
    ],

    "office-technology": [
      {
        question: "What does Office Technology cover?",
        answer:
          "The scope includes office setup, computers, networking, printers, business devices, software, cloud setup, biometrics, IT support and technology consulting.",
      },
      {
        question: "Can office technology be planned as a complete setup?",
        answer:
          "Yes. The service scope specifically includes complete office technology setup and basic infrastructure planning.",
      },
    ],
  };

  return (
    faqs[slug] ?? [
      {
        question: "Can this solution be customized?",
        answer:
          "The solution can be structured around the organization's requirements, workflows and technology environment.",
      },
      {
        question: "Can we discuss our specific requirement?",
        answer:
          "Yes. The consultation CTA can be used to discuss the business requirement and determine the relevant technology approach.",
      },
    ]
  );
}
