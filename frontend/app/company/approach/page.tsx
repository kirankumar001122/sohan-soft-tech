import type { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Sohan Soft Tech connects business requirements with practical technology, software and automation.",
};

export default function ApproachPage() {
  return (
    <main>
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-eyebrow">Company</p>
          <Heading as="h1" className="mt-4 max-w-3xl">
            Our approach to technology work.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            {companyData.mission}
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {companyData.approach.map((item) => (
            <div
              key={item.title}
              className="rounded-[22px] border border-[var(--border-light)] bg-[var(--background)] p-7"
            >
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/company/how-we-work"
          className="mt-10 inline-flex text-sm font-semibold text-[var(--brand-gold-deep)]"
        >
          See how we work →
        </Link>
      </Section>
      <CtaBand
        title="Bring a requirement, not a shopping list."
        copy="Describe the business problem. We will help structure the technology response."
      />
    </main>
  );
}
