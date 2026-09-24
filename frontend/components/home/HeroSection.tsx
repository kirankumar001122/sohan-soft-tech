import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-white py-16 text-[#172033] sm:py-24 lg:py-28">
      <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* =====================================
            LEFT — HERO CONTENT
            ===================================== */}
        <div className="lg:col-span-7 xl:col-span-7">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B2346]" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8B2346]">
              Sohan Soft Tech
            </p>
          </div>

          {/* Main Heading */}
          <Heading
            as="h1"
            className="max-w-[750px] text-[#172033] text-[3.2rem] leading-[0.96] tracking-[-0.05em] sm:text-[4.5rem] lg:text-[5.2rem] xl:text-[5.8rem]"
          >
            Technology That Works{" "}
            <span className="text-[#8B2346]">
              for Your Business.
            </span>
          </Heading>

          {/* Description */}
          <p className="mt-7 max-w-[580px] text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
            We build technology, automation and digital solutions that help
            businesses operate, connect and grow.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <Link href="/contact">
              <Button
                variant="primary"
               className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
              >
                Get a Free Consultation
              </Button>
            </Link>

            {/* Secondary Button */}
            <Link href="/services">
              <Button
                variant="outline"
                className="!border-[#8B2346] !bg-white !px-7 !py-3.5 text-base font-medium !text-[#8B2346] transition-all duration-200 hover:!bg-[#8B2346] hover:!text-white"
              >
                Explore Our Capabilities
              </Button>
            </Link>
          </div>

          {/* Supporting Text */}
          <div className="mt-10 border-t border-[#E5E7EB] pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
              Technology • Automation • Digital Solutions
            </p>
          </div>
        </div>

        {/* =====================================
            RIGHT — WORKSPACE IMAGE
            ===================================== */}
        <div className="lg:col-span-5 xl:col-span-5">
          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-2.5 shadow-[0_25px_60px_rgba(23,32,51,0.10)] sm:rounded-[32px]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F7F8FA] sm:rounded-[26px]">
                <Image
                  src="/images/company-workspace.jpg"
                  alt="Sohan Soft Tech technology workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}