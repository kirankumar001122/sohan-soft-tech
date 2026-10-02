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
      <section className="bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-gold-deep)]">
              Legal
            </p>

            <Heading as="h1" className="text-[var(--ink)]">
              Cookie Policy
            </Heading>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Information about cookies and similar technologies that may be
              used on the Sohan Soft Tech website.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-[var(--border-light)] bg-[var(--background-soft)] px-4 py-2 text-sm text-[var(--text-secondary)]">
              Last updated: September 2026
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="bg-[var(--background)]">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Cookies
            </p>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Understanding how cookies and similar technologies may support
              the website.
            </p>
          </div>

          <div className="max-w-4xl">
            <Heading as="h2" className="text-[var(--ink)]">
              A transparent approach to website technologies.
            </Heading>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              This page explains the general purposes for which cookies or
              similar technologies may be used on this website.
            </p>
          </div>
        </div>
      </Section>

      {/* Policy sections */}
      <section className="border-y border-[var(--border-light)] bg-[var(--background-soft)]">
        <div className="mx-auto max-w-5xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[var(--text-secondary)]"
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
      <Section className="bg-[var(--background)]">
        <div className="rounded-[var(--radius-lg)] bg-[var(--background-soft)] px-6 py-6 sm:px-10 sm:py-7 lg:px-14 lg:py-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
              Need help?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              Have a question about cookies?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              If you have a question about website technologies or privacy,
              you can reach out through our contact page.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold-deep)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-gold-hover)]"
              >
                Contact Sohan Soft Tech
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-full border border-[var(--brand-gold)] px-6 py-3 text-sm font-medium text-[var(--brand-gold-deep)] transition-colors hover:bg-[var(--brand-gold-deep)] hover:text-white"
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
