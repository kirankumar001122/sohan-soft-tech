import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Technology areas Sohan Soft Tech uses across web, mobile, cloud, automation and business software.",
};

export default function TechnologyPage() {
  return (
    <main>
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-eyebrow">Company</p>
          <Heading as="h1" className="mt-4 max-w-3xl">
            Technology chosen for the problem, not for fashion.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            These are the capability areas we work across. Specific stacks
            are selected per project.
          </p>
        </div>
      </section>
      <Section>
        <div className="flex flex-wrap gap-3">
          {companyData.technologyAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[var(--border-light)] bg-[var(--background)] px-4 py-2.5 text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Need help choosing an approach?"
        copy="We can discuss options against your current systems and constraints."
      />
    </main>
  );
}
