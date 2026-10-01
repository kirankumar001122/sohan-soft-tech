import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Example technology and business guides from Sohan Soft Tech. Published only when verified content is available.",
};

export default function GuidesPage() {
  const guides = resources.filter((item) => item.type === "Guide");

  return (
    <main>
      <section className="bg-[var(--background)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-eyebrow">Resources</p>
          <Heading as="h1" className="mt-4">
            Guides
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            These cards describe intended guide topics. They are example
            layouts until a guide is marked as published.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-[22px] border border-[var(--border-light)] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                {guide.published ? "Published" : "Example layout"}
              </p>
              <h2 className="mt-3 text-xl">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {guide.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/resources"
          className="mt-10 inline-flex text-sm font-semibold text-[var(--brand-gold-deep)]"
        >
          Back to resources →
        </Link>
      </Section>
    </main>
  );
}
