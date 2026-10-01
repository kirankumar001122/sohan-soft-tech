import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { resources } from "@/data/resources";

const areas = [
  {
    title: "Business automation guides",
    href: "/resources/guides",
    copy: "Example layouts for identifying repetitive work and automation opportunities.",
  },
  {
    title: "AI and technology insights",
    href: "/resources/insights",
    copy: "Topic pages for evaluating AI-assisted workflows and tools.",
  },
  {
    title: "Website and digital growth guides",
    href: "/resources/guides",
    copy: "Planning notes for websites, SEO and digital presence.",
  },
  {
    title: "Business software resources",
    href: "/resources/technology",
    copy: "Reference starting points for billing, POS, ERP and custom systems.",
  },
  {
    title: "Digital transformation",
    href: "/solutions/digital-transformation",
    copy: "A structured view of systems, process and communication change.",
  },
  {
    title: "FAQs",
    href: "/resources/faqs",
    copy: "Answers about services, delivery and how to start a project.",
  },
  {
    title: "Case studies",
    href: "/case-studies",
    copy: "Reusable project-story layouts. Client names appear only when verified.",
  },
];

export default function ResourcesSection() {
  const unpublished = resources.filter((item) => !item.published).length;

  return (
    <Section className="bg-[var(--background)]">
      <div className="max-w-3xl">
        <p className="text-eyebrow">Resources and insights</p>
        <Heading as="h2" className="mt-4">
          Useful material for technology decisions.
        </Heading>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Some titles below are example resource layouts
          {unpublished ? ` (${unpublished} unpublished)` : ""}. They are not
          presented as published research.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Link
            key={area.title}
            href={area.href}
            className="rounded-[22px] border border-[var(--border-light)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand-gold)]"
          >
            <h3 className="text-lg">{area.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {area.copy}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
