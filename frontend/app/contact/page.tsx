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
      <section className="bg-[var(--background)] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-eyebrow">Contact Sohan Soft Tech</p>
            <Heading as="h1" className="mt-5">
              Let&apos;s build what your business needs.
            </Heading>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Tell us about your business, technology requirements or project
              idea. We&apos;ll use the information to understand what you need
              and determine the right next step.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-[var(--background)] !pt-0">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-eyebrow">Start a conversation</p>
            <Heading as="h2" className="mt-4">
              Tell us what you&apos;re trying to solve.
            </Heading>
            <p className="mt-6 leading-8 text-[var(--text-secondary)]">
              Whether you need a website, business software, automation,
              digital transformation or another technology solution, share
              your requirements with us.
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

          <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-eyebrow">Project enquiry</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tell us about your requirement
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Fields marked with * are required.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--background)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-eyebrow">Direct conversation</p>
          <Heading as="h2" className="mt-4">
            Prefer a quick conversation?
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            You can reach the team on WhatsApp using the floating button, or
            send the form and we will follow up.
          </p>
        </div>
      </Section>
    </main>
  );
}
