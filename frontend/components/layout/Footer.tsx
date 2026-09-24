import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const footerColumns = [
  {
    title: "Services",
    links: [
      {
        label: "Web Development",
        href: "/services/web-development",
      },
      {
        label: "E-Commerce",
        href: "/services/ecommerce",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        label: "AI & Automation",
        href: "/services/ai-automation",
      },
      {
        label: "Business Software",
        href: "/services/business-software",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Business",
        href: "/solutions/business",
      },
      {
        label: "Digital Transformation",
        href: "/solutions/digital-transformation",
      },
      {
        label: "Automation",
        href: "/solutions/automation",
      },
      {
        label: "Education",
        href: "/solutions/education",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        label: "Retail & E-Commerce",
        href: "/industries/retail-ecommerce",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/company",
      },
      {
        label: "How We Work",
        href: "/company#how-we-work",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Resources",
        href: "/resources",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] text-white">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-20 lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Sohan Soft Tech Home"
            >
              {/* Actual Sohan Soft Tech Logo */}
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/sohan-logo.png"
                  alt="Sohan Soft Tech logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-base font-semibold">
                  Sohan Soft Tech
                </p>

                <p className="text-xs text-gray-400">
                  Technology Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Build. Automate. Operate. Grow.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
              Technology, automation and digital solutions designed around
              business needs.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex text-sm font-semibold text-[var(--brand-green)] hover:underline"
            >
              Get a Free Consultation →
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-white">
                  {column.title}
                </h4>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-[var(--border-dark)] py-7 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sohan Soft Tech. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              className="hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}