import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { solutionCategories } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore business, education, digital transformation, automation, communication and office technology solutions from Sohan Soft Tech.",
  keywords: [
    "business solutions",
    "education solutions",
    "digital transformation",
    "business automation",
    "communication solutions",
    "office technology",
    "Sohan Soft Tech",
  ],
  openGraph: {
    title: "Business & Digital Solutions | Sohan Soft Tech",
    description:
      "Technology solutions designed around business workflows, automation, communication and digital transformation.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 text-[#172033] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">

            {/* LEFT — CONTENT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Solutions
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl xl:text-7xl">
                Technology solutions built around your business.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
                From business systems and education platforms to automation,
                communication and office technology, Sohan Soft Tech brings
                connected technology solutions together around real business
                requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(23,32,51,0.14)] transition-colors hover:bg-[#0F172A]"
                >
                  Get a Free Consultation
                </Link>

                <Link
                  href="#solution-areas"
                  className="inline-flex items-center justify-center rounded-full border border-[#8B2346] bg-white px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* RIGHT — SOLUTIONS IMAGE */}
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
                      src="/images/solution.png"
                      alt="Technology solutions built around your business"
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
              One technology partner
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Connect technology to the way your business operates.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#64748B]">
              Different organizations have different technology requirements.
              Our solutions architecture brings together software, automation,
              digital systems, communication and office technology around the
              needs of the organization.
            </p>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
              Explore the solution areas below to understand how individual
              capabilities can work together as part of a broader technology
              approach.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Areas */}
      <section
        id="solution-areas"
        className="bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Solution areas
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Explore our technology solutions.
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Explore focused solution areas covering business operations,
              education, transformation, automation, communication and office
              technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCategories.map((category, index) => (
              <article
                key={category.slug}
                className="group flex h-full flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm font-semibold text-[#8B2346]">
                    0{index + 1}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EEF2] text-[#8B2346] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                  {category.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-[#64748B]">
                  {category.description}
                </p>

                <div className="mt-7 border-t border-[#E5E7EB] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    Key capabilities
                  </p>

                  <ul className="mt-4 space-y-2">
                    {category.capabilities.slice(0, 5).map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-3 text-sm text-[#64748B]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B2346]" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href={`/solutions/${category.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#172033] transition-colors hover:text-[#8B2346]"
                  >
                    Explore solution
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Model */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Connected approach
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Solutions that connect capabilities.
            </Heading>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Start with business requirements, workflows and technology needs.",
              },
              {
                number: "02",
                title: "Connect",
                description:
                  "Bring relevant software, digital systems and integrations together.",
              },
              {
                number: "03",
                title: "Automate",
                description:
                  "Identify repetitive processes where automation can support operations.",
              },
              {
                number: "04",
                title: "Grow",
                description:
                  "Build a technology foundation that can evolve with the organization.",
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

      {/* CTA */}
      <section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Have a technology requirement?
              </h2>

              <p className="mt-4 text-base leading-7 text-[#64748B]">
                Tell us about your business requirement and explore the
                technology approach that fits your organization.
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