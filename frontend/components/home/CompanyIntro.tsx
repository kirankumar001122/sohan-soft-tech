import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function CompanyIntro() {
  return (
    <Section className="bg-[var(--background)]">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-white p-2 shadow-[var(--shadow-card)]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[22px]">
              <Image
                src="/images/company-workspace.jpg"
                alt="Technology workspace at Sohan Soft Tech"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-eyebrow">Capability</p>
          <Heading as="h2" className="mt-4 max-w-[16ch]">
            One technology partner. Multiple ways to move forward.
          </Heading>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Sohan Soft Tech helps businesses build digital products, automate
            workflows, modernize operations and strengthen their digital
            presence — without assembling a separate vendor for every need.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Software, communication, infrastructure and growth services can
            work as one connected program rather than disconnected projects.
          </p>
          <Link
            href="/company"
            className="mt-8 inline-flex text-sm font-semibold text-[var(--brand-gold-deep)] hover:underline"
          >
            About Sohan Soft Tech →
          </Link>
        </div>
      </div>
    </Section>
  );
}
