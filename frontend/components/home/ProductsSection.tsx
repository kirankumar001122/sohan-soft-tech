import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const products = [
  {
    number: "01",
    title: "Billing Software",
    description:
      "Business billing software designed to support everyday transaction management.",
    href: "/products/billing-software",
    category: "Business Software",
  },
  {
    number: "02",
    title: "POS Software",
    description:
      "Point-of-sale software for businesses managing sales and customer transactions.",
    href: "/products/pos-software",
    category: "Business Software",
  },
  {
    number: "03",
    title: "Education ERP",
    description:
      "A centralized software platform for managing education-related operations.",
    href: "/products/education-erp",
    category: "Education",
  },
  {
    number: "04",
    title: "Learning Management System",
    description:
      "A digital learning platform for organizations delivering and managing learning.",
    href: "/products/lms",
    category: "Education",
  },
  {
    number: "05",
    title: "WhatsApp Automation Platform",
    description:
      "A platform for business communication and automated WhatsApp workflows.",
    href: "/products/whatsapp-automation-platform",
    category: "Automation",
  },
  {
    number: "06",
    title: "Warranty Management System",
    description:
      "A software system for managing warranty-related records and workflows.",
    href: "/products/warranty-management-system",
    category: "Business Software",
  },
];

export default function ProductsSection() {
  return (
    <Section className="bg-white">
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Products & Software
          </p>

          <Heading as="h2">
            Software built for real business operations.
          </Heading>
        </div>

        <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          Explore software products designed around common business,
          education and automation requirements. Products can also be
          extended or customized around specific organizational needs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.number}
            href={product.href}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--background-soft)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[var(--shadow-soft)] sm:p-8"
          >
            {/* Decorative element */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-green-light)] transition-transform duration-300 group-hover:scale-125" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-[var(--brand-green)]">
                  {product.number}
                </span>

                <span className="rounded-full border border-[var(--border-light)] bg-white px-3 py-1 text-xs text-[var(--text-muted)]">
                  {product.category}
                </span>
              </div>

              <h3 className="mt-12 max-w-xs text-xl font-semibold tracking-tight">
                {product.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                {product.description}
              </p>

              <div className="mt-7 flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--brand-green)]">
                  View product
                </span>

                <span className="text-lg text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* All Products */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/products"
          className="rounded-full border border-[var(--border-light)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
        >
          Explore All Products
        </Link>
      </div>
    </Section>
  );
}