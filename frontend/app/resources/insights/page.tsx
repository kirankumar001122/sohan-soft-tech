import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore technology, business, automation, software and digital transformation insights from Sohan Soft Tech.",
  keywords: [
    "Sohan Soft Tech insights",
    "technology insights",
    "business automation",
    "AI automation",
    "software development",
    "digital transformation",
  ],
  openGraph: {
    title: "Insights | Sohan Soft Tech",
    description:
      "Explore practical insights covering technology, automation, software and digital transformation.",
    type: "website",
  },
};

const topics = [
  {
    title: "Business Automation",
    description:
      "Explore practical ideas for identifying repetitive workflows and evaluating automation opportunities.",
  },
  {
    title: "AI & Automation",
    description:
      "Understand how AI and automation can be considered for business workflows, communication and operations.",
  },
  {
    title: "Digital Transformation",
    description:
      "Explore practical approaches to improving business processes through connected digital technology.",
  },
  {
    title: "Web & Digital Solutions",
    description:
      "Learn about important considerations when planning websites, digital platforms and business applications.",
  },
  {
    title: "Business Software",
    description:
      "Understand how software can organize business processes, records, workflows and operational information.",
  },
  {
    title: "SEO & Digital Presence",
    description:
      "Explore foundational considerations for building and improving a business's digital presence.",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-white text-[#172033]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Insights
            </p>

            <Heading as="h1" className="mt-5 text-[#172033]">
              Ideas, perspectives and practical technology insights.
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              Explore practical perspectives on technology, automation,
              software, digital transformation and business technology.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Knowledge
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Technology thinking for real business needs.
            </Heading>
          </div>

          <p className="leading-8 text-[#64748B]">
            Our insights section is designed to help businesses understand
            technology opportunities, evaluate practical approaches and think
            more clearly about digital solutions.
          </p>
        </div>
      </Section>

      {/* Topics */}
      <Section className="bg-[#F8F9FB]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Explore Topics
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Explore our areas of knowledge.
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:bg-[#F8EEF2] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <h3 className="text-xl font-semibold text-[#172033]">
                {topic.title}
              </h3>

              <p className="mt-4 leading-7 text-[#64748B]">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Resources CTA */}
      <Section className="bg-white">
        <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8EEF2] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Resources
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Explore the Sohan Soft Tech resource hub.
            </Heading>

            <p className="mt-5 leading-8 text-[#64748B]">
              Browse the wider collection of guides, articles, FAQs and other
              resources as they become available.
            </p>

            <Link
              href="/resources"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
            >
              Explore All Resources →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}