export interface SolutionItem {
  slug: string;
  title: string;
  description: string;
}

export interface SolutionCategory {
  slug: string;
  title: string;
  description: string;
  capabilities: string[];
  solutions: SolutionItem[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    slug: "business",
    title: "Business Solutions",
    description:
      "Technology solutions designed to support business operations, management, communication and growth.",
    capabilities: [
      "Business software",
      "Business management systems",
      "Billing and accounting",
      "Inventory management",
      "POS systems",
      "Business automation",
      "CRM and communication",
    ],
    solutions: [
      {
        slug: "business-management",
        title: "Business Management",
        description:
          "Technology solutions for managing business workflows, information and day-to-day operations.",
      },
      {
        slug: "billing-accounting",
        title: "Billing & Accounting",
        description:
          "Digital systems for billing, invoicing, accounting workflows and business reporting.",
      },
      {
        slug: "inventory-management",
        title: "Inventory Management",
        description:
          "Technology solutions for tracking products, stock and inventory-related workflows.",
      },
      {
        slug: "business-automation",
        title: "Business Automation",
        description:
          "Automation solutions for repetitive business processes, communication and workflows.",
      },
    ],
  },

  {
    slug: "education",
    title: "Education Solutions",
    description:
      "Digital systems for schools, colleges, educational institutions and learning organizations.",
    capabilities: [
      "Education ERP",
      "Learning management systems",
      "Student management",
      "Attendance",
      "Fee management",
      "SMS communication",
      "WhatsApp automation",
      "Parent communication",
      "Websites and applications",
    ],
    solutions: [
      {
        slug: "education-erp",
        title: "Education ERP",
        description:
          "Institutional management platforms covering relevant academic and administrative workflows.",
      },
      {
        slug: "learning-management",
        title: "Learning Management",
        description:
          "Digital learning environments for managing learning content and related workflows.",
      },
      {
        slug: "student-management",
        title: "Student Management",
        description:
          "Digital systems for managing student information and institutional workflows.",
      },
      {
        slug: "education-communication",
        title: "Education Communication",
        description:
          "SMS, WhatsApp and communication workflows for institutions and parent communication.",
      },
    ],
  },

  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Technology transformation solutions connecting websites, applications, software, cloud, automation and AI.",
    capabilities: [
      "Websites",
      "Applications",
      "Cloud solutions",
      "Business systems",
      "Automation",
      "AI",
      "Integrations",
      "Digital workflows",
    ],
    solutions: [
      {
        slug: "digital-business-systems",
        title: "Digital Business Systems",
        description:
          "Connected digital systems designed around business requirements and operational workflows.",
      },
      {
        slug: "cloud-transformation",
        title: "Cloud Transformation",
        description:
          "Cloud-based infrastructure, applications and business solutions for digital operations.",
      },
      {
        slug: "ai-transformation",
        title: "AI Transformation",
        description:
          "AI-powered capabilities and integrations that can be incorporated into business workflows.",
      },
      {
        slug: "workflow-transformation",
        title: "Workflow Transformation",
        description:
          "Digital workflows that connect people, systems, data and business processes.",
      },
    ],
  },

  {
    slug: "automation",
    title: "Automation Solutions",
    description:
      "Automation solutions for business workflows, leads, communication, reporting and data synchronization.",
    capabilities: [
      "AI automation",
      "Lead automation",
      "Form automation",
      "Email automation",
      "SMS automation",
      "WhatsApp automation",
      "Reporting automation",
      "Data synchronization",
      "Workflow automation",
      "Third-party integrations",
    ],
    solutions: [
      {
        slug: "lead-automation",
        title: "Lead Automation",
        description:
          "Automated workflows for collecting, organizing and processing business leads.",
      },
      {
        slug: "communication-automation",
        title: "Communication Automation",
        description:
          "Automated communication workflows using available business communication platforms.",
      },
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        description:
          "Automated reporting workflows for structured business information and operational data.",
      },
      {
        slug: "data-synchronization",
        title: "Data Synchronization",
        description:
          "Integration workflows for synchronizing information between connected business systems.",
      },
      {
        slug: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Automated workflows designed around repetitive business processes and operational requirements.",
      },
    ],
  },

  {
    slug: "communication",
    title: "Communication Solutions",
    description:
      "Digital communication systems for customer enquiries, notifications, leads and business interactions.",
    capabilities: [
      "WhatsApp Business",
      "WhatsApp automation",
      "SMS platforms",
      "DLT platforms",
      "Email automation",
      "Lead collection",
      "Customer communication",
      "Notifications",
    ],
    solutions: [
      {
        slug: "whatsapp-business",
        title: "WhatsApp Business",
        description:
          "WhatsApp-based business communication and customer interaction workflows.",
      },
      {
        slug: "whatsapp-automation",
        title: "WhatsApp Automation",
        description:
          "Automated WhatsApp workflows for enquiries, leads, notifications and customer communication.",
      },
      {
        slug: "sms-dlt",
        title: "SMS & DLT",
        description:
          "SMS and DLT communication platforms for structured business messaging.",
      },
      {
        slug: "customer-communication",
        title: "Customer Communication",
        description:
          "Digital communication workflows for customer enquiries, notifications and business interactions.",
      },
    ],
  },

  {
    slug: "office-technology",
    title: "Office Technology Solutions",
    description:
      "Office technology solutions covering infrastructure, devices, networking, software, biometrics and IT support.",
    capabilities: [
      "Office setup",
      "Computer systems",
      "Networking",
      "Printers",
      "Business devices",
      "Software setup",
      "Cloud setup",
      "Biometric attendance",
      "IT support",
      "Technology consulting",
    ],
    solutions: [
      {
        slug: "office-setup",
        title: "Office Setup",
        description:
          "Technology setup for organizations establishing or improving their office infrastructure.",
      },
      {
        slug: "networking",
        title: "Networking",
        description:
          "Network setup and related technology infrastructure for business environments.",
      },
      {
        slug: "biometric-attendance",
        title: "Biometric Attendance",
        description:
          "Biometric attendance and related employee attendance workflows.",
      },
      {
        slug: "cloud-office",
        title: "Cloud Office",
        description:
          "Cloud setup and business technology configuration for office environments.",
      },
      {
        slug: "it-support",
        title: "IT Support",
        description:
          "Technology support and consulting for office systems and business technology requirements.",
      },
    ],
  },
];

export function getSolutionCategoryBySlug(
  slug: string
): SolutionCategory | undefined {
  return solutionCategories.find(
    (category) => category.slug === slug
  );
}

export function getSolutionBySlug(
  slug: string
): SolutionItem | undefined {
  for (const category of solutionCategories) {
    const solution = category.solutions.find(
      (item) => item.slug === slug
    );

    if (solution) return solution;
  }

  return undefined;
}