import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const industries = [
  {
    title: "Education",
    href: "/industries/education",
    image: "/images/education_ind.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    image: "/images/healthcare_ind.jpg",
    span: "",
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    image: "/images/retaail_ind.jpg",
    span: "",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    image: "/images/manufacturing_ind.jpg",
    span: "",
  },
  {
    title: "Food & Hospitality",
    href: "/industries/food-hospitality",
    image: "/images/hospitality_ind.jpg",
    span: "",
  },
  {
    title: "Professional Services",
    href: "/industries/professional-services",
    image: "/images/business_ind.jpg",
    span: "",
  },
  {
    title: "Small & Medium Businesses",
    href: "/industries/smb",
    image: "/images/SMB_ind.png",
    span: "",
  },
  {
    title: "Corporate Offices",
    href: "/industries/corporate-offices",
    image: "/images/corporate_ind.jpg",
    span: "lg:col-span-2",
  },
];

export default function IndustriesSection() {
  return (
    <Section tone="warm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-eyebrow">Industry expertise</p>
          <Heading as="h2" className="mt-4">
            Technology shaped around the way your industry works.
          </Heading>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            Practical digital systems for the teams, customers and day-to-day realities in every sector.
          </p>
        </div>
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold-deep)] transition hover:text-[var(--ink)]"
        >
          All industries <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-4">
        {industries.map((industry, index) => (
          <Link
            key={industry.href}
            href={industry.href}
            className={`group relative isolate overflow-hidden rounded-2xl border border-white/70 shadow-[0_12px_30px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${industry.span}`}
          >
            <Image
              src={industry.image}
              alt={`${industry.title} industry`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="-z-10 object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
              <span className="h-px w-9 bg-[var(--brand-gold-rich)] transition-all duration-300 group-hover:w-14" />
              <span className="text-[10px] font-semibold tracking-[0.14em] text-white/75">0{index + 1}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="max-w-[18ch] text-xl font-semibold leading-tight text-white sm:text-2xl">{industry.title}</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition group-hover:text-white">
                Explore industry <span aria-hidden="true" className="text-[var(--brand-gold-rich)]">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
