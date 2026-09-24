import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
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
      <section className="relative overflow-hidden bg-white py-16 text-[#172033] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* LEFT — CONTENT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Industries
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl xl:text-7xl">
                Technology built around the way your industry works.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
                Sohan Soft Tech brings software, automation, digital systems
                and technology services together around the requirements of
                different industries.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(23,32,51,0.14)] transition-colors hover:bg-[#0F172A]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#industry-areas"
                  className="inline-flex items-center justify-center rounded-full border border-[#8B2346] bg-white px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
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
                  className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-[#8B2346]/10 blur-[80px]"
                  aria-hidden="true"
                />

                {/* Editorial Frame */}
                <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2.5 shadow-[0_30px_70px_rgba(23,32,51,0.10)] sm:rounded-[32px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F7F8FA] sm:rounded-[26px]">
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
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Industry-focused technology
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Technology should fit the business, not the other way around.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#64748B]">
              Every industry has different workflows, communication
              requirements, operational challenges and technology needs.
            </p>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
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
        className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Industry areas
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Explore our industry solutions.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Explore technology capabilities aligned with different business
              environments and operational requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold text-[#8B2346]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EEF2] text-[#8B2346] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                  {industry.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                  {industry.shortDescription}
                </p>

                <div className="mt-auto pt-8">
                  <span className="text-sm font-semibold text-[#172033] transition-colors group-hover:text-[#8B2346]">
                    Explore industry
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
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
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Our approach
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
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
                className="rounded-[14px] border border-[#E5E7EB] p-6"
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
      </Section>

      {/* Cross-Industry Capabilities */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Cross-industry capabilities
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Technology capabilities that can work across industries.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
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
                className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-colors hover:border-[#8B2346] hover:bg-[#F8EEF2]"
              >
                <span className="text-sm font-semibold text-[#8B2346]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[#172033]">
                  {item}
                </h3>
              </div>
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
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Looking for technology for your industry?
              </h2>

              <p className="mt-4 text-base leading-7 text-[#64748B]">
                Tell us about your organization, workflow or technology
                requirement and explore the right approach.
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