
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function CompanyIntro() {
  return (
    <Section
      id="company-intro"
      className="relative overflow-hidden bg-[#F8F9FB] py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F8EEF2] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 xl:gap-28">
          {/* LEFT: INTRODUCTION */}
          <div className="relative lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E8CDD7] bg-white px-4 py-2 shadow-[0_6px_20px_rgba(23,32,51,0.04)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8B2346]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B2346] sm:text-[11px]">
                Who We Are
              </p>
            </div>

            <div className="mt-8 h-px w-16 bg-[#8B2346]/40" />

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#64748B] sm:text-base">
              Technology designed around the way your business actually works.
            </p>

            <div
              aria-hidden="true"
              className="mt-10 hidden h-20 w-20 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_12px_30px_rgba(23,32,51,0.05)] lg:flex"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-[#8B2346]">
                SST
              </span>
            </div>
          </div>

          {/* RIGHT: COMPANY CONTENT */}
          <div className="relative">
            <Heading
              as="h2"
              className="max-w-5xl text-[2.8rem] leading-[1.01] tracking-[-0.05em] text-[#172033] sm:text-[3.8rem] lg:text-[4.7rem] xl:text-[5.1rem]"
            >
              We turn business needs into practical technology.
            </Heading>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#8B2346] sm:mt-9" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              Sohan Soft Tech helps businesses build digital products,
              automate workflows, modernize operations and strengthen their
              digital presence — without assembling a separate vendor for
              every need.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
              Software, communication, infrastructure and growth services can
              work as one connected program rather than disconnected projects.
            </p>

            {/* CONTENT CARDS */}
            <div className="mt-12 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(23,32,51,0.07)] sm:mt-14 sm:rounded-[32px]">
              <div className="grid sm:grid-cols-2">
                <div className="relative p-7 sm:p-9 lg:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute right-8 top-8 h-8 w-8 rounded-full border border-[#8B2346]/15"
                  />

                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8EEF2] text-sm font-semibold text-[#8B2346]">
                    01
                  </span>

                  <h3 className="mt-6 text-lg font-semibold text-[#172033]">
                    Practical Digital Solutions
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-8 text-[#64748B]">
                    We build digital solutions, business software, automation
                    and technology systems that help organisations work
                    better.
                  </p>
                </div>

                <div className="relative border-t border-[#E5E7EB] bg-[#FCFCFD] p-7 sm:border-l sm:border-t-0 sm:p-9 lg:p-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172033] text-sm font-semibold text-white">
                    02
                  </span>

                  <h3 className="mt-6 text-lg font-semibold text-[#172033]">
                    Connected Business Technology
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">
                    From digital experiences to connected business processes,
                    our approach focuses on technology that is useful,
                    scalable and aligned with real business requirements.
                  </p>

                  <Link
                    href="/company"
                    className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#D9AABB] bg-white px-5 py-2.5 text-sm font-semibold text-[#8B2346] shadow-[0_5px_18px_rgba(23,32,51,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B2346] hover:bg-[#8B2346] hover:text-white hover:shadow-[0_10px_25px_rgba(139,35,70,0.16)]"
                  >
                    Discover Sohan Soft Tech
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-[#8B2346] via-[#D7A8B8] to-transparent" />
            </div>

            {/* COMPANY WORKSPACE IMAGE */}
            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-2 shadow-[0_20px_60px_rgba(23,32,51,0.07)] sm:rounded-[32px]">
              <div className="relative aspect-[5/3] overflow-hidden rounded-[22px] bg-[#F7F8FA]">
                <Image
                  src="/images/company-workspace.jpg"
                  alt="Technology workspace at Sohan Soft Tech"
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            <Link
              href="/company"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8B2346] transition-colors hover:text-[#6F1837]"
            >
              About Sohan Soft Tech <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
