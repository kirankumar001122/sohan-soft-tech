import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Sohan Soft Tech",
  description:
    "Learn about Sohan Soft Tech, our technology approach, capabilities, values, industries and focus on building practical digital and business technology solutions.",
  keywords: [
    "Sohan Soft Tech",
    "about Sohan Soft Tech",
    "technology company",
    "software company",
    "digital solutions",
    "business technology",
    "AI automation",
    "IT solutions",
  ],
  openGraph: {
    title: "About Sohan Soft Tech",
    description:
      "Discover Sohan Soft Tech's technology approach, capabilities and focus on practical business solutions.",
    type: "website",
  },
};

export default function CompanyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white py-20 text-[#172033] sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Company
            </p>

            <Heading as="h1" className="text-[#172033]">
              Technology That Works for Your Business.
            </Heading>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748B] sm:text-xl">
              {companyData.introduction}
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[#64748B]">
              {companyData.tagline}
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#172033] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0F172A]"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Who We Are
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              A technology partner built around business needs.
            </Heading>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#64748B]">
              {companyData.introduction}
            </p>

            <p className="mt-6 leading-8 text-[#64748B]">
              Our approach brings together digital solutions, business
              software, automation, communication technology and IT
              capabilities within a connected technology ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission + Vision */}
<Section className="bg-[#F8F9FB]">
  <div className="grid gap-6 lg:grid-cols-2">
    {/* Mission */}
    <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-8 sm:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
        Mission
      </p>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#172033]">
        What we aim to enable.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#64748B]">
        {companyData.mission}
      </p>
    </div>

    {/* Vision */}
    <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-8 sm:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
        Vision
      </p>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#172033]">
        Where we are heading.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#64748B]">
        {companyData.vision}
      </p>
    </div>
  </div>
</Section>

      {/* Values */}
      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Our Principles
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            How we think about technology.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            These principles provide a foundation for how technology
            solutions can be approached and developed.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {companyData.values.map((value, index) => (
            <div
              key={value.title}
              className="rounded-[20px] border border-[#E5E7EB] p-7 sm:p-8"
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#172033]">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-[#64748B]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-[#F8F9FB]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Capabilities
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Technology capabilities across the business lifecycle.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            From digital experiences to operational systems and automation,
            our capability structure is designed around connected business
            requirements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {companyData.capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#172033]">
                {capability.title}
              </h3>

              <p className="mt-4 leading-7 text-[#64748B]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

     {/* How We Work */}
<section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
        How We Work
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl">
        A structured approach from idea to implementation.
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
        Every project starts with understanding the requirement and moves
        through planning, implementation, testing and deployment.
      </p>
    </div>

    <div className="mt-12 grid gap-0 border-y border-[#E5E7EB] sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Discover",
          description:
            "Understand the business, users, requirements and technology challenges before defining the solution.",
        },
        {
          number: "02",
          title: "Plan",
          description:
            "Translate the requirements into a practical solution structure, priorities and implementation approach.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "Design and develop the required digital products, software, automation or technology systems.",
        },
        {
          number: "04",
          title: "Test & Refine",
          description:
            "Review the implementation, identify issues and refine the solution before it moves into use.",
        },
        {
          number: "05",
          title: "Deploy",
          description:
            "Prepare the solution for production and connect the required technology systems and workflows.",
        },
        {
          number: "06",
          title: "Support & Evolve",
          description:
            "Continue improving the solution as business requirements, technology and user needs evolve.",
        },
      ].map((item, index) => (
        <div
          key={item.number}
          className={`border-[#E5E7EB] p-7 sm:p-8 ${
            index < 3 ? "lg:border-b" : ""
          } ${
            index % 3 !== 2 ? "lg:border-r" : ""
          } ${
            index % 2 === 0 ? "sm:border-r lg:border-r" : ""
          }`}
        >
          <span className="text-sm font-semibold text-[#8B2346]">
            {item.number}
          </span>

          <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#172033]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#64748B]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Technology */}
<Section className="bg-white">
  <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
        Technology
      </p>

      <Heading as="h2" className="mt-4 text-[#172033]">
        A broad technology foundation.
      </Heading>

      <p className="mt-5 leading-8 text-[#64748B]">
        Technology requirements can vary from one organization to
        another. Our capability areas span software, cloud, automation,
        integrations and IT technology.
      </p>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
      {companyData.technologyAreas.map((technology) => (
        <div
          key={technology}
          className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-4 text-[#172033] transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
        >
          {technology}
        </div>
      ))}
    </div>
  </div>
</Section>

      {/* Industries */}
      <Section>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Industries
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Technology across different business environments.
          </Heading>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {companyData.industries.map((industry) => {
            const industrySlugs: Record<string, string> = {
              Education: "education",
              Healthcare: "healthcare",
              "Retail & E-Commerce": "retail-ecommerce",
              Manufacturing: "manufacturing",
              "Food & Hospitality": "food-hospitality",
              "Professional Services": "professional-services",
              "Small & Medium Businesses": "smb",
              "Corporate Offices": "corporate-offices",
            };

            return (
              <Link
                key={industry}
                href={`/industries/${industrySlugs[industry]}`}
                className="rounded-[14px] border border-[#E5E7EB] p-5 font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
              >
                {industry}
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Partnership */}
      <Section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Long-Term Partnership
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Technology that can evolve with the business.
          </Heading>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#64748B]">
            {companyData.partnership}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}