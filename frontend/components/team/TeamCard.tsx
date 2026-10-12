import Image from "next/image";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
  index: number;
}

export default function TeamCard({
  member,
  featured = false,
  index,
}: TeamCardProps) {
  return (
    <article
      className={`team-card group overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white ${
        featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div
        className={`relative overflow-hidden bg-[var(--background-soft)] ${
          featured
            ? "aspect-[4/3] lg:aspect-auto lg:min-h-[360px]"
            : "aspect-[4/3]"
        }`}
      >
        <Image
          src={member.image}
          alt={member.alt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 25vw"}
          className="team-card-image object-cover"
          style={{ objectPosition: member.imagePosition }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      </div>
      <div className={`flex flex-col justify-end p-6 sm:p-7 ${featured ? "lg:p-9" : ""}`}>
        <p className="text-eyebrow">{member.role}</p>
        <h3 className={`mt-3 font-semibold tracking-[-0.02em] text-[var(--ink)] ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {member.name}
        </h3>
        <div className="mt-5 h-px w-12 bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-20" />
      </div>
    </article>
  );
}
