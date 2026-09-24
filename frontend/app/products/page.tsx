import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: " Products",
  description:
    "Explore business software and technology products from Sohan Soft Tech, including billing, POS, attendance, education ERP, LMS, communication and warranty management systems.",
  keywords: [
    "business software",
    "billing software",
    "POS software",
    "attendance system",
    "education ERP",
    "LMS",
    "SMS DLT platform",
    "WhatsApp automation platform",
    "business management software",
    "warranty management system",
    "custom business software",
    "Sohan Soft Tech",
  ],
  openGraph: {
    title: "Business Software & Technology Products | Sohan Soft Tech",
    description:
      "Explore software products designed for business operations, education, communication, automation and workflow management.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 text-[#172033] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">

            {/* LEFT — CONTENT */}
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Products
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl xl:text-7xl">
                Technology Products Built Around Business Needs.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
                Explore software products designed to organize business
                operations, automate workflows and support digital growth.
              </p>
            </div>

            {/* RIGHT — PRODUCT IMAGE */}
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
                      src="/images/product.jpg"
                      alt="Technology products built around business needs"
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
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Our Product Ecosystem
            </p>

            <Heading as="h2" className="mt-4 max-w-xl text-[#172033]">
              Practical software for connected operations.
            </Heading>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#64748B]">
              Sohan Soft Tech products are structured around common business,
              education, communication and operational requirements. Each
              product can also be considered as part of a wider technology
              ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Product Grid */}
      <Section className="bg-[#F8F9FB]">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Explore Products
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Software for different business workflows.
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Explore the product areas and discover how each system can fit
            into a broader digital workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex h-full flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-[#64748B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EEF2] text-[#8B2346] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-[#172033]">
                {product.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#64748B]">
                {product.shortDescription}
              </p>

              <div className="mt-8 border-t border-[#E5E7EB] pt-5">
                <span className="text-sm font-medium text-[#8B2346] transition-colors group-hover:text-[#6F1837]">
                  Explore product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Connected Technology */}
      <Section>
        <div className="rounded-[20px] bg-[var(--background-dark)] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Beyond Individual Products
              </p>

              <Heading as="h2" className="mt-4 text-white">
                Connect products, services and automation into one ecosystem.
              </Heading>
            </div>

            <div>
              <p className="leading-8 text-white/70">
                Business software becomes more valuable when systems,
                communication, automation and digital services work together.
                Our product architecture is designed to support that broader
                approach.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#F8EEF2]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Need Something Different?
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Build a solution around your workflow.
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
            If an existing product does not match your requirements, explore
            custom software development and technology solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/services/business-software"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
            >
              Explore Business Software
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}