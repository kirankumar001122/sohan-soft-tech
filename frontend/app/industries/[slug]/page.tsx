import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
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

const industryImages: Record<string, string> = {
  education: "/images/education_ind.jpg",
  healthcare: "/images/healthcare_ind.jpg",
  "retail-ecommerce": "/images/retaail_ind.jpg",
  "food-hospitality": "/images/hospitality_ind.jpg",
  "professional-services": "/images/business_ind.jpg",
  manufacturing: "/images/manufacturing_ind.jpg",
  smb: "/images/SMB_ind.png",
  "corporate-offices": "/images/corporate_ind.jpg",
};

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
      <section className="bg-white text-[#172033]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-4xl">
              <Link
                href="/industries"
                className="inline-flex items-center text-sm text-[#64748B] transition-colors hover:text-[#8B2346]"
              >
                ← Back to Industries
              </Link>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Industry
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
                {industry.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#64748B] sm:text-xl">
                {industry.shortDescription}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#64748B]">
                We bring together digital solutions, software, automation and
                technology services around the practical requirements of
                organizations operating in this industry.
              </p>

              <div className="mt-8 grid max-w-4xl gap-4 border-y border-[#E5E7EB] py-6 sm:grid-cols-3">
                {industry.solutions.slice(0, 3).map((solution, index) => (
                  <div key={solution.slug}>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B2346]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-5 text-[#172033]">
                      {solution.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#challenges"
                  className="inline-flex items-center justify-center rounded-full border border-[#8B2346] bg-white px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
                >
                  Explore Industry
                </Link>
              </div>
            </div>

            {industryImages[slug] && (
              <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
                <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#F8F9FB]">
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
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Industry perspective
            </p>

            <Heading as="h2" className="mt-4">
              Technology aligned with industry requirements.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#64748B]">
              {industry.shortDescription}
            </p>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
              Every organization has a different operating environment,
              technology stack and growth plan. Our approach is to understand
              those requirements first and then connect the appropriate digital
              capabilities around them.
            </p>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
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
                  className="rounded-[14px] border border-[#E5E7EB] bg-[#F8F9FB] p-5"
                >
                  <p className="text-2xl font-semibold text-[#172033]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#8B2346]">
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
        className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Industry challenges
            </p>

            <Heading as="h2" className="mt-4">
              Common technology and operational requirements.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
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
                className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <span className="text-sm font-semibold text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-base font-medium leading-7 text-[#172033]">
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
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
            Solutions
          </p>

          <Heading as="h2" className="mt-4">
            Solution areas for {industry.title}.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
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
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <span className="text-sm font-semibold text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#172033]">
                {solution.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[#64748B]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Relevant Services */}
      <section className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Relevant services
            </p>

            <Heading as="h2" className="mt-4">
              Services that can support this industry.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Depending on the requirement, different services can be combined
              to create a broader technology solution.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {getServiceLinks(industry.slug).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-medium text-[#172033] transition-all duration-200 hover:border-[#8B2346] hover:bg-[#F8EEF2] hover:text-[#8B2346]"
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
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
            Relevant products
          </p>

          <Heading as="h2" className="mt-4">
            Products that can support the workflow.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            The following product areas are mapped to this industry based on
            the current project scope.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.relevantProducts.map((product, index) => (
            <div
              key={product}
              className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
            >
              <span className="text-sm font-semibold text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-[#172033]">
                {product}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Automation */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Automation opportunities
              </p>

              <Heading as="h2" className="mt-4 text-[#172033]">
                Reduce repetitive work with connected technology.
              </Heading>

              <p className="mt-5 text-lg leading-8 text-[#64748B]">
                Automation opportunities depend on the organization's actual
                workflows and technology environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industry.automationOpportunities.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
                >
                  <span className="text-sm font-semibold text-[#8B2346]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base font-medium text-[#172033]">
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
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
            Technology
          </p>

          <Heading as="h2" className="mt-4">
            Technology areas that can support the industry.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Technology choices should be based on the organization's
            requirements, existing environment and implementation needs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.technology.map((technology, index) => (
            <div
              key={technology}
              className="rounded-[14px] border border-[#E5E7EB] bg-[#F8F9FB] p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
            >
              <span className="text-sm font-semibold text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-[#172033]">
                {technology}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies Placeholder */}
      <section className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
            Case studies
          </p>

          <Heading as="h2" className="mt-4">
            Real projects will be showcased here.
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
            This section will be populated with verified Sohan Soft Tech
            projects, outcomes and client information once the actual project
            data is available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              FAQ
            </p>

            <Heading as="h2" className="mt-4">
              Questions about {industry.title}?
            </Heading>
          </div>

          <div className="mt-10 divide-y divide-[#E5E7EB] rounded-[20px] border border-[#E5E7EB] bg-white">
            {industry.faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-[#172033]">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

                    <span className="text-xl font-normal text-[#8B2346] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Let's build
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Have a requirement in {industry.title}?
              </h2>

              <p className="mt-4 text-base leading-7 text-[#64748B]">
                Tell us about your organization and explore the technology
                approach that fits your requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
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