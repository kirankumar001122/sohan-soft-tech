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
    span: "lg:col-span-2",
  },
  {
    title: "Experience Design",
    description:
      "Interfaces and journeys that make products easier to understand and use.",
    related: "UI/UX · Branding · Content structure",
    href: "/services/digital-marketing",
    span: "",
  },
  {
    title: "Commerce",
    description:
      "Stores, billing, POS and operational software that keep transactions organized.",
    related: "E-commerce · Billing · ERP",
    href: "/services/ecommerce",
    span: "",
  },
  {
    title: "Mobile",
    description:
      "Mobile applications and cloud-ready infrastructure for teams and customers.",
    related: "iOS · Android · Cloud setup",
    href: "/services/mobile-app-development",
    span: "",
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation across enquiries, messaging, reporting and internal workflows.",
    related: "WhatsApp · SMS · AI tools",
    href: "/services/ai-automation",
    span: "lg:col-span-2",
  },
  {
    title: "Digital Growth",
    description:
      "Search, campaigns and brand presence that help the right audience find you.",
    related: "SEO · Marketing · Google Business Profile",
    href: "/services/digital-marketing",
    span: "lg:col-span-2",
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

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group flex min-h-[250px] flex-col justify-between rounded-2xl border border-[var(--border-light)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[var(--shadow-card)] ${
              index === 0 || index === 4
                ? "bg-[var(--ink)] text-white"
                : "bg-white"
            } ${item.span}`}
          >
            <div>
              <span
                className={`text-xs font-semibold ${
                  index === 0 || index === 4
                    ? "text-[var(--brand-gold-rich)]"
                    : "text-[var(--brand-gold-deep)]"
                }`}
              >
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p
                className={`mt-3 max-w-md text-sm leading-6 ${
                  index === 0 || index === 4
                    ? "text-white/70"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {item.description}
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4">
              <p
                className={`text-xs ${
                  index === 0 || index === 4
                    ? "text-white/50"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {item.related}
              </p>
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
