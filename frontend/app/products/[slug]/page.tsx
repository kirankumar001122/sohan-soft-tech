import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { productImages } from "@/data/catalogAssets";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description:
        "The requested Sohan Soft Tech product could not be found.",
    };
  }

  return {
    title: product.title,
    description: product.shortDescription,
    keywords: [
      product.title,
      "business software",
      "technology products",
      "business solutions",
      "software solutions",
      "Sohan Soft Tech",
    ],
    openGraph: {
      title: `${product.title} | Sohan Soft Tech`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return [
    ...products.map((product) => ({
      slug: product.slug,
    })),
    {
      slug: "lms",
    },
  ];
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productImage = productImages[product.slug];

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-[var(--background)] py-5 text-[var(--ink)] sm:py-6 lg:py-7">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT SIDE */}
            <div className="max-w-4xl">
              <Link
                href="/products"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-gold-deep)]"
              >
                ← All Products
              </Link>

              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
                Product
              </p>

              <Heading as="h1" className="text-[var(--ink)]">
                {product.title}
              </Heading>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                {product.shortDescription}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
                Practical technology designed around business workflows,
                operational requirements and the needs of the teams using it.
              </p>

              <div className="mt-8 grid max-w-2xl gap-4 border-y border-[var(--border-light)] py-6 sm:grid-cols-3">

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                    01
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    Business focused
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                    02
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    Structured workflows
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                    03
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    Scalable technology
                  </p>
                </div>

              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            {productImage && (
              <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
                <div className="overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white p-2 shadow-[0_20px_50px_rgba(17,17,17,0.08)]">

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[var(--background-soft)]">

                    <Image
                      src={productImage}
                      alt={`${product.title} product image`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                    />

                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM + SOLUTION
      ===================================================== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              The Business Need
            </p>

            <Heading as="h2" className="mt-4">
              The problem
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              {product.problem}
            </p>
          </div>

          <div className="rounded-[20px] border border-[var(--border-light)] bg-[var(--background-soft)] p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              The Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)]">
              The solution
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              {product.solution}
            </p>
          </div>

        </div>
      </Section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <Section className="bg-[var(--background-soft)]">
        <div className="mb-12 max-w-2xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Capabilities
          </p>

          <Heading as="h2" className="mt-4">
            Product features
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Core capabilities can be structured around the operational
            requirements of the product.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {product.features.map((feature, index) => (
            <div
              key={feature}
              className="rounded-[14px] border border-[var(--border-light)] bg-white p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
            >
              <span className="text-sm font-medium text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">
                {feature}
              </h3>
            </div>
          ))}

        </div>
      </Section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Workflow
            </p>

            <Heading as="h2" className="mt-4">
              How the product works
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              A structured workflow helps organizations move from setup to
              everyday operation in a clear sequence.
            </p>
          </div>

          <div className="space-y-4">

            {product.workflow.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[14px] border border-[var(--border-light)] bg-white p-5 transition-all duration-300 hover:border-[var(--brand-gold)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--background-soft)] text-sm font-semibold text-[var(--brand-gold-deep)]">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-semibold text-[var(--ink)]">
                    {step}
                  </h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </Section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <Section className="bg-[var(--background)]">

        <div className="mb-12 max-w-2xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Business Value
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Designed around practical outcomes.
          </Heading>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {product.benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-[14px] border border-[var(--border-light)] bg-[var(--background-soft)] p-6 transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
            >
              <span className="text-sm font-semibold text-[var(--brand-gold-deep)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-5 font-medium leading-7 text-[var(--ink)]">
                {benefit}
              </p>
            </div>
          ))}

        </div>
      </Section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <Section>

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Industries
            </p>

            <Heading as="h2" className="mt-4">
              Where it can fit
            </Heading>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {product.industries.map((industry) => (
              <div
                key={industry}
                className="rounded-[14px] border border-[var(--border-light)] bg-white p-5 font-medium text-[var(--ink)] transition-all duration-300 hover:border-[var(--brand-gold)] hover:bg-[var(--background-soft)]"
              >
                {industry}
              </div>
            ))}

          </div>
        </div>
      </Section>

      {/* =====================================================
          INTEGRATIONS + SECURITY
      ===================================================== */}
      <Section className="bg-[var(--background-soft)]">

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-[20px] border border-[var(--border-light)] bg-white p-8 sm:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Integrations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Connect with your technology ecosystem.
            </h2>

            <div className="mt-8 space-y-3">

              {product.integrations.map((integration) => (
                <div
                  key={integration}
                  className="rounded-xl border border-[var(--border-light)] px-5 py-4 text-[var(--text-secondary)]"
                >
                  {integration}
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-[20px] border border-[var(--border-light)] bg-white p-8 sm:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              Security
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Built with controlled access and structured data management.
            </h2>

            <div className="mt-8 space-y-3">

              {product.security.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border-light)] bg-[var(--background-soft)] px-5 py-4 text-[var(--text-secondary)]"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

        </div>
      </Section>

      {/* =====================================================
          PRODUCT CTA
      ===================================================== */}
      <Section>

        <div className="rounded-[20px] bg-[var(--background-soft)] px-6 py-8 text-center sm:px-10 sm:py-10 lg:px-16 lg:py-12">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
            Explore Further
          </p>

          <Heading as="h2" className="mt-4 text-[var(--ink)]">
            Want to discuss this product?
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Talk to the Sohan Soft Tech team about your requirements,
            workflow and possible implementation approach.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
            >
              Request a Demo
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-light)] bg-white px-7 py-3.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
            >
              View All Products
            </Link>

          </div>
        </div>
      </Section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <Section className="bg-[var(--background-soft)]">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-gold-deep)]">
              FAQ
            </p>

            <Heading as="h2" className="mt-4">
              Frequently asked questions
            </Heading>

          </div>

          <div className="space-y-4">

            {product.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[14px] border border-[var(--border-light)] bg-white"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-[var(--ink)]">

                  <div className="flex items-center justify-between gap-5">

                    <span>{faq.question}</span>

                    <span className="text-xl text-[var(--brand-gold-deep)] transition-transform group-open:rotate-45">
                      +
                    </span>

                  </div>

                </summary>

                <div className="border-t border-[var(--border-light)] px-6 py-5 leading-7 text-[var(--text-secondary)]">
                  {faq.answer}
                </div>

              </details>
            ))}

          </div>

        </div>
      </Section>
    </main>
  );
}
