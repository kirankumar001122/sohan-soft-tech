export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "web-development",
    title: "Web Solutions",
    description:
      "Websites, web applications and digital platforms designed around business requirements.",
    services: [
      {
        slug: "custom-web-development",
        title: "Custom Web Development",
        description:
          "Custom websites and web platforms designed around business requirements.",
        category: "Web Solutions",
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Professional interface and user-experience design for digital products.",
        category: "Web Solutions",
      },
      {
        slug: "web-applications",
        title: "Web Applications",
        description:
          "Custom web-based applications and business platforms.",
        category: "Web Solutions",
      },
    ],
  },

  {
    slug: "ecommerce",
    title: "E-Commerce Services",
    description:
      "Digital commerce solutions for businesses selling products and services online.",
    services: [
      {
        slug: "online-store-development",
        title: "Online Store Development",
        description:
          "Development of professional online stores.",
        category: "E-Commerce Services",
      },
      {
        slug: "ecommerce-optimization",
        title: "E-Commerce Optimization",
        description:
          "Improvement and optimization of existing e-commerce platforms.",
        category: "E-Commerce Services",
      },
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile application development for different platforms and business requirements.",
    services: [
      {
        slug: "ios-development",
        title: "iOS Development",
        description:
          "Custom iOS application development.",
        category: "Mobile App Development",
      },
      {
        slug: "android-development",
        title: "Android Development",
        description:
          "Custom Android application development.",
        category: "Mobile App Development",
      },
      {
        slug: "cross-platform-apps",
        title: "Cross-Platform Apps",
        description:
          "Applications designed for multiple platforms.",
        category: "Mobile App Development",
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Services",
    description:
      "Digital growth services covering search, social media, branding and online presence.",
    services: [
      {
        slug: "seo",
        title: "Search Engine Optimization",
        description:
          "SEO strategy and implementation for improving organic search visibility.",
        category: "Digital Services",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Digital campaigns and online growth activities.",
        category: "Digital Services",
      },
      {
        slug: "social-media",
        title: "Social Media",
        description:
          "Social media management, content and digital presence.",
        category: "Digital Services",
      },
      {
        slug: "social-media-branding",
        title: "Social Media Branding",
        description:
          "Brand identity and professional visual presence across social platforms.",
        category: "Digital Services",
      },
      {
        slug: "social-media-optimization",
        title: "Social Media Optimization",
        description:
          "Optimization of social profiles, content structure and visibility.",
        category: "Digital Services",
      },
      {
        slug: "branding",
        title: "Branding",
        description:
          "Professional digital and business branding.",
        category: "Digital Services",
      },
    ],
  },

  {
    slug: "business-it",
    title: "Business IT Solutions",
    description:
      "Cloud, automation, security and IT consulting based on business requirements.",
    services: [
      {
        slug: "cloud-solutions",
        title: "Cloud Solutions",
        description:
          "Cloud-based infrastructure, applications and business solutions.",
        category: "Business IT Solutions",
      },
      {
        slug: "business-automation",
        title: "Automation",
        description:
          "Business process automation and workflow systems.",
        category: "Business IT Solutions",
      },
      {
        slug: "security",
        title: "Security",
        description:
          "Business technology security solutions.",
        category: "Business IT Solutions",
      },
      {
        slug: "it-consulting",
        title: "IT Consulting",
        description:
          "Technology consulting based on business requirements.",
        category: "Business IT Solutions",
      },
    ],
  },

  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "AI-powered business solutions, integrations and automated workflows.",
    services: [
      {
        slug: "ai-automation",
        title: "AI Automation",
        description:
          "AI-powered business workflows and automation.",
        category: "AI & Automation",
      },
      {
        slug: "ai-tools-integrations",
        title: "AI Tools & Integrations",
        description:
          "AI tools, productivity systems and custom AI integrations.",
        category: "AI & Automation",
      },
      {
        slug: "whatsapp-bot-setup",
        title: "WhatsApp Bot Setup",
        description:
          "WhatsApp bot setup for automated business communication.",
        category: "AI & Automation",
      },
      {
        slug: "whatsapp-automation",
        title: "WhatsApp Automation",
        description:
          "Automated customer communication, notifications and business workflows.",
        category: "AI & Automation",
      },
      {
        slug: "api-integrations",
        title: "API Integrations",
        description:
          "Integration of business systems and third-party services.",
        category: "AI & Automation",
      },
      {
        slug: "lead-automation",
        title: "Lead Automation",
        description:
          "Lead collection and automated lead workflows.",
        category: "AI & Automation",
      },
      {
        slug: "form-automation",
        title: "Form Automation",
        description:
          "Automated form-based business workflows.",
        category: "AI & Automation",
      },
      {
        slug: "email-automation",
        title: "Email Automation",
        description:
          "Automated email communication and business workflows.",
        category: "AI & Automation",
      },
      {
        slug: "sms-automation",
        title: "SMS Automation",
        description:
          "Automated SMS communication and notifications.",
        category: "AI & Automation",
      },
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        description:
          "Automated reporting and business information workflows.",
        category: "AI & Automation",
      },
      {
        slug: "data-synchronization",
        title: "Data Synchronization",
        description:
          "Synchronization of information between connected systems.",
        category: "AI & Automation",
      },
      {
        slug: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Automation of repetitive business workflows.",
        category: "AI & Automation",
      },
    ],
  },

  {
    slug: "business-software",
    title: "Business Systems & Software",
    description:
      "Business software and systems designed around operational requirements.",
    services: [
      {
        slug: "software-development",
        title: "Software Development",
        description:
          "Software solutions designed around business requirements.",
        category: "Business Systems & Software",
      },
      {
        slug: "custom-business-management-systems",
        title: "Custom Business Management Systems",
        description:
          "Software designed specifically around the client's business workflow.",
        category: "Business Systems & Software",
      },
      {
        slug: "accounting-system-setup",
        title: "Accounting System Setup",
        description:
          "Professional accounting system setup and configuration.",
        category: "Business Systems & Software",
      },
      {
        slug: "billing-software",
        title: "Billing Software",
        description:
          "Business billing and invoicing systems.",
        category: "Business Systems & Software",
      },
      {
        slug: "pos-systems",
        title: "POS Systems",
        description:
          "Point-of-sale and ordering systems.",
        category: "Business Systems & Software",
      },
      {
        slug: "inventory-systems",
        title: "Inventory Systems",
        description:
          "Inventory tracking and business stock management.",
        category: "Business Systems & Software",
      },
      {
        slug: "erp",
        title: "ERP Systems",
        description:
          "Custom enterprise resource planning solutions.",
        category: "Business Systems & Software",
      },
      {
        slug: "education-erp",
        title: "Education ERP",
        description:
          "Student and institutional management platforms.",
        category: "Business Systems & Software",
      },
      {
        slug: "lms",
        title: "Learning Management System",
        description:
          "Learning management systems.",
        category: "Business Systems & Software",
      },
      {
        slug: "attendance-systems",
        title: "Attendance Systems",
        description:
          "Digital attendance and employee or student attendance solutions.",
        category: "Business Systems & Software",
      },
      {
        slug: "sms-dlt-platforms",
        title: "SMS / DLT Platforms",
        description:
          "Bulk SMS, DLT and communication management systems.",
        category: "Business Systems & Software",
      },
      {
        slug: "warranty-management-systems",
        title: "Warranty Management Systems",
        description:
          "Systems supporting warranty registration, claims and warranty tracking.",
        category: "Business Systems & Software",
      },
    ],
  },

  {
    slug: "office-it-setup",
    title: "Office & IT Infrastructure",
    description:
      "Office technology, infrastructure, device setup, networking and IT support.",
    services: [
      {
        slug: "office-setup",
        title: "Office Setup",
        description:
          "Complete office technology setup.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "office-biometrics",
        title: "Office Biometrics",
        description:
          "Biometric attendance and access-related technology.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "networking",
        title: "Networking",
        description:
          "Business network setup and infrastructure.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "computer-device-setup",
        title: "Computer & Device Setup",
        description:
          "Computer and business device setup.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "cloud-setup",
        title: "Cloud Setup",
        description:
          "Cloud setup for business technology requirements.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "business-software-setup",
        title: "Business Software Setup",
        description:
          "Business software installation and configuration.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "it-support",
        title: "IT Support",
        description:
          "Technology support for business environments.",
        category: "Office & IT Infrastructure",
      },
      {
        slug: "technology-consulting",
        title: "Technology Consulting",
        description:
          "Technology consulting based on business requirements.",
        category: "Office & IT Infrastructure",
      },
    ],
  },

  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    description:
      "Google Business Profile setup and optimization for business information and visibility.",
    services: [
      {
        slug: "google-business-profile-setup",
        title: "Google Business Profile Setup & Optimization",
        description:
          "Business profile setup, information configuration, category setup, keyword integration, image uploads and profile optimization.",
        category: "Google Business Profile",
      },
    ],
  },

  {
    slug: "professional-sales-material",
    title: "Professional Sales Material",
    description:
      "Professional business and sales materials for presenting products and services.",
    services: [
      {
        slug: "product-catalogue",
        title: "Product Catalogue",
        description:
          "Product catalogue materials for business and sales use.",
        category: "Professional Sales Material",
      },
      {
        slug: "company-brochure",
        title: "Company Brochure",
        description:
          "Professional company brochure materials.",
        category: "Professional Sales Material",
      },
      {
        slug: "company-profile",
        title: "Company Profile",
        description:
          "Professional company profile materials.",
        category: "Professional Sales Material",
      },
      {
        slug: "visiting-cards",
        title: "Visiting Cards",
        description:
          "Professional visiting card design.",
        category: "Professional Sales Material",
      },
      {
        slug: "letterhead",
        title: "Letterhead",
        description:
          "Professional letterhead design.",
        category: "Professional Sales Material",
      },
      {
        slug: "quotation-format",
        title: "Quotation Format",
        description:
          "Professional quotation format design.",
        category: "Professional Sales Material",
      },
      {
        slug: "invoice-format",
        title: "Invoice Format",
        description:
          "Professional invoice format design.",
        category: "Professional Sales Material",
      },
      {
        slug: "warranty-card-design",
        title: "Warranty Card Design",
        description:
          "Warranty card layout and design.",
        category: "Professional Sales Material",
      },
    ],
  },

  {
    slug: "creative-design",
    title: "Creative Design Services",
    description:
      "Creative design services for digital, promotional and social media requirements.",
    services: [
      {
        slug: "festival-creative-design",
        title: "Festival Creative Design",
        description:
          "Professional festival and promotional creative design.",
        category: "Creative Design Services",
      },
      {
        slug: "social-media-creative-design",
        title: "Social Media Creative Design",
        description:
          "Creative design for social media and digital communication.",
        category: "Creative Design Services",
      },
    ],
  },

  {
    slug: "technical-engineering",
    title: "Technical & Engineering Services",
    description:
      "Technical design, engineering visualization and documentation services.",
    services: [
      {
        slug: "autocad-2d",
        title: "AutoCAD 2D",
        description:
          "2D technical drawings based on project requirements.",
        category: "Technical & Engineering Services",
      },
      {
        slug: "autocad-3d",
        title: "AutoCAD 3D",
        description:
          "Three-dimensional technical design and modelling.",
        category: "Technical & Engineering Services",
      },
      {
        slug: "machine-modelling",
        title: "Machine Modelling",
        description:
          "Three-dimensional machine and product modelling.",
        category: "Technical & Engineering Services",
      },
      {
        slug: "3d-visualization",
        title: "3D Visualization",
        description:
          "Professional visualization of machinery and products.",
        category: "Technical & Engineering Services",
      },
      {
        slug: "animated-technical-videos",
        title: "Animated Technical Videos",
        description:
          "Animated videos demonstrating product and machine functionality, operation and technical workflows.",
        category: "Technical & Engineering Services",
      },
    ],
  },

  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    description:
      "Technical documentation and manuals for products, machines and implementation processes.",
    services: [
      {
        slug: "technical-documentation",
        title: "Technical Documentation",
        description:
          "Technical write-ups and product documentation.",
        category: "Technical Documentation",
      },
      {
        slug: "machine-manuals",
        title: "Machine Manuals",
        description:
          "Documentation for machine operation and maintenance.",
        category: "Technical Documentation",
      },
      {
        slug: "installation-guides",
        title: "Installation Guides",
        description:
          "Guides covering installation requirements and procedures.",
        category: "Technical Documentation",
      },
      {
        slug: "maintenance-documentation",
        title: "Maintenance Documentation",
        description:
          "Documentation covering maintenance requirements and procedures.",
        category: "Technical Documentation",
      },
      {
        slug: "safety-documentation",
        title: "Safety Documentation",
        description:
          "Safety guidelines and documentation.",
        category: "Technical Documentation",
      },
      {
        slug: "warranty-documentation",
        title: "Warranty Documentation",
        description:
          "Documentation related to warranty requirements and processes.",
        category: "Technical Documentation",
      },
    ],
  },

  {
    slug: "warranty-system",
    title: "Warranty System Design",
    description:
      "Warranty management workflows covering registration, claims, tracking and support.",
    services: [
      {
        slug: "warranty-registration",
        title: "Warranty Registration",
        description:
          "Warranty registration workflow and records.",
        category: "Warranty System Design",
      },
      {
        slug: "warranty-claim-processing",
        title: "Warranty Claim Processing",
        description:
          "Warranty claim processing workflows.",
        category: "Warranty System Design",
      },
      {
        slug: "warranty-claim-validation",
        title: "Warranty Claim Validation",
        description:
          "Warranty claim validation processes.",
        category: "Warranty System Design",
      },
      {
        slug: "warranty-tracking",
        title: "Warranty Tracking",
        description:
          "Warranty status and history tracking.",
        category: "Warranty System Design",
      },
    ],
  },
];

/**
 * Find a service category using its URL slug.
 */
export function getServiceCategoryBySlug(
  slug: string
): ServiceCategory | undefined {
  return serviceCategories.find(
    (category) => category.slug === slug
  );
}

/**
 * Find an individual service using its URL slug.
 */
export function getServiceBySlug(
  slug: string
): ServiceItem | undefined {
  for (const category of serviceCategories) {
    const service = category.services.find(
      (item) => item.slug === slug
    );

    if (service) {
      return service;
    }
  }

  return undefined;
}