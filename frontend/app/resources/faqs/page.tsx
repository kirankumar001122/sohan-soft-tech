import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Sohan Soft Tech services, solutions, software and technology projects.",
  keywords: [
    "Sohan Soft Tech FAQs",
    "technology services FAQ",
    "software development FAQ",
    "business automation FAQ",
    "IT solutions FAQ",
  ],
  openGraph: {
    title: "FAQs | Sohan Soft Tech",
    description:
      "Answers to common questions about Sohan Soft Tech services, solutions and technology projects.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What services does Sohan Soft Tech provide?",
    answer:
      "Sohan Soft Tech provides technology and digital services including web development, e-commerce, mobile applications, AI and automation, business software, digital marketing, office IT and technical services.",
  },
  {
    question: "Can you build custom software for a business?",
    answer:
      "Yes. Custom business software can be designed around specific workflows, operational requirements, integrations and business processes.",
  },
  {
    question: "Can you integrate existing business systems?",
    answer:
      "Technology integrations can be planned using APIs and other appropriate integration methods depending on the systems and requirements involved.",
  },
  {
    question: "Do you provide AI and automation solutions?",
    answer:
      "AI and automation solutions can be considered for repetitive workflows, communication, reporting, lead handling, data synchronization and other suitable business processes.",
  },
  {
    question: "Do you work with small and medium businesses?",
    answer:
      "Yes. Solutions can be structured around the technology requirements, workflows and scale of small and medium businesses.",
  },
  {
    question: "How can I discuss a project?",
    answer:
      "You can use the Contact page to submit your project requirements and provide the information needed to understand your business and technology needs.",
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-white text-[#172033]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
              FAQs
            </p>

            <Heading as="h1" className="mt-5 text-[#172033]">
              Answers to common technology questions.
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              Find answers to common questions about our services, solutions,
              software and technology projects.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="bg-[#F8F9FB]">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8B2346]">
            Frequently Asked Questions
          </p>

          <Heading as="h2" className="mt-4 text-[#172033]">
            Common questions about working with us.
          </Heading>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:border-[#8B2346] hover:shadow-[0_10px_30px_rgba(23,32,51,0.06)]"
              >
                <h3 className="text-xl font-semibold text-[#172033]">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-7 text-[#64748B]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8EEF2] p-8 sm:p-12">
          <Heading as="h2" className="text-[#172033]">
            Have a question about your project?
          </Heading>

          <p className="mt-5 max-w-2xl leading-8 text-[#64748B]">
            Share your requirements with us and we can understand the
            technology or business problem you are looking to solve.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
          >
            Talk to Us →
          </a>
        </div>
      </Section>
    </main>
  );
}