export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
}

export interface MegaMenu {
  label: string;
  href: string;
  description: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
  bottomCtaText?: string;
  bottomCtaLinkText?: string;
  bottomCtaHref?: string;
  groups: NavigationGroup[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const servicesMenu: MegaMenu = {
  label: "Services",
  href: "/services",
  description:
    "Web, commerce, mobile, automation, software and infrastructure capabilities under one technology partner.",
  featured: {
    title: "AI & Automation",
    description:
      "Connect enquiries, workflows and customer communication with practical automation.",
    href: "/services/ai-automation",
    cta: "Explore automation",
  },
  bottomCtaText: "Looking for tailored technology solutions for your business?",
  bottomCtaLinkText: "Explore all services →",
  bottomCtaHref: "/services",
  groups: [
    {
      title: "Digital Solutions",
      items: [
        {
          label: "Web Development",
          href: "/services/web-development",
          description:
            "Modern websites and digital experiences built for businesses.",
        },
        {
          label: "E-Commerce",
          href: "/services/ecommerce",
          description:
            "Scalable online stores designed for growth and conversion.",
        },
        {
          label: "Mobile App Development",
          href: "/services/mobile-app-development",
          description:
            "Mobile applications built around real business needs.",
        },
      ],
    },
    {
      title: "AI & Automation",
      items: [
        {
          label: "AI & Automation",
          href: "/services/ai-automation",
          description:
            "Intelligent systems that reduce manual work and improve efficiency.",
        },
        {
          label: "WhatsApp Automation",
          href: "/services/whatsapp-automation",
          description:
            "Business communication and workflow automation through WhatsApp.",
        },
        {
          label: "Digital Marketing",
          href: "/services/digital-marketing",
          description:
            "Digital strategies and campaigns that help businesses grow online.",
        },
      ],
    },
    {
      title: "Business Technology",
      items: [
        {
          label: "Office IT Setup",
          href: "/services/office-it-setup",
          description:
            "Reliable technology infrastructure for modern workplaces.",
        },
        {
          label: "Business Software",
          href: "/services/business-software",
          description:
            "Custom software solutions for everyday business operations.",
        },
        {
          label: "Technical Services",
          href: "/services/technical-services",
          description:
            "Technical solutions, documentation and engineering support.",
        },
      ],
    },
  ],
};

export const solutionsMenu: MegaMenu = {
  label: "Solutions",
  href: "/solutions",
  description:
    "Solution paths organized around business need — from operations and education to automation and office technology.",
  featured: {
    title: "Digital Transformation",
    description:
      "Modernize processes, systems and customer journeys with a practical technology roadmap.",
    href: "/solutions/digital-transformation",
    cta: "See this solution",
  },
  bottomCtaText: "Looking for tailored technology solutions for your business?",
  bottomCtaLinkText: "Explore all solutions →",
  bottomCtaHref: "/solutions",
  groups: [
    {
      title: "Business",
      items: [
        {
          label: "Business Solutions",
          href: "/solutions/business",
          description:
            "Technology solutions designed around business needs.",
        },
        {
          label: "Digital Transformation",
          href: "/solutions/digital-transformation",
          description:
            "Modernize processes, systems and workflows.",
        },
        {
          label: "Automation",
          href: "/solutions/automation",
          description:
            "Reduce repetitive work through intelligent automation.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          label: "Education Solutions",
          href: "/solutions/education",
          description:
            "Technology solutions for educational institutions.",
        },
        {
          label: "Learning Management",
          href: "/solutions/learning-management",
          description:
            "Digital tools for learning and training.",
        },
      ],
    },
    {
      title: "Communication",
      items: [
        {
          label: "WhatsApp Business",
          href: "/solutions/whatsapp-business",
          description:
            "Business communication and customer engagement.",
        },
        {
          label: "Digital Communication",
          href: "/solutions/digital-communication",
          description:
            "Connect businesses with customers through digital channels.",
        },
      ],
    },
  ],
};

export const industriesMenu: MegaMenu = {
  label: "Industries",
  href: "/industries",
  description:
    "Technology shaped around the operating realities of education, healthcare, retail, manufacturing and more.",
  featured: {
    title: "Education Technology",
    description:
      "ERP, learning systems and parent communication designed for institutions.",
    href: "/industries/education",
    cta: "View industry",
  },
  bottomCtaText: "Looking for tailored technology solutions for your business?",
  bottomCtaLinkText: "Explore technology solutions for your industry →",
  bottomCtaHref: "/industries",
  groups: [
    {
      title: "Education & Health",
      items: [
        {
          label: "Education Technology",
          href: "/industries/education",
          description:
            "Digital solutions for schools, colleges and training institutions.",
        },
        {
          label: "Healthcare Technology",
          href: "/industries/healthcare",
          description:
            "Technology solutions for modern healthcare operations.",
        },
      ],
    },
    {
      title: "Commerce & Services",
      items: [
        {
          label: "Retail Solutions",
          href: "/industries/retail-ecommerce",
          description:
            "Digital systems for retail and online commerce.",
        },
        {
          label: "Hospitality Solutions",
          href: "/industries/food-hospitality",
          description:
            "Digital tools for restaurants, hotels and hospitality businesses.",
        },
        {
          label: "Business Technology",
          href: "/industries/professional-services",
          description:
            "Technology solutions for service-based organizations.",
        },
      ],
    },
    {
      title: "Enterprise & SMB",
      items: [
        {
          label: "Manufacturing Technology",
          href: "/industries/manufacturing",
          description:
            "Technology and automation for manufacturing operations.",
        },
        {
          label: "SMB Solutions",
          href: "/industries/smb",
          description:
            "Practical technology designed around growing businesses.",
        },
        {
          label: "Corporate Offices",
          href: "/industries/corporate-offices",
          description:
            "Office technology, infrastructure and business systems.",
        },
      ],
    },
  ],
};

export const productsMenu: MegaMenu = {
  label: "Products",
  href: "/products",
  description:
    "Software platforms for billing, POS, education, attendance, messaging and warranty operations.",
  featured: {
    title: "WhatsApp Automation Platform",
    description:
      "Structured WhatsApp workflows for enquiries, notifications and customer communication.",
    href: "/products/whatsapp-automation-platform",
    cta: "Request a demo",
  },
  bottomCtaText: "Looking for a product built around your business?",
  bottomCtaLinkText: "Explore all products →",
  bottomCtaHref: "/products",
  groups: [
    {
      title: "Business Software",
      items: [
        {
          label: "Billing Software",
          href: "/products/billing-software",
          description:
            "Simplify billing and business transaction management.",
        },
        {
          label: "POS Software",
          href: "/products/pos-software",
          description:
            "Point-of-sale software for modern businesses.",
        },
        {
          label: "Business Management Software",
          href: "/products/business-management-software",
          description:
            "Manage important business operations from one platform.",
        },
        {
          label: "Warranty Management System",
          href: "/products/warranty-management-system",
          description:
            "Manage warranty records and service workflows.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          label: "Education ERP",
          href: "/products/education-erp",
          description:
            "Centralized management software for educational institutions.",
        },
        {
          label: "Learning Management System",
          href: "/products/learning-management",
          description:
            "Learning management capabilities for digital education.",
        },
        {
          label: "Attendance System",
          href: "/products/attendance-system",
          description:
            "Digital attendance and workforce management solution.",
        },
      ],
    },
    {
      title: "Automation & Messaging",
      items: [
        {
          label: "WhatsApp Automation Platform",
          href: "/products/whatsapp-automation-platform",
          description:
            "Automate WhatsApp communication and workflows.",
        },
        {
          label: "SMS / DLT Platform",
          href: "/products/sms-dlt-platform",
          description:
            "Business messaging and communication management.",
        },
        {
          label: "Custom Business Software",
          href: "/products/custom-business-software",
          description:
            "Tailored software systems built to specific requirements.",
        },
      ],
    },
  ],
};

export const companyMenu: MegaMenu = {
  label: "Company",
  href: "/company",
  description:
    "How Sohan Soft Tech approaches technology partnerships, delivery and long-term support.",
  featured: {
    title: "Our Approach",
    description:
      "Business-first thinking, practical technology and implementation that can scale with you.",
    href: "/company/approach",
    cta: "Read our approach",
  },
  bottomCtaText: "Want to work with Sohan Soft Tech?",
  bottomCtaLinkText: "Talk to Us →",
  bottomCtaHref: "/contact",
  groups: [
    {
      title: "About",
      items: [
        {
          label: "About Sohan Soft Tech",
          href: "/company",
          description:
            "Our approach to technology and business solutions.",
        },
        {
          label: "Our Approach",
          href: "/company/approach",
          description:
            "How we connect business requirements with technology choices.",
        },
        {
          label: "Careers",
          href: "/careers",
          description:
            "Join the team building practical technology for businesses.",
        },
      ],
    },
    {
      title: "How We Work",
      items: [
        {
          label: "How We Work",
          href: "/company/how-we-work",
          description:
            "Understand our approach from discovery to delivery.",
        },
        {
          label: "Technology",
          href: "/company/technology",
          description:
            "Explore the technologies behind our solutions.",
        },
      ],
    },
  ],
};

export const resourcesMenu: MegaMenu = {
  label: "Resources",
  href: "/resources",
  description:
    "Guides, FAQs and example layouts to help teams evaluate technology and automation decisions.",
  featured: {
    title: "FAQs",
    description:
      "Clear answers about services, delivery and how to start a conversation with our team.",
    href: "/resources/faqs",
    cta: "Open FAQs",
  },
  bottomCtaText: "Have a technology question?",
  bottomCtaLinkText: "Talk to Us →",
  bottomCtaHref: "/contact",
  groups: [
    {
      title: "Knowledge",
      items: [
        {
          label: "Insights",
          href: "/resources/insights",
          description:
            "Technology, business and digital insights.",
        },
        {
          label: "Case Studies",
          href: "/case-studies",
          description:
            "Explore selected projects and business solutions.",
        },
      ],
    },
    {
      title: "Support & FAQs",
      items: [
        {
          label: "FAQs",
          href: "/resources/faqs",
          description:
            "Answers to common questions about our services and solutions.",
        },
        {
          label: "Guides",
          href: "/resources/guides",
          description:
            "Example resource layouts for automation, software and digital growth.",
        },
        {
          label: "Technology Resources",
          href: "/resources/technology",
          description:
            "Reference material for evaluating platforms and implementation approaches.",
        },
      ],
    },
  ],
};

export const megaMenus: Record<string, MegaMenu> = {
  Services: servicesMenu,
  Solutions: solutionsMenu,
  Industries: industriesMenu,
  Products: productsMenu,
  Company: companyMenu,
  Resources: resourcesMenu,
};