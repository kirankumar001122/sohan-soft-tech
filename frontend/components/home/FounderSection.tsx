import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function FounderSection() {
  return (
    <Section className="bg-[#F8F9FB]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Content */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Team
          </p>

          <Heading as="h2" className="text-[#172033]">
            Meet Our Team
          </Heading>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            Our team brings together technology, creativity and practical
            business thinking to build digital solutions around real
            organizational needs.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748B]">
            We focus on building software, applications, automation and
            connected systems designed to help businesses operate more
            effectively.
          </p>
        </div>

        {/* Team Image */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[#E5E7EB] bg-white p-2 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-lg)-6px)]">
              <Image
                src="/images/team.jpg"
                alt="Sohan Soft Tech team"
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