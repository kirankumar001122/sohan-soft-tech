import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { getPublishedResources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore practical resources, guides and insights covering business automation, web development, AI, SEO, business software and digital transformation.",
  keywords: [
    "technology resources",
    "business automation guide",
    "web development guide",
    "AI automation",
    "SEO guide",
    "business software",
    "digital transformation",
    "Sohan Soft Tech",
  ],
  openGraph: {
    title: "Resources & Insights | Sohan Soft Tech",
    description:
      "Practical guides and insights covering technology, automation, software and digital transformation.",
    type: "website",
  },
};

export default function ResourcesPage() {
  const publishedResources = getPublishedResources();

  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background)] py-5 text-[var(--ink)] sm:py-6 lg:py-7">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Resources
            </p>

            <Heading as="h1" className="text-[var(--ink)]">
              Insights for Building, Automating and Growing with Technology.
            </Heading>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
              Explore technology resources, practical guides and insights
              designed to help businesses understand digital and technology
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Knowledge Hub
            </p>

            <Heading as="h2" className="mt-4 text-[var(--ink)]">
              Practical technology knowledge.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[var(--text-secondary)]">
              The Resources section is designed to become a knowledge hub for
              technology, automation, software, digital transformation and
              business technology topics.
            </p>

            <p className="mt-5 leading-8 text-[var(--text-secondary)]">
              New articles, guides, case studies and FAQs can be added as
              verified content becomes available.
            </p>
          </div>
        </div>
      </Section>

      {/* Categories */}
      <Section className="bg-[var(--background-soft)]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Explore Topics
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Resources across technology and business.
          </Heading>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Technology",
            "Business Automation",
            "Web Development",
            "SEO",
            "AI & Automation",
            "Business Software",
            "Digital Transformation",
            "Case Studies",
            "FAQs",
          ].map((category, index) => (
            <div
              key={category}
              className="rounded-[20px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
            >
              <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-[var(--ink)]">
                {category}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Future resources and insights in this topic area.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Published Resources */}
      <Section>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Latest Resources
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Explore our latest insights.
          </Heading>
        </div>

        {publishedResources.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publishedResources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-[var(--border-light)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[var(--background-soft)] px-3 py-1 text-xs font-medium text-[var(--brand-gold-deep)]">
                    {resource.type}
                  </span>

                  <span className="text-sm text-[var(--text-secondary)]">
                    {resource.category}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--ink)]">
                  {resource.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[var(--text-secondary)]">
                  {resource.description}
                </p>

                <div className="mt-7 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors group-hover:text-[var(--brand-gold-hover)]">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-[var(--border-light)] bg-[var(--background-soft)] px-7 py-8 text-center sm:px-10 sm:py-9">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--background-soft)] text-xl text-[var(--brand-gold-deep)]">
              +
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-[var(--ink)]">
              Resources are coming soon.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
              New technology articles, business guides, case studies and
              insights will appear here as verified content is published.
            </p>
          </div>
        )}
      </Section>

      {/* Content Areas */}
<Section className="bg-[var(--background)]">
  <div className="mb-12 max-w-3xl">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
      What You Can Explore
    </p>

    <Heading as="h2" className="mt-4 text-[var(--ink)]">
      Content designed around real technology questions.
    </Heading>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Technology Articles",
        description:
          "Perspectives on software, technology and digital solutions.",
      },
      {
        title: "Business Automation Guides",
        description:
          "Practical ways to identify and approach automation opportunities.",
      },
      {
        title: "Website Guides",
        description:
          "Guidance around planning and improving business websites.",
      },
      {
        title: "SEO Resources",
        description:
          "Foundational information about search visibility and digital presence.",
      },
      {
        title: "AI Automation Resources",
        description:
          "Explore practical AI and automation concepts for business workflows.",
      },
      {
        title: "Business Software Guides",
        description:
          "Understand software systems and their role in business operations.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-[20px] border border-[var(--border-light)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
      >
        <h3 className="text-xl font-semibold text-[var(--ink)]">
          {item.title}
        </h3>

        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</Section>

      {/* CTA */}
      <Section className="bg-[var(--background-soft)]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Have a Technology Requirement?
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Turn an idea into a practical technology solution.
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            If you have a business, software, automation or digital
            requirement, talk to the Sohan Soft Tech team.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-light)] bg-white px-7 py-3.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
