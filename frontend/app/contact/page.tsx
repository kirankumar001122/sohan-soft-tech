import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import RequestDemoButton from "@/components/demo/RequestDemoButton";

export const metadata = {
  title: "Contact",
  description:
    "Discuss your technology, software, automation and digital requirements with Sohan Soft Tech.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--background)] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-eyebrow">Contact Sohan Soft Tech</p>
            <Heading as="h1" className="mt-5">
              Let&apos;s build what your business needs.
            </Heading>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Explore a product or service with our team. Choose a convenient
              time for a focused demonstration tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-[var(--background)] !pt-0">
        <div className="max-w-4xl">
            <p className="text-eyebrow">Start a conversation</p>
            <Heading as="h2" className="mt-4">
              See the right solution in action.
            </Heading>
            <p className="mt-6 leading-8 text-[var(--text-secondary)]">
              Book a live walkthrough of the products, services, or workflows
              that matter to your business. Our team will help you explore the
              best next step.
            </p>
            <div className="mt-10 space-y-6">
              {[
                [
                  "Technology & Digital Solutions",
                  "Explore web, mobile, software, AI, automation and digital solutions based on your business requirements.",
                ],
                [
                  "Business Systems & Automation",
                  "Connect workflows, business systems, communication channels and operational processes.",
                ],
                [
                  "Need Help Choosing?",
                  "You can describe the business problem instead of choosing a specific technology.",
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-[var(--radius-md)] border border-[var(--border-light)] bg-[var(--background)] p-6"
                >
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex text-sm font-medium text-[var(--brand-gold-deep)]"
            >
              Explore our services →
            </Link>
        </div>
      </Section>

      <Section className="bg-[var(--background)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-eyebrow">Direct conversation</p>
          <Heading as="h2" className="mt-4">
            Prefer to see a demo?
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Choose a time that works for you, or reach the team on WhatsApp
            using the floating button.
          </p>
          <RequestDemoButton className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-gold)] px-7 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-gold-rich)]">
            Request a Demo
          </RequestDemoButton>
        </div>
      </Section>
    </main>
  );
}
