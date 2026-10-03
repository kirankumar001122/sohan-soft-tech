import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const capabilities = [
  {
    title: "Digital Engineering",
    description:
      "Websites, web applications and platforms built around real operating requirements.",
    related: "Web development · Applications · Integrations",
    href: "/services/web-development",
  },
  {
    title: "Experience Design",
    description:
      "Interfaces and journeys that make products easier to understand and use.",
    related: "UI/UX · Branding · Content structure",
    href: "/services/digital-marketing",
  },
  {
    title: "Commerce",
    description:
      "Stores, billing, POS and operational software that keep transactions organized.",
    related: "E-commerce · Billing · ERP",
    href: "/services/ecommerce",
  },
  {
    title: "Mobile",
    description:
      "Mobile applications and cloud-ready infrastructure for teams and customers.",
    related: "iOS · Android · Cloud setup",
    href: "/services/mobile-app-development",
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation across enquiries, messaging, reporting and internal workflows.",
    related: "WhatsApp · SMS · AI tools",
    href: "/services/ai-automation",
  },
  {
    title: "Digital Growth",
    description:
      "Search, campaigns and brand presence that help the right audience find you.",
    related: "SEO · Marketing · Google Business Profile",
    href: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  return (
    <Section tone="warm">
      <div className="max-w-3xl">
        <p className="text-eyebrow">Core capabilities</p>
        <Heading as="h2" className="mt-4">
          Distinct strengths, one delivery team.
        </Heading>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
          Six capability areas that cover how products are designed, built,
          automated and grown.
        </p>
      </div>

      <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[var(--brand-gold-deep)]">
                0{index + 1}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--background-soft)] text-[var(--brand-gold-deep)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              {item.description}
            </p>

            <div className="mt-auto pt-5">
              <p className="min-h-10 text-xs leading-5 text-[var(--text-muted)]">
                {item.related}
              </p>
              <span className="mt-3 inline-flex w-full items-center gap-2 border-t border-[var(--border-light)] pt-4 text-sm font-semibold text-[var(--brand-gold-deep)] transition-colors group-hover:text-[var(--brand-gold-hover)]">
                Explore capability
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M3.5 10h12m-5-5 5 5-5 5" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
