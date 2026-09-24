import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
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

export default async function SolutionPage({
  params,
}: SolutionPageProps) {
  const { slug } = await params;

  /*
   * ---------------------------------------------------------
   * CATEGORY PAGE
   * ---------------------------------------------------------
   */

  const solutionCategory = getSolutionCategoryBySlug(slug);

  if (solutionCategory) {
    return (
      <main>
        {/* Hero */}
        <section className="bg-white text-[#172033]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm text-[#64748B] transition-colors hover:text-[#8B2346]"
              >
                ← Back to Solutions
              </Link>

              <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Solution
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-7xl">
                {solutionCategory.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#64748B] sm:text-xl">
                {solutionCategory.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-[#8B2346] bg-white px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Overview
              </p>

              <Heading as="h2" className="mt-4 text-[#172033]">
                A connected technology approach.
              </Heading>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[#64748B]">
                {solutionCategory.description}
              </p>

              <p className="mt-5 text-base leading-7 text-[#64748B]">
                Explore the capabilities and solution areas that can form part
                of this technology approach.
              </p>
            </div>
          </div>
        </Section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Capabilities
              </p>

              <Heading as="h2" className="mt-4 text-[#172033]">
                What this solution can include.
              </Heading>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutionCategory.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
                >
                  <span className="text-sm font-semibold text-[#8B2346]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base font-medium text-[#172033]">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Areas */}
        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Solution Areas
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Explore the possibilities.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Each solution can be structured around the organization's
              requirements, workflows and technology environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutionCategory.solutions.map((item, index) => {
              const href =
                item.slug === "customer-communication"
                  ? "/solutions/digital-communication"
                  : `/solutions/${item.slug}`;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className="group block rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-sm font-semibold text-[#8B2346]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EEF2] text-[#8B2346] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#64748B]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* Approach */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                  Our Approach
                </p>

                <Heading as="h2" className="mt-4 text-[#172033]">
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
                    className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
                  >
                    <span className="text-sm font-semibold text-[#8B2346]">
                      {item.number}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold text-[#172033]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Related Services
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Services that can support this solution.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Solutions often bring multiple technology capabilities together.
              Explore the relevant services that can support this area.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {getRelatedServiceLinks(solutionCategory.slug).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <section className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                FAQ
              </p>

              <Heading as="h2" className="mt-4 text-[#172033]">
                Questions about this solution?
              </Heading>
            </div>

            <div className="mt-10 divide-y divide-[#E5E7EB] rounded-[20px] border border-[#E5E7EB] bg-white">
              {getSolutionFaqs(solutionCategory.slug).map((faq) => (
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
                  Let's Build
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                  Have a requirement in this area?
                </h2>

                <p className="mt-4 text-base leading-7 text-[#64748B]">
                  Tell us what you are trying to build, automate, connect or
                  improve.
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
   * INDIVIDUAL SOLUTION PAGE
   * ---------------------------------------------------------
   */

  const individualSlug =
    slug === "digital-communication"
      ? "customer-communication"
      : slug;

  const individualSolution = getSolutionBySlug(individualSlug);

  if (!individualSolution) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-white text-[#172033]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/solutions"
              className="inline-flex items-center text-sm text-[#64748B] transition-colors hover:text-[#8B2346]"
            >
              ← Back to Solutions
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Solution
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-7xl">
              {individualSolution.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#64748B] sm:text-xl">
              {individualSolution.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
              >
                Get a Free Consultation
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-[#8B2346] bg-white px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
              >
                Explore All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Solution Overview
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Technology designed around the requirement.
            </Heading>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#64748B]">
              {individualSolution.description}
            </p>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
              This solution can be considered as part of a broader technology
              approach based on the organization's requirements, workflows and
              existing systems.
            </p>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <section className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Explore
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              How this solution can support your organization.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
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
                className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <span className="text-sm font-semibold text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[#172033]">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  Structured around the organization's specific requirements
                  and technology environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Technology */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Connected Technology
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Part of a broader technology ecosystem.
            </Heading>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
              Individual solutions can work together with websites, business
              software, automation, digital systems and communication
              platforms where required.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8F9FB] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
              Solution
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#172033]">
              {individualSolution.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#64748B]">
              {individualSolution.description}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Let's Build
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Need this solution for your business?
              </h2>

              <p className="mt-4 text-base leading-7 text-[#64748B]">
                Tell us about your requirement and explore the appropriate
                technology approach.
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
 * RELATED SERVICES
 * ---------------------------------------------------------
 */

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

/*
 * ---------------------------------------------------------
 * FAQ
 * ---------------------------------------------------------
 */

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