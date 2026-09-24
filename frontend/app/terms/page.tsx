import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "These Terms & Conditions describe the general terms applicable to your use of the Sohan Soft Tech website.",
      "By accessing or using this website, you agree to use it responsibly and in accordance with applicable laws and these terms.",
    ],
  },
  {
    title: "2. Website Use",
    content: [
      "You may use this website to learn about Sohan Soft Tech, its services, solutions, products and other information made available through the website.",
      "You must not use the website for unlawful purposes, to interfere with its operation, or to attempt unauthorized access to systems, data or services.",
    ],
  },
  {
    title: "3. Website Information",
    content: [
      "The information presented on this website is intended to provide general information about Sohan Soft Tech and its capabilities.",
      "Website content may be updated, changed or removed from time to time without prior notice.",
    ],
  },
  {
    title: "4. Services and Proposals",
    content: [
      "Descriptions of services, solutions and products on this website do not by themselves constitute a binding service agreement or commercial proposal.",
      "Specific project scope, pricing, timelines, deliverables, responsibilities and other commercial terms should be agreed separately between the relevant parties.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "Unless otherwise stated, website content including text, graphics, visual elements, branding and other original materials may be protected by applicable intellectual property laws.",
      "You should not reproduce, modify, distribute or commercially use website materials without appropriate authorization.",
    ],
  },
  {
    title: "6. Third-Party Services and Links",
    content: [
      "The website may reference or integrate third-party services, platforms or websites.",
      "Sohan Soft Tech is not responsible for the content, availability, policies or practices of external websites or services that are outside its control.",
    ],
  },
  {
    title: "7. User Submissions",
    content: [
      "Information submitted through contact, enquiry or other forms should be accurate and provided for legitimate business or communication purposes.",
      "You should not submit unlawful, harmful, misleading or unauthorized content through the website.",
    ],
  },
  {
    title: "8. Availability and Changes",
    content: [
      "Reasonable efforts may be made to keep the website available and functioning, but continuous or uninterrupted availability cannot be guaranteed.",
      "Website features, content and functionality may be modified, suspended or discontinued when necessary.",
    ],
  },
  {
    title: "9. Disclaimer",
    content: [
      "The website and its content are provided for general informational purposes.",
      "To the extent permitted by applicable law, information on the website should not be treated as a guarantee of a particular business, technical or commercial outcome.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, Sohan Soft Tech shall not be responsible for losses arising solely from reliance on general website information, interruptions outside reasonable control, or third-party services.",
      "Specific liability relating to an actual project or service should be governed by the applicable agreement between the parties.",
    ],
  },
  {
    title: "11. Privacy",
    content: [
      "Information submitted through the website may be handled in accordance with the Sohan Soft Tech Privacy Policy.",
      "Please review the Privacy Policy for information about the general handling of information submitted through the website.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    content: [
      "These Terms & Conditions may be updated from time to time to reflect changes to the website, services or applicable requirements.",
      "The updated version will be published on this page when changes are made.",
    ],
  },
  {
    title: "13. Contact",
    content: [
      "If you have questions about these Terms & Conditions, please use the contact options available through the Sohan Soft Tech website.",
    ],
  },
];

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for use of the Sohan Soft Tech website.",
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
              Legal
            </p>

            <Heading as="h1" className="text-[#172033]">
              Terms & Conditions
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              General terms governing the use of the Sohan Soft Tech
              website and the information provided through it.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-2 text-sm text-[#64748B]">
              Last updated: September 2026
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8B2346]">
              Terms
            </p>

            <p className="mt-4 text-sm leading-7 text-[#64748B]">
              Please review these terms before using the website.
            </p>
          </div>

          <div className="max-w-4xl">
            <Heading as="h2" className="text-[#172033]">
              Clear terms for using our digital platform.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              These terms provide a general framework for responsible use of
              the Sohan Soft Tech website.
            </p>
          </div>
        </div>
      </Section>

      {/* Terms sections */}
      <section className="border-y border-[#E5E7EB] bg-[#F8F9FB]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="space-y-14">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-[#172033] sm:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[#64748B]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="rounded-[var(--radius-lg)] bg-[#F8EEF2] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8B2346]">
              Questions?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
              Need clarification about these terms?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
              If you have a question about using the website or working with
              Sohan Soft Tech, you can reach out through our contact page.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#8B2346] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6F1837]"
              >
                Contact Sohan Soft Tech
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-full border border-[#8B2346] px-6 py-3 text-sm font-medium text-[#8B2346] transition-colors hover:bg-[#8B2346] hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}