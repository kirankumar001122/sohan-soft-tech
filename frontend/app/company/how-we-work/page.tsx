import type { Metadata } from "next";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/ui/CtaBand";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The Sohan Soft Tech delivery process from understanding the requirement through launch and support.",
};

export default function HowWeWorkPage() {
  return (
    <main>
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-eyebrow">Company</p>
          <Heading as="h1" className="mt-4 max-w-3xl">
            From first conversation to ongoing support.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            A seven-stage process that can be adapted to the size and
            complexity of each engagement.
          </p>
        </div>
      </section>
      <ProcessSection />
      <CtaBand
        title="Ready to walk through a requirement?"
        copy="Share what you are trying to build, automate or improve."
      />
    </main>
  );
}
