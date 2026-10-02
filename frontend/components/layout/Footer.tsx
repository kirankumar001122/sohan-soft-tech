import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "E-Commerce", href: "/services/ecommerce" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Business Software", href: "/services/business-software" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Business Solutions", href: "/solutions/business" },
      { label: "Education Solutions", href: "/solutions/education" },
      { label: "Digital Transformation", href: "/solutions/digital-transformation" },
      { label: "Automation", href: "/solutions/automation" },
      { label: "Communication", href: "/solutions/communication" },
      { label: "Office Technology", href: "/solutions/office-technology" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Food & Hospitality", href: "/industries/food-hospitality" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "SMBs", href: "/industries/smb" },
      { label: "Corporate Offices", href: "/industries/corporate-offices" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Billing Software", href: "/products/billing-software" },
      { label: "POS Software", href: "/products/pos-software" },
      { label: "Education ERP", href: "/products/education-erp" },
      { label: "LMS", href: "/products/learning-management" },
      { label: "Attendance System", href: "/products/attendance-system" },
      { label: "SMS / DLT Platform", href: "/products/sms-dlt-platform" },
      { label: "WhatsApp Automation", href: "/products/whatsapp-automation-platform" },
      { label: "Warranty Systems", href: "/products/warranty-management-system" },
      { label: "Custom Business Software", href: "/products/custom-business-software" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company" },
      { label: "Our Approach", href: "/company/approach" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Technology", href: "/company/technology" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/resources/insights" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Technology Resources", href: "/resources/technology" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Contact the team", href: "/contact" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] text-white">
      <Container>
        <div className="grid gap-10 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16 lg:py-14">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Sohan Soft Tech Home">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/sohan-logo.png"
                  alt="Sohan Soft Tech logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-semibold">Sohan Soft Tech</p>
                <p className="text-xs text-white/50">Technology partner</p>
              </div>
            </Link>
            <p className="mt-6 text-lg font-semibold tracking-[-0.02em]">
              Build. Automate. Operate. Grow.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              Software, AI, automation and digital expertise brought together
              for businesses that want technology that actually works.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-rich)]">{column.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {column.title === "Contact" && (
                    <li>
                      <a
                        href="https://wa.me/message/2RZI67D6K5E5M1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-white/65 transition hover:text-white"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5 py-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sohan Soft Tech. All rights reserved.</p>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">Build. Automate. Operate. Grow.</span>
        </div>
      </Container>
    </footer>
  );
}
