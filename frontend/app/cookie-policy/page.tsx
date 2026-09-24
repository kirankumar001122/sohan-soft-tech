import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that may be stored on your device when you visit a website.",
      "They can help websites remember information, support functionality and understand how visitors interact with a website.",
    ],
  },
  {
    title: "2. How Cookies May Be Used",
    content: [
      "Sohan Soft Tech may use cookies or similar technologies where required for website functionality, security, analytics or improving the user experience.",
      "The specific technologies used may change as website features and services evolve.",
    ],
  },
  {
    title: "3. Essential Technologies",
    content: [
      "Some cookies or similar technologies may be necessary for core website functionality, security or technical operations.",
      "These technologies may be required for certain parts of the website to function correctly.",
    ],
  },
  {
    title: "4. Analytics",
    content: [
      "Analytics technologies may be used to understand general website usage, such as which pages receive visits and how visitors interact with website content.",
      "Analytics information may help identify areas where website performance and user experience can be improved.",
    ],
  },
  {
    title: "5. Third-Party Services",
    content: [
      "Certain website features may rely on third-party services. These providers may use cookies or similar technologies according to their own policies.",
      "The use of third-party technologies may depend on the features and integrations enabled on the website.",
    ],
  },
  {
    title: "6. Managing Cookies",
    content: [
      "Most modern web browsers allow you to control or delete cookies through browser settings.",
      "Disabling certain cookies may affect the availability or functionality of some website features.",
    ],
  },
  {
    title: "7. Changes to This Cookie Policy",
    content: [
      "This Cookie Policy may be updated when website functionality, analytics tools, third-party services or applicable requirements change.",
      "The latest version will be published on this page.",
    ],
  },
  {
    title: "8. Contact",
    content: [
      "If you have questions about the use of cookies or similar technologies on this website, please use the contact options available through the Sohan Soft Tech website.",
    ],
  },
];

export const metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for the Sohan Soft Tech website explaining the general use of cookies and similar technologies.",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              Information about cookies and similar technologies that may be
              used on the Sohan Soft Tech website.
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
              Cookies
            </p>

            <p className="mt-4 text-sm leading-7 text-[#64748B]">
              Understanding how cookies and similar technologies may support
              the website.
            </p>
          </div>

          <div className="max-w-4xl">
            <Heading as="h2" className="text-[#172033]">
              A transparent approach to website technologies.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              This page explains the general purposes for which cookies or
              similar technologies may be used on this website.
            </p>
          </div>
        </div>
      </Section>

      {/* Policy sections */}
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
              Need help?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
              Have a question about cookies?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
              If you have a question about website technologies or privacy,
              you can reach out through our contact page.
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