
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import RequestDemoButton from "@/components/demo/RequestDemoButton";

export default function HeroSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-white py-16 text-[#172033] sm:py-20 lg:py-24 xl:py-28">
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#F8EEF2] opacity-80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-48 h-[520px] w-[520px] rounded-full bg-[#F8F9FB] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[46%] top-[15%] hidden h-[260px] w-px bg-gradient-to-b from-[#8B2346]/20 via-[#8B2346]/10 to-transparent lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[46%] top-[14%] hidden h-2.5 w-2.5 rounded-full bg-[#8B2346] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[7%] hidden h-px w-24 bg-[#8B2346]/20 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[37px] left-[7%] hidden h-1.5 w-1.5 rounded-full bg-[#8B2346] lg:block"
      />

      {/* MAIN HERO */}
      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
        {/* LEFT: HERO CONTENT */}
        <Reveal className="relative z-20" direction="left">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#8B2346]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B2346] sm:text-[12px]">
              Sohan Soft Tech
            </p>
          </div>

          <Heading
            as="h1"
            className="max-w-[820px] text-[3.35rem] leading-[0.94] tracking-[-0.055em] text-[#172033] sm:text-[4.5rem] sm:leading-[0.93] lg:text-[5.1rem] xl:text-[5.8rem]"
          >
            Technology That Works{" "}
            <span className="relative inline-block text-[#8B2346]">
              for Your Business.
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[4px] w-[68%] rounded-full bg-[#8B2346]/20 sm:-bottom-3"
              />
            </span>
          </Heading>

          <p className="mt-8 max-w-[610px] text-base leading-7 text-[#64748B] sm:mt-9 sm:text-lg sm:leading-8">
            We bring software, AI, automation and digital expertise together
            to help businesses work smarter, connect better and grow with
            confidence.
          </p>

          {/* CALL-TO-ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-10">
            <RequestDemoButton className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,35,70,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F1837] hover:shadow-[0_18px_38px_rgba(139,35,70,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2346] focus-visible:ring-offset-2">
              Request a Demo
            </RequestDemoButton>

            <Link href="/contact">
              <Button
                variant="outline"
                className="!border-[#CFA0B0] !bg-white !px-7 !py-3.5 text-sm font-medium !text-[#8B2346] shadow-[0_6px_20px_rgba(23,32,51,0.04)] transition-all duration-300 hover:-translate-y-1 hover:!border-[#8B2346] hover:!bg-[#F8EEF2] hover:!text-[#6F1837]"
              >
                Get a Free Consultation
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                className="!border-transparent !bg-transparent !px-4 !py-3.5 text-sm font-medium !text-[#8B2346] transition-all duration-300 hover:!border-[#8B2346]/20 hover:!bg-[#F8EEF2]"
              >
                Explore Our Capabilities
              </Button>
            </Link>
          </div>

          {/* SUPPORTING TEXT */}
          <div className="mt-11 max-w-[620px] border-t border-[#E5E7EB] pt-6 sm:mt-12">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B2346]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-[#64748B] sm:text-[11px] sm:tracking-[0.2em]">
                Technology • Automation • Digital Solutions
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: PREMIUM IMAGE AREA */}
        <Reveal
          className="relative lg:pl-3 xl:pl-5"
          direction="right"
          delay={0.15}
        >
          <div className="relative mx-auto w-full max-w-[650px]">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-[82%] w-[82%] rounded-[60px] bg-[#F8EEF2] opacity-70 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-[38px] border border-[#8B2346]/10 sm:-right-5 sm:-top-5 sm:rounded-[44px]"
            />

            <div className="relative z-10 rounded-[30px] border border-[#E5E7EB] bg-white p-2.5 shadow-[0_30px_80px_rgba(23,32,51,0.14)] sm:rounded-[40px] sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#F7F8FA] sm:rounded-[31px]">
                <Image
                  src="/images/company-workspace.jpg"
                  alt="Sohan Soft Tech technology workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#172033]/15 via-transparent to-white/10"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/40 sm:rounded-[31px]"
                />
              </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_15px_35px_rgba(23,32,51,0.12)] sm:-bottom-6 sm:-left-6 sm:h-[82px] sm:w-[82px]"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[#8B2346]" />
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-5 top-12 z-20 h-3 w-3 rounded-full bg-[#8B2346] shadow-[0_0_0_7px_rgba(139,35,70,0.08)]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 right-8 z-20 flex items-center gap-2 sm:right-12"
            >
              <span className="h-px w-20 bg-[#8B2346]/35 sm:w-24" />
              <span className="h-2 w-2 rounded-full bg-[#8B2346]" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
