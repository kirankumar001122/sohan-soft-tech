import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Technology Resources",
  description:
    "Reference starting points for evaluating software, automation and digital platforms with Sohan Soft Tech.",
};

export default function TechnologyResourcesPage() {
  return (
    <main>
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-eyebrow">Resources</p>
          <Heading as="h1" className="mt-4">
            Technology resources
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            A concise index of technology areas we commonly discuss with
            businesses. This is reference material, not a product catalog of
            certified platforms.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companyData.technologyAreas.map((area) => (
            <div
              key={area}
              className="rounded-[22px] border border-[var(--border-light)] bg-[var(--background)] p-6"
            >
              <h2 className="text-lg">{area}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Discussed in the context of your existing systems and required
                outcomes.
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/company/technology"
          className="mt-10 inline-flex text-sm font-semibold text-[var(--brand-gold-deep)]"
        >
          Company technology overview →
        </Link>
      </Section>
    </main>
  );
}
