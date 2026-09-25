import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import {
  getServiceDetailBySlug,
  serviceDetails,
} from "@/data/serviceDetails";

interface ServicePageProps {
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

  const service = getServiceDetailBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description:
        "The requested Sohan Soft Tech service could not be found.",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    keywords: [
      service.title,
      "IT services",
      "technology solutions",
      "software development",
      "Sohan Soft Tech",
    ],
    openGraph: {
      title: `${service.title} | Sohan Soft Tech`,
      description: service.shortDescription,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceDetailBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* =====================================================
    HERO
====================================================== */}
<Section className="bg-white text-[#172033]">
  <div
    className={
      slug === "web-development" || slug === "ecommerce"
        ? "grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16"
        : ""
    }
  >
    <div className="max-w-4xl">
      <Link
        href="/services"
        className="mb-7 inline-flex text-sm text-[#64748B] transition-colors hover:text-[#8B2346]"
      >
        ← Back to Services
      </Link>

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
        Service
      </p>

      <Heading as="h1" className="text-[#172033]">
        {service.title}
      </Heading>

      <p className="mt-7 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
        {service.shortDescription}
      </p>

      <Link
        href={`/contact?service=${encodeURIComponent(service.title)}`}
        className="mt-9 inline-flex rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
      >
        Get a Free Consultation
      </Link>
    </div>

    {slug === "web-development" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/web-development.jpg"
              alt="Web Development"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}

    {slug === "ecommerce" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/ecommerce.jpg"
              alt="E-Commerce"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}
  </div>
</Section>

      {/* =====================================================
          PROBLEM / BUSINESS NEED
      ====================================================== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Business Need
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Why this service matters.
            </Heading>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#64748B]">
              {service.problem}
            </p>
          </div>
        </div>
      </Section>

      {/* =====================================================
          SERVICE INTRODUCTION
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Service Overview
          </p>

          <Heading as="h2" className="text-[#172033]">
            {service.title} built around your requirements.
          </Heading>

          <p className="mt-6 text-base leading-8 text-[#64748B] sm:text-lg">
            {service.introduction}
          </p>
        </div>
      </Section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Capabilities
          </p>

          <Heading as="h2" className="text-[#172033]">
            What we can build and support.
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((capability, index) => (
            <div
              key={capability}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-[#172033]">
                {capability}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Features
            </p>

            <Heading as="h2" className="text-[#172033]">
              Designed around practical requirements.
            </Heading>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-5 py-5"
              >
                <span className="text-sm font-medium text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base text-[#64748B]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Process
          </p>

          <Heading as="h2" className="text-[#172033]">
            From requirement to implementation.
          </Heading>
        </div>

        <div className="mt-14 grid gap-0 border-y border-[#E5E7EB] sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, index) => (
            <div
              key={step}
              className={`p-7 sm:p-8 ${
                index < 3
                  ? "lg:border-b lg:border-[#E5E7EB]"
                  : ""
              } ${
                index % 3 !== 2
                  ? "lg:border-r lg:border-[#E5E7EB]"
                  : ""
              } ${
                index % 2 === 0
                  ? "sm:border-r sm:border-[#E5E7EB] lg:border-r"
                  : ""
              }`}
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-[#172033]">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Technology
            </p>

            <Heading as="h2" className="text-[#172033]">
              Technology aligned with the solution.
            </Heading>

            <p className="mt-6 text-base leading-7 text-[#64748B]">
              The technology approach can be selected according to the
              requirements, integrations and operating environment of
              each project.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {service.technology.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#64748B] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          USE CASES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Use Cases
          </p>

          <Heading as="h2" className="text-[#172033]">
            Where this service can be applied.
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.useCases.map((useCase) => (
            <div
              key={useCase}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8F9FB] p-6 transition-all duration-300 hover:border-[#8B2346]"
            >
              <div className="h-2 w-8 rounded-full bg-[#8B2346]" />

              <h3 className="mt-7 text-base font-semibold text-[#172033]">
                {useCase}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Industries
            </p>

            <Heading as="h2" className="text-[#172033]">
              Relevant across different business environments.
            </Heading>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {service.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#64748B] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Related Services
          </p>

          <Heading as="h2" className="text-[#172033]">
            Other capabilities you may need.
          </Heading>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {service.relatedServices.map((relatedService) => (
            <Link
              key={relatedService}
              href="/services"
              className="rounded-full border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
            >
              {relatedService}
            </Link>
          ))}
        </div>
      </Section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              FAQ
            </p>

            <Heading as="h2" className="text-[#172033]">
              Frequently asked questions.
            </Heading>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-[#172033]">
                  {faq.question}

                  <span className="text-xl font-normal text-[#8B2346] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748B]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <Section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Let's Talk
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Have a requirement related to {service.title}?
          </Heading>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B]">
            Tell us about your requirement and explore the right approach
            for your business.
          </p>

          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="mt-8 inline-flex rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Section>
    </main>
  );
}