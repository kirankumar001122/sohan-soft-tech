import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <main>
      <section className="bg-[var(--background-dark)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-7xl font-semibold tracking-tight text-[var(--brand-green)] sm:text-8xl">
              404
            </p>

            <div className="mt-8">
              <Heading as="h1" className="text-white">
                This page could not be found.
              </Heading>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              The page you are looking for may have moved, been removed, or
              the address may be incorrect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-green-dark)]"
              >
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/services"
            className="rounded-[var(--radius-md)] border border-[var(--border-light)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
          >
            <p className="text-sm font-semibold text-[var(--brand-green)]">
              Services
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Explore our services
            </h2>
          </Link>

          <Link
            href="/solutions"
            className="rounded-[var(--radius-md)] border border-[var(--border-light)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
          >
            <p className="text-sm font-semibold text-[var(--brand-green)]">
              Solutions
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Explore our solutions
            </h2>
          </Link>

          <Link
            href="/products"
            className="rounded-[var(--radius-md)] border border-[var(--border-light)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
          >
            <p className="text-sm font-semibold text-[var(--brand-green)]">
              Products
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Explore our products
            </h2>
          </Link>

          <Link
            href="/industries"
            className="rounded-[var(--radius-md)] border border-[var(--border-light)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)]"
          >
            <p className="text-sm font-semibold text-[var(--brand-green)]">
              Industries
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Explore industries
            </h2>
          </Link>
        </div>
      </Section>
    </main>
  );
}