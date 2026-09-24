import Link from "next/link";
import { notFound } from "next/navigation";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import {
  getResourceBySlug,
  resources,
} from "@/data/resources";

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return resources
    .filter((resource) => resource.published)
    .map((resource) => ({
      slug: resource.slug,
    }));
}

export default async function ResourcePage({
  params,
}: ResourcePageProps) {
  const { slug } = await params;

  const resource = getResourceBySlug(slug);

  if (!resource || !resource.published) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--background-dark)] py-24 text-white sm:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="mb-7 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[var(--brand-green)]"
          >
            ← All Resources
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--brand-green)]/15 px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
              {resource.type}
            </span>

            <span className="text-sm text-white/40">
              {resource.category}
            </span>
          </div>

          <Heading as="h1" className="mt-6 text-white">
            {resource.title}
          </Heading>

          <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
            {resource.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Resource
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {resource.title}
            </h2>
          </div>

          {resource.content && resource.content.length > 0 ? (
            <div className="space-y-6">
              {resource.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-8 text-[var(--text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--background-soft)] p-8 text-center">
              <h3 className="text-2xl font-semibold">
                Content coming soon.
              </h3>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--text-secondary)]">
                This resource has been structured for future publication.
                Detailed content will be added when it is ready for
                publication.
              </p>
            </div>
          )}
        </article>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--brand-green-light)]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
            Need Help?
          </p>

          <Heading as="h2" className="mt-4">
            Have a technology requirement?
          </Heading>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Discuss your business, software, automation or digital
            requirements with Sohan Soft Tech.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-green-dark)]"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-light)] bg-white px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}