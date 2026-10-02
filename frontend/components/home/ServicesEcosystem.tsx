"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { serviceCategories } from "@/data/services";

const groups = [
  {
    title: "Web Solutions",
    href: "/services/web-development",
    categorySlug: "web-development",
  },
  {
    title: "E-commerce Services",
    href: "/services/ecommerce",
    categorySlug: "ecommerce",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    categorySlug: "mobile-app-development",
  },
  {
    title: "Digital Services",
    href: "/services/digital-marketing",
    categorySlug: "digital-marketing",
  },
  {
    title: "Business IT Solutions",
    href: "/services/business-software",
    categorySlug: "business-it",
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    categorySlug: "ai-automation",
  },
  {
    title: "Business Systems & Software",
    href: "/services/business-software",
    categorySlug: "business-software",
  },
  {
    title: "Office & IT Infrastructure",
    href: "/services/office-it-setup",
    categorySlug: "office-it-setup",
  },
  {
    title: "Creative & Technical Services",
    href: "/services/technical-services",
    categorySlug: "technical-engineering",
  },
];

export default function ServicesEcosystem() {
  const [active, setActive] = useState(groups[0].categorySlug);

  const selectedGroup = groups.find((group) => group.categorySlug === active) ?? groups[0];
  const category = useMemo(
    () =>
      serviceCategories.find((item) => item.slug === selectedGroup.categorySlug) ??
      serviceCategories[0],
    [selectedGroup.categorySlug]
  );

  return (
    <Section id="services-ecosystem" tone="paleGold">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-eyebrow">Services ecosystem</p>
          <Heading as="h2" className="mt-4">
            The full catalogue, organized so you can explore it.
          </Heading>
        </div>
        <Link
          href="/services"
          className="text-sm font-semibold text-[var(--brand-gold-deep)] hover:underline"
        >
          View all services →
        </Link>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {groups.map((item) => {
          const isActive = item.categorySlug === active;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item.categorySlug)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border border-[var(--brand-gold)] bg-[var(--brand-gold-soft)] text-[var(--ink)]"
                  : "border border-[var(--border-light)] bg-white text-[var(--text-secondary)] hover:border-[var(--brand-gold)]"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-[28px] border border-[var(--border-light)] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl tracking-normal">{category.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
              {category.description}
            </p>
          </div>
          <Link
            href={selectedGroup.href}
            className="text-sm font-semibold text-[var(--brand-gold-deep)]"
          >
            Open category →
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.slice(0, 9).map((service) => (
            <Link
              key={service.slug}
              href={selectedGroup.href}
              className="rounded-2xl border border-[var(--border-light)] p-4 transition hover:border-[var(--brand-gold)]"
            >
              <p className="font-semibold text-[var(--ink)]">{service.title}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
