import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { industryImages } from "@/data/catalogAssets";
import { getIndustryBySlug, industries } from "@/data/industries";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
      description:
        "The requested Sohan Soft Tech industry page could not be found.",
    };
  }

  return {
    title: industry.title,
    description: industry.shortDescription,
    keywords: [
      industry.title,
      "industry technology solutions",
      "business technology",
      "digital solutions",
      "automation",
      "Sohan Soft Tech",
    ],
    openGraph: {
      title: `${industry.title} | Sohan Soft Tech`,
      description: industry.shortDescription,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background)] text-[var(--ink)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-4xl">
              <Link
                href="/industries"
                className="inline-flex items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-gold-deep)]"
              >
                ← Back to Industries
              </Link>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
                Industry
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                {industry.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                {industry.shortDescription}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
                We bring together digital solutions, software, automation and
                technology services around the practical requirements of
                organizations operating in this industry.
              </p>

              <div className="mt-8 grid max-w-4xl gap-4 border-y border-[var(--border-light)] py-6 sm:grid-cols-3">
                {industry.solutions.slice(0, 3).map((solution, index) => (
                  <div key={solution.slug}>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-5 text-[var(--ink)]">
                      {solution.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#challenges"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--brand-gold)] bg-white px-6 py-3 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors hover:bg-[var(--brand-gold-deep)] hover:text-white"
                >
                  Explore Industry
                </Link>
              </div>
            </div>

            {industryImages[slug] && (
              <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
                <div className="overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white p-2 shadow-[0_20px_50px_rgba(17,17,17,0.08)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[var(--background-soft)]">
                    <Image
                      src={industryImages[slug]}
                      alt={`${industry.title} technology solutions`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Industry perspective
            </p>

            <Heading as="h2" className="mt-4">
              Technology aligned with industry requirements.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[var(--text-secondary)]">
              {industry.shortDescription}
            </p>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              Every organization has a different operating environment,
              technology stack and growth plan. Our approach is to understand
              those requirements first and then connect the appropriate digital
              capabilities around them.
            </p>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              This industry page brings together the key challenges, solution
              areas, relevant services, products, automation opportunities and
              technology areas that can form part of a broader implementation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Solutions", value: industry.solutions.length },
                { label: "Services", value: getServiceLinks(industry.slug).length },
                { label: "Automation Areas", value: industry.automationOpportunities.length },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[14px] border border-[var(--border-light)] bg-[var(--background-soft)] p-5"
                >
                  <p className="text-2xl font-semibold text-[var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--brand-gold-deep)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges */}
      <section
        id="challenges"
        className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Industry challenges
            </p>

            <Heading as="h2" className="mt-4">
              Common technology and operational requirements.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Organizations in this industry can have different operational
              needs. The following areas represent common requirements that can
              be addressed through the right combination of software, digital
              processes, automation, infrastructure and support.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((challenge, index) => (
              <div
                key={challenge}
                className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
              >
                <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-base font-medium leading-7 text-[var(--ink)]">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
            Solutions
          </p>

          <Heading as="h2" className="mt-4">
            Solution areas for {industry.title}.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Explore technology solution areas that can be considered based on
            the organization's requirements. These areas can be combined into
            a connected technology approach rather than treated as isolated
            services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industry.solutions.map((solution, index) => (
            <article
              key={solution.slug}
              className="rounded-[20px] border border-[var(--border-light)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
            >
              <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--ink)]">
                {solution.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Relevant Services */}
      <section className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Relevant services
            </p>

            <Heading as="h2" className="mt-4">
              Services that can support this industry.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              Depending on the requirement, different services can be combined
              to create a broader technology solution.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {getServiceLinks(industry.slug).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-[var(--border-light)] bg-white px-5 py-3 text-sm font-medium text-[var(--ink)] transition-all duration-200 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)] hover:text-[var(--brand-gold-deep)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Products */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
            Relevant products
          </p>

          <Heading as="h2" className="mt-4">
            Products that can support the workflow.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            The following product areas are mapped to this industry based on
            the current project scope.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.relevantProducts.map((product, index) => (
            <div
              key={product}
              className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
            >
              <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                {product}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Automation */}
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Automation opportunities
              </p>

              <Heading as="h2" className="mt-4 text-[var(--ink)]">
                Reduce repetitive work with connected technology.
              </Heading>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                Automation opportunities depend on the organization's actual
                workflows and technology environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industry.automationOpportunities.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
                >
                  <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base font-medium text-[var(--ink)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
            Technology
          </p>

          <Heading as="h2" className="mt-4">
            Technology areas that can support the industry.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Technology choices should be based on the organization's
            requirements, existing environment and implementation needs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.technology.map((technology, index) => (
            <div
              key={technology}
              className="rounded-[14px] border border-[var(--border-light)] bg-[var(--background-soft)] p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
            >
              <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                {technology}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies Placeholder */}
      <section className="bg-[var(--background-soft)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
            Case studies
          </p>

          <Heading as="h2" className="mt-4">
            Real projects will be showcased here.
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            This section will be populated with verified Sohan Soft Tech
            projects, outcomes and client information once the actual project
            data is available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              FAQ
            </p>

            <Heading as="h2" className="mt-4">
              Questions about {industry.title}?
            </Heading>
          </div>

          <div className="mt-10 divide-y divide-[var(--border-light)] rounded-[20px] border border-[var(--border-light)] bg-white">
            {industry.faqs.map((faq) => (
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

      {/* CTA */}
      <section className="bg-[var(--background-soft)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                Let's build
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                Have a requirement in {industry.title}?
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                Tell us about your organization and explore the technology
                approach that fits your requirements.
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

/*
 * ---------------------------------------------------------
 * RELATED SERVICE LINKS
 * ---------------------------------------------------------
 */

function getServiceLinks(slug: string) {
  const serviceMap: Record<
    string,
    { title: string; href: string }[]
  > = {
    education: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
    ],

    healthcare: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
    ],

    "retail-ecommerce": [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "E-Commerce",
        href: "/services/ecommerce",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
    ],

    manufacturing: [
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "Technical Services",
        href: "/services/technical-services",
      },
      {
        title: "Technical Documentation",
        href: "/services/technical-documentation",
      },
      {
        title: "Warranty System",
        href: "/services/warranty-system",
      },
    ],

    "food-hospitality": [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        title: "Google Business Profile",
        href: "/services/google-business-profile",
      },
      {
        title: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
      },
    ],

    "professional-services": [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "Professional Sales Material",
        href: "/services/professional-sales-material",
      },
    ],

    smb: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        title: "Office & IT Setup",
        href: "/services/office-it-setup",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
      },
    ],

    "corporate-offices": [
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
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
      },
    ],
  };

  return (
    serviceMap[slug] ?? [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Business Software",
        href: "/services/business-software",
      },
    ]
  );
}
