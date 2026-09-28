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
    <main>
{/* =====================================================
    HERO
====================================================== */}
<Section className="bg-white text-[#172033]">
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

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
        {service.shortDescription}
      </p>

      <div className="mt-5 max-w-2xl">
        <p className="text-sm leading-7 text-[#64748B] sm:text-base">
          {heroDetails[slug]?.supportingText ??
            `Practical ${service.title.toLowerCase()} solutions designed around business requirements, users and long-term digital needs.`}
        </p>
      </div>

      <div className="mt-7 grid max-w-2xl grid-cols-1 gap-4 border-y border-[#E5E7EB] py-5 sm:grid-cols-3">
        {(heroDetails[slug]?.highlights ?? [
          "Business Requirements",
          "Digital Experience",
          "Technical Support",
        ]).map((item, index) => (
          <div key={item}>
            <span className="text-xs font-medium text-[#8B2346]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium leading-5 text-[#172033]">
              {item}
            </p>
          </div>
        ))}
      </div>

      <Link
        href={`/contact?service=${encodeURIComponent(service.title)}`}
        className="mt-8 inline-flex rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
      >
        Get a Free Consultation
      </Link>
    </div>

    {/* RIGHT IMAGE */}
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

    {slug === "mobile-app-development" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/app.jpg"
              alt="Mobile App Development"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "ai-automation" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/ai.jpg"
              alt="AI and Automation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "whatsapp-automation" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/whatsapp.jpg"
              alt="WhatsApp Automation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "digital-marketing" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/digital.jpg"
              alt="Digital Marketing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "office-it-setup" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/office.jpg"
              alt="Office and IT Setup"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "business-software" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/business.jpg"
              alt="Business Software"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    )}


    {slug === "technical-services" && (
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F8F9FB] p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/technical.jpg"
              alt="Technical Services"
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
          ADDITIONAL SERVICE INFORMATION
      ====================================================== */}
      <section className="bg-[#F8F9FB]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Web Solutions
            </p>

            <Heading as="h2" className="text-[#172033]">
              Web experiences designed for the way your business works.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[#64748B] sm:text-lg">
              A business website is often the first digital interaction a
              customer has with an organization. It needs to communicate the
              right information clearly while providing a reliable foundation
              for future digital requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-[#64748B]">
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
                className="rounded-2xl border border-[#E5E7EB] bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-[#172033]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
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
          SOLUTIONS WE BUILD
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
                Solutions We Build
              </p>

              <Heading as="h2" className="text-[#172033]">
                Different web solutions for different business requirements.
              </Heading>
            </div>

            <div>
              <p className="text-base leading-8 text-[#64748B]">
                Not every organization needs the same type of website. Some
                businesses require a strong corporate presence, while others
                need customer portals, internal applications or platforms
                connected to existing systems.
              </p>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                We can structure the development approach around the
                organization&apos;s users, processes, content, integrations
                and technology environment.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#E5E7EB] md:grid-cols-2">
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
                <h3 className="text-lg font-semibold text-[#172033]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
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
          BUSINESS CHALLENGES
      ====================================================== */}
      <section className="bg-[#F8F9FB]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Business Challenges
            </p>

            <Heading as="h2" className="text-[#172033]">
              Addressing the challenges behind your digital requirements.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[#64748B]">
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
                className="rounded-2xl border border-[#E5E7EB] bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-[#172033]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
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
              requirements, integrations and operating environment of each
              project.
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
          WHAT YOU CAN EXPECT
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
                What You Can Expect
              </p>

              <Heading as="h2" className="text-[#172033]">
                A structured web development experience.
              </Heading>
            </div>

            <div>
              <p className="text-base leading-8 text-[#64748B]">
                Our development process is structured around understanding the
                requirement first and then translating it into a practical
                digital solution.
              </p>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
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
                className="border-l-2 border-[#8B2346] pl-6"
              >
                <h3 className="text-lg font-semibold text-[#172033]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
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
          BUSINESS VALUE
      ====================================================== */}
      <section className="bg-[#F8F9FB]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Business Value
            </p>

            <Heading as="h2" className="text-[#172033]">
              More than a website. A foundation for digital operations.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[#64748B]">
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
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6"
              >
                <span className="text-sm font-medium text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-6 text-base font-semibold leading-6 text-[#172033]">
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
            Let&apos;s Talk
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Have a requirement related to {service.title}?
          </Heading>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B]">
            Tell us about your requirement and explore the right approach for
            your business.
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