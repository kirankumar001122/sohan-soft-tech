import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const technologyAreas = [
  {
    number: "01",
    title: "Web & Application Technology",
    description:
      "Modern technologies for websites, web applications and digital platforms.",
    technologies: ["Web", "Applications", "APIs"],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "Cloud services and infrastructure that support scalable digital systems.",
    technologies: ["Cloud", "Infrastructure", "Deployment"],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Artificial intelligence, automation and connected workflows for business processes.",
    technologies: ["AI", "Automation", "Integrations"],
  },
  {
    number: "04",
    title: "Business Systems",
    description:
      "Software and database technologies that support business applications and operations.",
    technologies: ["Software", "Databases", "Business Systems"],
  },
];

export default function TechnologySection() {
  return (
    <Section className="bg-[var(--background-soft)]">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Technology
          </p>

          <Heading as="h2">
            Technology chosen around the solution.
          </Heading>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Technology should serve the business requirement. Our solutions
            can bring together application development, cloud infrastructure,
            automation and business systems based on the needs of each
            project.
          </p>
        </div>

        {/* Technology Areas */}
        <div className="grid gap-4 sm:grid-cols-2">
          {technologyAreas.map((area) => (
            <div
              key={area.number}
              className="rounded-2xl border border-[var(--border-light)] bg-white p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-[var(--brand-green)]">
                  {area.number}
                </span>

                <span className="text-lg text-[var(--text-muted)]">
                  +
                </span>
              </div>

              <h3 className="mt-10 text-lg font-semibold tracking-tight">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {area.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border-light)] px-3 py-1.5 text-xs text-[var(--text-muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}