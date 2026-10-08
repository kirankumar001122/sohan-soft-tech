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

const heroDetails: Record<
  string,
  {
    supportingText: string;
    highlights: string[];
  }
> = {
  "web-development": {
    supportingText:
      "We design and develop professional websites and web applications that combine clear user experiences, responsive interfaces and practical business functionality.",
    highlights: ["Responsive Experiences", "Business Integrations", "Scalable Platforms"],
  },
  ecommerce: {
    supportingText:
      "We build digital commerce experiences that help businesses present products clearly, manage customer journeys and create a reliable foundation for online sales.",
    highlights: ["Product Experiences", "Customer Journeys", "Commerce Integrations"],
  },
  "mobile-app-development": {
    supportingText:
      "We create mobile applications for customer, employee and business workflows, with experiences structured around usability, connectivity and practical day-to-day requirements.",
    highlights: ["Android & iOS", "API Connectivity", "Business Workflows"],
  },
  "ai-automation": {
    supportingText:
      "We apply AI, automation and integrations to repetitive business activities, helping teams streamline workflows, connect information and improve digital operations.",
    highlights: ["AI Workflows", "Process Automation", "System Integration"],
  },
  "whatsapp-automation": {
    supportingText:
      "We design WhatsApp-based communication workflows that help businesses connect with customers, automate routine interactions and manage conversations more efficiently.",
    highlights: ["Customer Messaging", "Automated Workflows", "Notifications"],
  },
  "digital-marketing": {
    supportingText:
      "We support digital marketing initiatives with technology, content experiences and connected platforms designed to improve online visibility and customer engagement.",
    highlights: ["Digital Presence", "Customer Engagement", "Campaign Support"],
  },
  "office-it-setup": {
    supportingText:
      "We help businesses establish dependable office technology environments covering systems, connectivity, devices and the practical IT requirements of everyday operations.",
    highlights: ["IT Infrastructure", "Office Connectivity", "Technical Support"],
  },
  "business-software": {
    supportingText:
      "We develop business software around real operational requirements, helping organizations manage workflows, information and day-to-day processes through connected systems.",
    highlights: ["Custom Workflows", "Business Data", "System Integration"],
  },
  "technical-services": {
    supportingText:
      "We provide practical technical services that help businesses maintain, improve and support the technology systems behind their digital operations.",
    highlights: ["Technical Support", "System Maintenance", "IT Assistance"],
  },
};

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
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_86%_8%,rgba(139,35,70,0.045),transparent_28rem),radial-gradient(circle_at_8%_38%,rgba(255,255,255,0.9),transparent_25rem),#F4F5F7]">
{/* =====================================================
    HERO
====================================================== */}
<Section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_88%_12%,rgba(139,35,70,0.055),transparent_24rem),radial-gradient(circle_at_6%_82%,rgba(255,255,255,0.95),transparent_22rem)] text-[#172033]">
  <div
    className={
      slug === "web-development" ||
      slug === "ecommerce" ||
      slug === "mobile-app-development" ||
      slug === "ai-automation" ||
      slug === "whatsapp-automation" ||
      slug === "digital-marketing" ||
      slug === "office-it-setup" ||
      slug === "business-software" ||
      slug === "technical-services"
        ? "grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16"
        : ""
    }
  >
    {/* LEFT CONTENT */}
    <div className="max-w-3xl">
      <Link
        href="/services"
        className="mb-7 inline-flex text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-gold-deep)]"
      >
        ← Back to Services
      </Link>

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
        Service
      </p>

      <Heading as="h1" className="text-[var(--ink)]">
        {service.title}
      </Heading>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
        {service.shortDescription}
      </p>

      <div className="mt-5 max-w-2xl">
        <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          {heroDetails[slug]?.supportingText ??
            `Practical ${service.title.toLowerCase()} solutions designed around business requirements, users and long-term digital needs.`}
        </p>
      </div>

      <div className="mt-7 grid max-w-2xl grid-cols-1 gap-4 border-y border-[var(--border-light)] py-5 sm:grid-cols-3">
        {(heroDetails[slug]?.highlights ?? [
          "Business Requirements",
          "Digital Experience",
          "Technical Support",
        ]).map((item, index) => (
          <div key={item}>
            <span className="text-xs font-medium text-[var(--brand-gold-deep)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium leading-5 text-[var(--ink)]">
              {item}
            </p>
          </div>
        ))}
      </div>

      <Link
        href={`/contact?service=${encodeURIComponent(service.title)}`}
        className="mt-8 inline-flex rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
      >
        Get a Free Consultation
      </Link>
    </div>

    {/* RIGHT IMAGE */}
    {slug === "web-development" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/web-development.jpg"
              alt="Web Development"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}

    {slug === "ecommerce" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/ecommerce.jpg"
              alt="E-Commerce"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}

    {slug === "mobile-app-development" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/app.jpg"
              alt="Mobile App Development"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "ai-automation" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/ai.jpg"
              alt="AI and Automation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "whatsapp-automation" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/whatsapp.jpg"
              alt="WhatsApp Automation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "digital-marketing" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/digital.jpg"
              alt="Digital Marketing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "office-it-setup" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/office.jpg"
              alt="Office and IT Setup"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "business-software" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/business.jpg"
              alt="Business Software"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "technical-services" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white p-2.5 shadow-[0_28px_70px_rgba(23,32,51,0.14)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/technical.jpg"
              alt="Technical Services"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Business Need
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Why this service matters.
            </Heading>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--text-secondary)]">
              {service.problem}
            </p>
          </div>
        </div>
      </Section>

      {/* =====================================================
          SERVICE INTRODUCTION
      ====================================================== */}
      <Section className="bg-[#F4F5F7]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Service Overview
          </p>

          <Heading as="h2" className="text-[var(--ink)]">
            {service.title} built around your requirements.
          </Heading>

          <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {service.introduction}
          </p>
        </div>
      </Section>

      {/* =====================================================
          ADDITIONAL SERVICE INFORMATION
      ====================================================== */}
      <section className="bg-[#F4F5F7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Web Solutions
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Web experiences designed for the way your business works.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              A business website is often the first digital interaction a
              customer has with an organization. It needs to communicate the
              right information clearly while providing a reliable foundation
              for future digital requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              Our web development approach considers the complete experience,
              including content structure, navigation, responsive behaviour,
              business workflows, forms, integrations and future expansion.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Customer Experience",
                description:
                  "Clear navigation, useful content and responsive interfaces designed to help customers understand your business and take meaningful actions.",
              },
              {
                title: "Business Operations",
                description:
                  "Websites and applications can be connected with forms, databases, APIs and internal workflows where the business requires it.",
              },
              {
                title: "Future Expansion",
                description:
                  "The platform can be structured so additional pages, features, integrations and digital services can be introduced as requirements evolve.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/90 bg-white p-7 shadow-[0_12px_35px_rgba(23,32,51,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,32,51,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Capabilities
          </p>

          <Heading as="h2" className="text-[var(--ink)]">
            What we can build and support.
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((capability, index) => (
            <div
              key={capability}
              className="rounded-2xl border border-[var(--border-light)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
            >
              <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-[var(--ink)]">
                {capability}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          SOLUTIONS WE BUILD
      ====================================================== */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
                Solutions We Build
              </p>

              <Heading as="h2" className="text-[var(--ink)]">
                Different web solutions for different business requirements.
              </Heading>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Not every organization needs the same type of website. Some
                businesses require a strong corporate presence, while others
                need customer portals, internal applications or platforms
                connected to existing systems.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                We can structure the development approach around the
                organization&apos;s users, processes, content, integrations
                and technology environment.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--border-light)] md:grid-cols-2">
            {[
              [
                "Corporate Websites",
                "Professional websites for companies to present their organization, services, solutions, industries and contact information.",
              ],
              [
                "Business Websites",
                "Digital platforms focused on communicating services, products, business information and customer enquiries.",
              ],
              [
                "Custom Web Applications",
                "Browser-based applications developed around specific workflows, users, data and operational requirements.",
              ],
              [
                "Business Portals",
                "Centralized web environments that bring information, users and business processes together.",
              ],
              [
                "Customer Platforms",
                "Web experiences designed around registrations, enquiries, bookings, communication and other customer interactions.",
              ],
              [
                "Internal Applications",
                "Web-based tools that can support employee workflows, operational processes, information management and reporting.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="bg-white p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <Section className="bg-[#F4F5F7]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Features
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Designed around practical requirements.
            </Heading>
          </div>

          <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-5 py-5"
              >
                <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base text-[var(--text-secondary)]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          BUSINESS CHALLENGES
      ====================================================== */}
      <section className="bg-[#F4F5F7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Business Challenges
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Addressing the challenges behind your digital requirements.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              Web development is not only about creating pages. The solution
              also needs to consider how customers interact with the business
              and how the organization manages its digital operations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Outdated Digital Presence",
                "Modernize websites that no longer represent the organization&apos;s current services, capabilities or customer experience.",
              ],
              [
                "Disconnected Processes",
                "Bring forms, applications, data and external services together where disconnected processes create unnecessary manual work.",
              ],
              [
                "Complex Customer Journeys",
                "Create clearer digital journeys that help visitors find information and complete important actions.",
              ],
              [
                "Limited Scalability",
                "Create a structured foundation that can support additional features, content and integrations over time.",
              ],
              [
                "Manual Enquiry Handling",
                "Connect website enquiries with appropriate business workflows and notification processes.",
              ],
              [
                "Multiple Digital Requirements",
                "Bring websites, portals, dashboards, applications and integrations together as part of a broader digital requirement.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/90 bg-white p-7 shadow-[0_12px_35px_rgba(23,32,51,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,32,51,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Process
          </p>

          <Heading as="h2" className="text-[var(--ink)]">
            From requirement to implementation.
          </Heading>
        </div>

        <div className="mt-10 grid gap-0 border-y border-[var(--border-light)] sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, index) => (
            <div
              key={step}
              className={`p-7 sm:p-8 ${
                index < 3
                  ? "lg:border-b lg:border-[var(--border-light)]"
                  : ""
              } ${
                index % 3 !== 2
                  ? "lg:border-r lg:border-[var(--border-light)]"
                  : ""
              } ${
                index % 2 === 0
                  ? "sm:border-r sm:border-[var(--border-light)] lg:border-r"
                  : ""
              }`}
            >
              <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-[var(--ink)]">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      <Section className="bg-[#F4F5F7]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Technology
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Technology aligned with the solution.
            </Heading>

            <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">
              The technology approach can be selected according to the
              requirements, integrations and operating environment of each
              project.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {service.technology.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border-light)] bg-white px-4 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================
          WHAT YOU CAN EXPECT
      ====================================================== */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
                What You Can Expect
              </p>

              <Heading as="h2" className="text-[var(--ink)]">
                A structured web development experience.
              </Heading>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Our development process is structured around understanding the
                requirement first and then translating it into a practical
                digital solution.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                The exact implementation depends on the project&apos;s scope,
                users, integrations, content requirements and technology
                environment.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              [
                "Clear Requirement Understanding",
                "The project begins by understanding the business objective, users, workflows and expected functionality.",
              ],
              [
                "Responsive User Experience",
                "Interfaces are designed to provide a consistent experience across desktop, tablet and mobile devices.",
              ],
              [
                "Structured Implementation",
                "Reusable components and organized development practices help keep the application easier to maintain and extend.",
              ],
              [
                "Integration Support",
                "Where required, applications can connect with APIs, databases, payment services and other external systems.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="border-l-2 border-[var(--brand-gold)] pl-6"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}
      <Section>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Use Cases
          </p>

          <Heading as="h2" className="text-[var(--ink)]">
            Where this service can be applied.
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.useCases.map((useCase) => (
            <div
              key={useCase}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F4F5F7] p-6 transition-all duration-300 hover:border-[#8B2346]"
            >
              <div className="h-2 w-8 rounded-full bg-[var(--brand-gold-deep)]" />

              <h3 className="mt-7 text-base font-semibold text-[var(--ink)]">
                {useCase}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <Section className="bg-[#F4F5F7]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Industries
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Relevant across different business environments.
            </Heading>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {service.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[var(--border-light)] bg-white px-4 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
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
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Related Services
          </p>

          <Heading as="h2" className="text-[var(--ink)]">
            Other capabilities you may need.
          </Heading>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {service.relatedServices.map((relatedService) => (
            <Link
              key={relatedService}
              href="/services"
              className="rounded-full border border-[var(--border-light)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
            >
              {relatedService}
            </Link>
          ))}
        </div>
      </Section>

      {/* =====================================================
          BUSINESS VALUE
      ====================================================== */}
      <section className="bg-[#F4F5F7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Business Value
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              More than a website. A foundation for digital operations.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              A well-structured web platform can become an important part of
              how a business communicates, manages enquiries, delivers
              services and connects with customers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Improve digital communication",
              "Create clearer customer journeys",
              "Reduce repetitive manual processes",
              "Connect digital systems and services",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/90 bg-white p-6 shadow-[0_12px_35px_rgba(23,32,51,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,32,51,0.08)]"
              >
                <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-6 text-base font-semibold leading-6 text-[var(--ink)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <Section className="bg-[#F4F5F7]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              FAQ
            </p>

            <Heading as="h2" className="text-[var(--ink)]">
              Frequently asked questions.
            </Heading>
          </div>

          <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-[var(--ink)]">
                  {faq.question}

                  <span className="text-xl font-normal text-[var(--brand-gold-deep)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
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
      <Section className="bg-[var(--background-soft)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
            Let&apos;s Talk
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Have a requirement related to {service.title}?
          </Heading>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
            Tell us about your requirement and explore the right approach for
            your business.
          </p>

          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="mt-8 inline-flex rounded-full bg-[var(--brand-gold-deep)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Section>
    </main>
  );
}
