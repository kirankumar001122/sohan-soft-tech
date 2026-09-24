import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Discuss your technology, software, automation and digital requirements with Sohan Soft Tech.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Contact Sohan Soft Tech
            </p>

            <Heading as="h1" className="mt-5 text-[#172033]">
              Let&apos;s build what your business needs.
            </Heading>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
              Tell us about your business, technology requirements or project
              idea. We&apos;ll use the information to understand what you need
              and determine the right next step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left Information */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              Start a Conversation
            </p>

            <Heading as="h2" className="mt-4 text-[#172033]">
              Tell us what you&apos;re trying to solve.
            </Heading>

            <p className="mt-6 leading-8 text-[#64748B]">
              Whether you need a website, business software, automation,
              digital transformation or another technology solution, share
              your requirements with us.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-[var(--radius-md)] border border-[#E5E7EB] bg-[#F8F9FB] p-6">
                <p className="text-sm font-semibold text-[#172033]">
                  Technology & Digital Solutions
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Explore web, mobile, software, AI, automation and digital
                  solutions based on your business requirements.
                </p>
              </div>

              <div className="rounded-[var(--radius-md)] border border-[#E5E7EB] bg-[#F8F9FB] p-6">
                <p className="text-sm font-semibold text-[#172033]">
                  Business Systems & Automation
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Connect workflows, business systems, communication channels
                  and operational processes.
                </p>
              </div>

              <div className="rounded-[var(--radius-md)] border border-[#E5E7EB] bg-[#F8F9FB] p-6">
                <p className="text-sm font-semibold text-[#172033]">
                  Need Help Choosing?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  You can describe the business problem instead of choosing a
                  specific technology. We can structure the requirement from
                  there.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/services"
                className="text-sm font-medium text-[#8B2346] transition-colors hover:text-[#6F1837]"
              >
                Explore our services →
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[var(--radius-lg)] border border-[#E5E7EB] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
                Project Enquiry
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#172033] sm:text-3xl">
                Tell us about your requirement
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Fields marked with * are required.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </Section>

      {/* WhatsApp / Direct Contact */}
      <Section className="bg-[#F8F9FB]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Direct Conversation
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Prefer a quick conversation?
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
            WhatsApp and direct contact options will be connected here once
            the company&apos;s official contact details are configured.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-sm font-medium text-[#172033] transition-colors hover:border-[#8B2346] hover:text-[#8B2346]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}