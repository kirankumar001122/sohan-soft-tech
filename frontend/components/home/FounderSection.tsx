import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const teamFocus = [
  {
    number: "01",
    title: "Software & Digital Products",
    description:
      "We design and build websites, web applications and digital products around practical business requirements.",
  },
  {
    number: "02",
    title: "Automation & AI",
    description:
      "We explore automation and AI-driven approaches that can simplify repetitive work and support better digital workflows.",
  },
  {
    number: "03",
    title: "Business Technology",
    description:
      "We connect software and technology capabilities with the way organizations operate, communicate and serve their customers.",
  },
  {
    number: "04",
    title: "Connected Systems",
    description:
      "We bring applications, integrations, communication channels and technology services together into connected solutions.",
  },
];

export default function FounderSection() {
  return (
    <Section className="bg-[#F8F9FB]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT — INFORMATION */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Our Team
          </p>

          <Heading as="h2" className="text-[#172033]">
            Technology built around people, business needs and practical
            solutions.
          </Heading>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            Our team brings together technology, creativity and practical
            business thinking to build digital solutions around real
            organizational requirements.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
            We work across software development, digital products,
            automation, AI, business systems and connected technology. Our
            focus is on understanding the requirement first and then
            building solutions that are clear, useful and adaptable.
          </p>

          {/* TEAM FOCUS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {teamFocus.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.12em] text-[#8B2346]">
                    {item.number}
                  </span>

                  <span className="text-sm text-[#CBD5E1]">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold tracking-tight text-[#172033]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — EXISTING TEAM IMAGE */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[#E5E7EB] bg-white p-2 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-lg)-6px)]">
              <Image
                src="/images/team.jpg"
                alt="Sohan Soft Tech team collaborating on technology and digital solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}