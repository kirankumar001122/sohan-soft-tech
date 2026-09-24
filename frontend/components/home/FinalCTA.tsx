import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function FinalCTA() {
  return (
    <Section className="bg-[var(--background-dark)] text-white">
      <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-dark)] bg-[var(--background-dark-soft)] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Decorative elements */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-green)] opacity-10 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[var(--brand-green)] opacity-5 blur-3xl" />

        <div className="relative max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Let's Build Something Useful
          </p>

          <Heading as="h2">
            Have a technology challenge or a business idea?
          </Heading>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Tell us what you're trying to build, improve or automate. We'll
            start by understanding your requirement and exploring the right
            technology approach.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button>Get a Free Consultation</Button>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-dark)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}