import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const solutions = [
  {
    number: "01",
    title: "Business Solutions",
    description:
      "Connected technology solutions that bring business processes, software and digital operations together.",
    href: "/solutions/business",
    tags: ["Business Systems", "Software", "Digital Operations"],
  },
  {
    number: "02",
    title: "Digital Transformation",
    description:
      "Modernize business processes and customer experiences with practical digital technology.",
    href: "/solutions/digital-transformation",
    tags: ["Digital Processes", "Modernization", "Integration"],
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Reduce repetitive work and connect workflows through intelligent automation.",
    href: "/solutions/automation",
    tags: ["Workflow", "AI", "Automation"],
  },
  {
    number: "04",
    title: "Education Solutions",
    description:
      "Technology solutions designed around the operational and learning needs of education organizations.",
    href: "/solutions/education",
    tags: ["Education ERP", "LMS", "Communication"],
  },
  {
    number: "05",
    title: "Digital Communication",
    description:
      "Help businesses communicate with customers through connected digital channels.",
    href: "/solutions/digital-communication",
    tags: ["WhatsApp", "SMS", "Customer Engagement"],
  },
  {
    number: "06",
    title: "Office Technology",
    description:
      "Technology infrastructure and systems that help teams work reliably and efficiently.",
    href: "/solutions/office-technology",
    tags: ["IT Infrastructure", "Office Setup", "Support"],
  },
];

export default function SolutionsSection() {
  return (
    <Section className="bg-white">
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Solutions
          </p>

          <Heading as="h2" className="text-[#172033]">
            Technology connected to real business needs.
          </Heading>
        </div>

        <p className="max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
          We combine technology capabilities into practical solutions
          designed around how organizations operate, communicate and grow.
        </p>
      </div>

      {/* Solutions */}
      <div className="mt-14 grid gap-0 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <Link
            key={solution.number}
            href={solution.href}
            className="group border-b border-r border-[#E5E7EB] bg-white p-7 transition-colors duration-200 hover:bg-[#F8EEF2] sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-[#8B2346]">
                {solution.number}
              </span>

              <span className="text-lg text-[#94A3B8] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8B2346]">
                ↗
              </span>
            </div>

            <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#172033]">
              {solution.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#64748B]">
              {solution.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {solution.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D9DEE5] bg-white px-3 py-1.5 text-xs text-[#64748B]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 text-sm font-semibold text-[#8B2346] transition-colors group-hover:text-[#6F1837]">
              Explore solution →
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/solutions"
          className="inline-flex rounded-full border border-[#8B2346] px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
        >
          Explore All Solutions
        </Link>
      </div>
    </Section>
  );
}