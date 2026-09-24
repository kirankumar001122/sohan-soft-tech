import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sohan Soft Tech.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
            Legal
          </p>

          <Heading as="h1" className="text-[#172033]">
            Privacy Policy
          </Heading>

          <p className="mt-6 max-w-2xl text-[#64748B]">
            Privacy information for visitors and users of the Sohan Soft
            Tech website.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <Heading as="h2" className="text-[#172033]">
            Privacy Policy
          </Heading>

          <p className="mt-6 leading-8 text-[#64748B]">
            This page explains how information submitted through the Sohan
            Soft Tech website may be handled.
          </p>
        </div>
      </Section>
    </main>
  );
}