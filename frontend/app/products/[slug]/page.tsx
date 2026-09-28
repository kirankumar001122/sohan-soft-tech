import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
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

// =====================================================
// PRODUCT IMAGES
// =====================================================
// Keep these in the SAME ORDER as products in:
// frontend/data/products.ts
//
// 1  -> billing_pr.jpg
// 2  -> pos_pr.jpg
// 3  -> BMS_pr.jpg
// 4  -> WMS_pr.jpeg
// 5  -> erp_pr.jpg
// 6  -> lms_pr.jpg
// 7  -> attendence_pr.jpg
// 8  -> whatsapp_pr.jpg
// 9  -> dlt_pr.jpg
// 10 -> custom_pr.jpg
//
// All images should be inside:
// frontend/public/images/
// =====================================================

const productImageFiles = [
  "/images/business_ind.jpg",
  "/images/pos_pr.jpg",
  "/images/BMS_pr.jpg",
  "/images/WMS_pr.jpeg",
  "/images/erp_pr.jpg",
  "/images/learning.jpg",
  "/images/attendence_pr.jpg",
  "/images/whatsapp_pr.jpg",
  "/images/dlt.jpg",
  "/images/custom_pr.jpg",
];

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productIndex = products.findIndex(
    (item) => item.slug === product.slug
  );

  const productImage =
    productIndex >= 0 ? productImageFiles[productIndex] : undefined;

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-white py-24 text-[#172033] sm:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT SIDE */}
            <div className="max-w-4xl">
              <Link
                href="/products"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#8B2346]"
              >
                ← All Products
              </Link>

              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
                Product
              </p>

              <Heading as="h1" className="text-[#172033]">
                {product.title}
              </Heading>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748B] sm:text-xl">
                {product.shortDescription}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#64748B]">
                Practical technology designed around business workflows,
                operational requirements and the needs of the teams using it.
              </p>

              <div className="mt-8 grid max-w-2xl gap-4 border-y border-[#E5E7EB] py-6 sm:grid-cols-3">

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B2346]">
                    01
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#172033]">
                    Business focused
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B2346]">
                    02
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#172033]">
                    Structured workflows
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B2346]">
                    03
                  </span>

                  <p className="mt-2 text-sm font-semibold text-[#172033]">
                    Scalable technology
                  </p>
                </div>

              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            {productImage && (
              <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
                <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2 shadow-[0_20px_50px_rgba(23,32,51,0.08)]">

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#F8F9FB]">

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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              The Business Need
            </p>

            <Heading as="h2" className="mt-4">
              The problem
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              {product.problem}
            </p>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8F9FB] p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              The Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033]">
              The solution
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              {product.solution}
            </p>
          </div>

        </div>
      </Section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <Section className="bg-[#F8F9FB]">
        <div className="mb-12 max-w-2xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Capabilities
          </p>

          <Heading as="h2" className="mt-4">
            Product features
          </Heading>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Core capabilities can be structured around the operational
            requirements of the product.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {product.features.map((feature, index) => (
            <div
              key={feature}
              className="rounded-[14px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
            >
              <span className="text-sm font-medium text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-[#172033]">
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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Workflow
            </p>

            <Heading as="h2" className="mt-4">
              How the product works
            </Heading>

            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              A structured workflow helps organizations move from setup to
              everyday operation in a clear sequence.
            </p>
          </div>

          <div className="space-y-4">

            {product.workflow.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[14px] border border-[#E5E7EB] bg-white p-5 transition-all duration-300 hover:border-[#8B2346]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8EEF2] text-sm font-semibold text-[#8B2346]">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-semibold text-[#172033]">
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
      <Section className="bg-white">

        <div className="mb-12 max-w-2xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Business Value
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Designed around practical outcomes.
          </Heading>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {product.benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-[14px] border border-[#E5E7EB] bg-[#F8F9FB] p-6 transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
            >
              <span className="text-sm font-semibold text-[#8B2346]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-5 font-medium leading-7 text-[#172033]">
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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
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
                className="rounded-[14px] border border-[#E5E7EB] bg-white p-5 font-medium text-[#172033] transition-all duration-300 hover:border-[#8B2346] hover:bg-[#F8EEF2]"
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
      <Section className="bg-[#F8F9FB]">

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-8 sm:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Integrations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033]">
              Connect with your technology ecosystem.
            </h2>

            <div className="mt-8 space-y-3">

              {product.integrations.map((integration) => (
                <div
                  key={integration}
                  className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-[#64748B]"
                >
                  {integration}
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-8 sm:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Security
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033]">
              Built with controlled access and structured data management.
            </h2>

            <div className="mt-8 space-y-3">

              {product.security.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#E5E7EB] bg-[#F8F9FB] px-5 py-4 text-[#64748B]"
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

        <div className="rounded-[20px] bg-[#F8EEF2] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Explore Further
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Want to discuss this product?
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
            Talk to the Sohan Soft Tech team about your requirements,
            workflow and possible implementation approach.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
            >
              Request a Demo
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
            >
              View All Products
            </Link>

          </div>
        </div>
      </Section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <Section className="bg-[#F8F9FB]">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
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
                className="group rounded-[14px] border border-[#E5E7EB] bg-white"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-[#172033]">

                  <div className="flex items-center justify-between gap-5">

                    <span>{faq.question}</span>

                    <span className="text-xl text-[#8B2346] transition-transform group-open:rotate-45">
                      +
                    </span>

                  </div>

                </summary>

                <div className="border-t border-[#E5E7EB] px-6 py-5 leading-7 text-[#64748B]">
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