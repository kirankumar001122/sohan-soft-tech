import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const solutions = [
  {
    title: "Business Solutions",
    problem: "Operations, records and daily work live in too many places.",
    href: "/solutions/business",
  },
  {
    title: "Education Solutions",
    problem: "Institutions need connected academic and parent communication systems.",
    href: "/solutions/education",
  },
  {
    title: "Digital Transformation",
    problem: "Paper, spreadsheets and disconnected tools slow the organization down.",
    href: "/solutions/digital-transformation",
  },
  {
    title: "Automation Solutions",
    problem: "Teams repeat the same follow-ups, data entry and notifications.",
    href: "/solutions/automation",
  },
  {
    title: "Communication Solutions",
    problem: "Customers expect timely replies across WhatsApp, SMS and email.",
    href: "/solutions/communication",
  },
  {
    title: "Office Technology Solutions",
    problem: "Workplaces need reliable networks, devices and attendance systems.",
    href: "/solutions/office-technology",
  },
];

export default function SolutionsSection() {
  return (
    <Section className="bg-[var(--background)]">
      <div className="max-w-3xl">
        <p className="text-eyebrow">Solutions by business need</p>
        <Heading as="h2" className="mt-4">
          Start with the problem. Choose the solution path.
        </Heading>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-[var(--border-light)] md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-white p-7 transition hover:bg-[var(--background)]"
          >
            <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {item.problem}
            </p>
            <p className="mt-6 text-sm font-semibold text-[var(--brand-gold-deep)]">
              Explore solution →
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
