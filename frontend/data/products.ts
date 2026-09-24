export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  workflow: string[];
  benefits: string[];
  industries: string[];
  integrations: string[];
  security: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const products: Product[] = [
  {
    slug: "billing-software",
    title: "Billing Software",
    shortDescription:
      "Business billing software designed to simplify billing operations, records and day-to-day business workflows.",
    problem:
      "Businesses often need a structured way to manage billing, maintain transaction records and reduce repetitive manual work.",
    solution:
      "A configurable billing system can bring billing workflows, records and business operations into one organized platform.",
    features: [
      "Billing and invoice management",
      "Customer record management",
      "Product and service management",
      "Transaction records",
      "Business reporting",
      "Configurable business workflows",
    ],
    workflow: [
      "Configure business information",
      "Set up products and services",
      "Create billing records",
      "Maintain customer and transaction data",
      "Review business reports",
    ],
    benefits: [
      "Organized billing workflows",
      "Centralized business records",
      "Reduced repetitive manual work",
      "Better visibility into transactions",
    ],
    industries: [
      "Retail",
      "Professional Services",
      "Small & Medium Businesses",
      "Corporate Offices",
    ],
    integrations: [
      "Business software integrations",
      "Database systems",
      "Custom API integrations",
    ],
    security: [
      "Controlled access",
      "Structured data management",
      "Secure application architecture",
    ],
    faqs: [
      {
        question: "Can the billing workflow be customized?",
        answer:
          "The system can be designed around the business workflow and requirements.",
      },
      {
        question: "Can billing software connect with other systems?",
        answer:
          "Custom integrations can be planned based on the required business systems and APIs.",
      },
    ],
  },

  {
    slug: "pos-software",
    title: "POS Software",
    shortDescription:
      "Point-of-sale software for managing sales transactions and connected business workflows.",
    problem:
      "Businesses need reliable tools to manage sales transactions, product information and operational records efficiently.",
    solution:
      "A POS system provides a structured environment for managing sales activity and related business information.",
    features: [
      "Point-of-sale operations",
      "Product management",
      "Sales transaction records",
      "Customer management",
      "Inventory-related workflows",
      "Business reporting",
    ],
    workflow: [
      "Configure products",
      "Set up business information",
      "Process sales",
      "Maintain transaction records",
      "Review operational information",
    ],
    benefits: [
      "Structured sales operations",
      "Centralized transaction records",
      "Improved operational visibility",
      "Reduced manual processes",
    ],
    industries: [
      "Retail",
      "Food & Hospitality",
      "Small & Medium Businesses",
      "E-Commerce",
    ],
    integrations: [
      "Inventory systems",
      "Billing systems",
      "Custom APIs",
    ],
    security: [
      "Controlled system access",
      "Structured data storage",
      "Secure application architecture",
    ],
    faqs: [
      {
        question: "Can POS workflows be customized?",
        answer:
          "Yes. POS workflows can be planned according to the operational requirements of the business.",
      },
      {
        question: "Can POS connect with inventory systems?",
        answer:
          "Integration with inventory or other business systems can be developed according to requirements.",
      },
    ],
  },

  {
    slug: "attendance-system",
    title: "Attendance System",
    shortDescription:
      "Attendance management software for organizations that need structured employee or student attendance workflows.",
    problem:
      "Manual attendance processes can make it difficult to maintain consistent records and manage attendance information efficiently.",
    solution:
      "An attendance management system centralizes attendance workflows and provides structured records for organizations.",
    features: [
      "Attendance management",
      "User management",
      "Attendance records",
      "Reporting workflows",
      "Biometric integration possibilities",
      "Administrative controls",
    ],
    workflow: [
      "Register users",
      "Configure attendance rules",
      "Capture attendance",
      "Maintain attendance records",
      "Generate reports",
    ],
    benefits: [
      "Centralized attendance records",
      "Structured attendance workflows",
      "Reduced manual record keeping",
      "Improved administrative visibility",
    ],
    industries: [
      "Education",
      "Corporate Offices",
      "Small & Medium Businesses",
      "Professional Services",
    ],
    integrations: [
      "Biometric devices",
      "Business software",
      "Custom APIs",
    ],
    security: [
      "Controlled user access",
      "Role-based administration",
      "Structured data management",
    ],
    faqs: [
      {
        question: "Can the system support biometric attendance?",
        answer:
          "Biometric integration can be considered based on the devices and workflow requirements.",
      },
      {
        question: "Can attendance reports be generated?",
        answer:
          "Reporting workflows can be included based on the organization's requirements.",
      },
    ],
  },

  {
    slug: "education-erp",
    title: "Education ERP",
    shortDescription:
      "Education management software designed to connect academic, administrative and communication workflows.",
    problem:
      "Educational institutions often manage multiple academic and administrative processes across separate systems.",
    solution:
      "An education ERP can bring relevant institutional workflows into a structured digital environment.",
    features: [
      "Student management",
      "Academic management",
      "Attendance workflows",
      "Administrative workflows",
      "Communication workflows",
      "Reporting",
    ],
    workflow: [
      "Configure institution",
      "Set up users and roles",
      "Manage student information",
      "Run academic workflows",
      "Manage communication",
      "Review reports",
    ],
    benefits: [
      "Centralized institutional information",
      "Connected academic workflows",
      "Structured administration",
      "Improved information accessibility",
    ],
    industries: [
      "Schools",
      "Colleges",
      "Training Institutions",
      "Education Organizations",
    ],
    integrations: [
      "Learning management systems",
      "Communication platforms",
      "SMS/DLT services",
      "Custom APIs",
    ],
    security: [
      "Role-based access",
      "Controlled administrative access",
      "Structured information management",
    ],
    faqs: [
      {
        question: "Can education workflows be customized?",
        answer:
          "Yes. Education workflows can be designed according to the institution's operational requirements.",
      },
      {
        question: "Can communication systems be integrated?",
        answer:
          "Communication integrations can be planned based on the required platform and API availability.",
      },
    ],
  },

  {
    slug: "learning-management",
    title: "Learning Management System",
    shortDescription:
      "Learning management software for organizing digital learning, courses, users and educational workflows.",
    problem:
      "Organizations need structured platforms to manage learning content, users and digital education workflows.",
    solution:
      "A learning management system provides a centralized environment for managing digital learning activities.",
    features: [
      "Course management",
      "Learner management",
      "Content organization",
      "Learning workflows",
      "Progress tracking",
      "Administrative controls",
    ],
    workflow: [
      "Create learning structure",
      "Add courses and content",
      "Register learners",
      "Manage learning activities",
      "Track progress",
      "Review reports",
    ],
    benefits: [
      "Centralized learning management",
      "Organized educational content",
      "Structured learner workflows",
      "Improved administration",
    ],
    industries: [
      "Education",
      "Training Institutions",
      "Corporate Training",
      "Professional Learning",
    ],
    integrations: [
      "Education ERP",
      "Communication platforms",
      "Authentication systems",
      "Custom APIs",
    ],
    security: [
      "User access controls",
      "Role-based administration",
      "Structured content management",
    ],
    faqs: [
      {
        question: "Can the LMS support custom learning workflows?",
        answer:
          "Learning workflows can be designed around the organization's educational requirements.",
      },
      {
        question: "Can an LMS connect with an education ERP?",
        answer:
          "Custom integration can be planned where the required systems provide suitable integration capabilities.",
      },
    ],
  },

  {
    slug: "sms-dlt-platform",
    title: "SMS / DLT Platform",
    shortDescription:
      "Communication infrastructure for structured SMS-based business and organizational communication workflows.",
    problem:
      "Organizations may need a centralized way to manage communication workflows and connect SMS communication with business processes.",
    solution:
      "An SMS/DLT platform can provide a structured communication layer for supported business workflows.",
    features: [
      "SMS communication workflows",
      "Template management",
      "Communication records",
      "Business notifications",
      "API integration",
      "Reporting workflows",
    ],
    workflow: [
      "Configure communication requirements",
      "Set up templates",
      "Connect required systems",
      "Trigger communication",
      "Maintain communication records",
      "Review reports",
    ],
    benefits: [
      "Structured communication workflows",
      "Centralized messaging operations",
      "Business system integration",
      "Improved communication management",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Retail",
      "Professional Services",
      "Corporate Offices",
    ],
    integrations: [
      "Business software",
      "Education systems",
      "CRM systems",
      "Custom APIs",
    ],
    security: [
      "Controlled API access",
      "Structured communication records",
      "Secure application architecture",
    ],
    faqs: [
      {
        question: "Can the platform connect with business software?",
        answer:
          "API-based integration can be considered depending on the systems involved.",
      },
      {
        question: "Can communication workflows be automated?",
        answer:
          "Automated communication workflows can be designed around supported business events and requirements.",
      },
    ],
  },

  {
    slug: "whatsapp-automation-platform",
    title: "WhatsApp Automation Platform",
    shortDescription:
      "WhatsApp-based automation for customer communication, notifications and business workflows.",
    problem:
      "Businesses often need faster and more structured ways to communicate with customers and automate repetitive communication tasks.",
    solution:
      "A WhatsApp automation platform can connect business workflows with supported WhatsApp communication processes.",
    features: [
      "WhatsApp communication workflows",
      "Automated notifications",
      "Message templates",
      "Lead communication",
      "Customer communication",
      "API integrations",
    ],
    workflow: [
      "Define communication workflow",
      "Configure templates",
      "Connect business systems",
      "Trigger communication",
      "Track communication activity",
    ],
    benefits: [
      "Structured customer communication",
      "Reduced repetitive messaging",
      "Connected business workflows",
      "Faster communication processes",
    ],
    industries: [
      "Retail",
      "Education",
      "Healthcare",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    integrations: [
      "CRM systems",
      "Lead management systems",
      "Business software",
      "Custom APIs",
    ],
    security: [
      "Controlled API access",
      "Secure credential handling",
      "Structured communication records",
    ],
    faqs: [
      {
        question: "Can WhatsApp workflows be connected to business software?",
        answer:
          "Custom API integrations can be planned based on the business system and supported communication APIs.",
      },
      {
        question: "Can customer communication be automated?",
        answer:
          "Supported communication workflows can be automated according to defined business requirements.",
      },
    ],
  },

  {
    slug: "business-management-software",
    title: "Business Management Software",
    shortDescription:
      "Custom business management software for connecting operational workflows, records and business processes.",
    problem:
      "Businesses often rely on disconnected tools for managing different operational processes.",
    solution:
      "Business management software can bring relevant workflows into a structured and connected system.",
    features: [
      "Business workflow management",
      "Customer management",
      "Product and service management",
      "Reporting",
      "User management",
      "Custom modules",
    ],
    workflow: [
      "Understand business processes",
      "Design system workflows",
      "Configure modules",
      "Connect required data",
      "Deploy the system",
      "Improve workflows over time",
    ],
    benefits: [
      "Connected business processes",
      "Centralized information",
      "Reduced operational complexity",
      "Flexible system architecture",
    ],
    industries: [
      "Retail",
      "Manufacturing",
      "Professional Services",
      "Small & Medium Businesses",
      "Corporate Offices",
    ],
    integrations: [
      "Accounting systems",
      "CRM systems",
      "Communication platforms",
      "Custom APIs",
    ],
    security: [
      "Role-based access",
      "Controlled administrative permissions",
      "Secure application architecture",
    ],
    faqs: [
      {
        question: "Can the software be customized for a specific business?",
        answer:
          "Yes. The system architecture can be planned around the business's workflows and requirements.",
      },
      {
        question: "Can existing systems be integrated?",
        answer:
          "Integration can be developed where the required systems provide suitable APIs or integration mechanisms.",
      },
    ],
  },

  {
    slug: "warranty-management-system",
    title: "Warranty Management System",
    shortDescription:
      "Warranty management software for organizing registrations, claims, validation and warranty-related workflows.",
    problem:
      "Warranty operations can involve multiple records, customer interactions and validation steps that are difficult to manage manually.",
    solution:
      "A warranty management system can centralize warranty records and organize registration and claim workflows.",
    features: [
      "Warranty registration",
      "Warranty claim processing",
      "Claim validation",
      "Warranty tracking",
      "Customer records",
      "Reporting",
    ],
    workflow: [
      "Register products or warranties",
      "Capture customer information",
      "Receive warranty claims",
      "Validate claim information",
      "Process the claim",
      "Maintain warranty history",
    ],
    benefits: [
      "Centralized warranty records",
      "Structured claim workflows",
      "Improved record visibility",
      "Reduced manual administration",
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "Consumer Products",
      "Equipment Businesses",
    ],
    integrations: [
      "Business management systems",
      "CRM systems",
      "Communication platforms",
      "Custom APIs",
    ],
    security: [
      "Controlled access",
      "Structured customer records",
      "Secure application architecture",
    ],
    faqs: [
      {
        question: "Can warranty registration be automated?",
        answer:
          "Registration workflows can be connected with supported business systems and communication processes.",
      },
      {
        question: "Can warranty claims be tracked?",
        answer:
          "Yes. Claim tracking can be included as part of the warranty management workflow.",
      },
    ],
  },

  {
    slug: "custom-business-software",
    title: "Custom Business Software",
    shortDescription:
      "Purpose-built business software designed around specific operational requirements and workflows.",
    problem:
      "Standard software may not always match the exact processes, data requirements and workflows of a business.",
    solution:
      "Custom software development allows business workflows and system capabilities to be designed around specific requirements.",
    features: [
      "Custom workflow development",
      "Business dashboards",
      "User and role management",
      "Database-driven applications",
      "API integrations",
      "Reporting systems",
    ],
    workflow: [
      "Understand business requirements",
      "Map workflows",
      "Design the solution",
      "Develop the application",
      "Test the system",
      "Deploy and support",
    ],
    benefits: [
      "Business-specific workflows",
      "Flexible system architecture",
      "Connected operations",
      "Scalable digital foundation",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Professional Services",
      "Corporate Offices",
    ],
    integrations: [
      "REST APIs",
      "Databases",
      "Cloud platforms",
      "Business systems",
      "Communication platforms",
    ],
    security: [
      "Role-based access",
      "Secure authentication",
      "Controlled data access",
      "Structured application architecture",
    ],
    faqs: [
      {
        question: "How does custom software development work?",
        answer:
          "The process starts with understanding business requirements and workflows before designing, developing, testing and deploying the required system.",
      },
      {
        question: "Can custom software integrate with existing systems?",
        answer:
          "Yes. Integration can be planned around the APIs and technical capabilities of existing systems.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  const aliases: Record<string, string> = {
    lms: "learning-management",
  };

  const actualSlug = aliases[slug] ?? slug;

  return products.find((product) => product.slug === actualSlug);
}