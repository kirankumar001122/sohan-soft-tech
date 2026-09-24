export interface IndustryItem {
  slug: string;
  title: string;
  description: string;
}

export interface IndustryDetail {
  slug: string;
  title: string;
  shortDescription: string;

  challenges: string[];

  solutions: IndustryItem[];

  relevantServices: string[];

  relevantProducts: string[];

  automationOpportunities: string[];

  technology: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industries: IndustryDetail[] = [
  {
    slug: "education",
    title: "Education",
    shortDescription:
      "Technology solutions for schools, colleges, PU colleges, coaching institutes and educational organizations.",

    challenges: [
      "Managing student information",
      "Attendance and fee workflows",
      "Parent communication",
      "Digital learning requirements",
      "Institutional administration",
      "Communication and notifications",
    ],

    solutions: [
      {
        slug: "education-erp",
        title: "Education ERP",
        description:
          "Institutional management solutions for academic and administrative workflows.",
      },
      {
        slug: "learning-management",
        title: "Learning Management",
        description:
          "Digital learning systems for managing learning-related workflows and content.",
      },
      {
        slug: "student-management",
        title: "Student Management",
        description:
          "Technology for managing student information and institutional processes.",
      },
      {
        slug: "education-communication",
        title: "Education Communication",
        description:
          "SMS, WhatsApp and parent communication workflows for educational organizations.",
      },
    ],

    relevantServices: [
      "Web Development",
      "Mobile App Development",
      "Business Software",
      "AI & Automation",
      "WhatsApp Automation",
      "Digital Marketing",
    ],

    relevantProducts: [
      "Education ERP",
      "LMS",
      "Attendance System",
      "SMS/DLT Platform",
      "WhatsApp Automation Platform",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Student communication",
      "Parent notifications",
      "Attendance workflows",
      "Fee-related workflows",
      "Enquiry management",
      "SMS automation",
      "WhatsApp automation",
    ],

    technology: [
      "Education ERP",
      "Learning management systems",
      "Web applications",
      "Mobile applications",
      "Cloud platforms",
      "Communication APIs",
      "Automation systems",
    ],

    faqs: [
      {
        question: "What type of education organizations can use these solutions?",
        answer:
          "The project scope includes schools, colleges, PU colleges, coaching institutes and educational organizations.",
      },
      {
        question: "Can education systems include communication features?",
        answer:
          "Yes. The scope includes SMS, WhatsApp automation and parent communication along with education management systems.",
      },
    ],
  },

  {
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "Digital and technology solutions for clinics, hospitals, diagnostic centres, healthcare businesses and service providers.",

    challenges: [
      "Managing digital presence",
      "Customer and patient communication",
      "Business workflow management",
      "Online enquiries",
      "Digital visibility",
      "Operational technology requirements",
    ],

    solutions: [
      {
        slug: "healthcare-websites",
        title: "Healthcare Websites",
        description:
          "Professional websites designed around healthcare organizations and their digital information requirements.",
      },
      {
        slug: "healthcare-communication",
        title: "Healthcare Communication",
        description:
          "Digital communication workflows for enquiries, notifications and customer interactions.",
      },
      {
        slug: "healthcare-automation",
        title: "Healthcare Automation",
        description:
          "Automation opportunities for repetitive communication and business workflows.",
      },
    ],

    relevantServices: [
      "Web Development",
      "Mobile App Development",
      "AI & Automation",
      "WhatsApp Automation",
      "Digital Marketing",
      "Business Software",
    ],

    relevantProducts: [
      "Custom Business Software",
      "WhatsApp Automation Platform",
      "Business Management Software",
      "Attendance System",
    ],

    automationOpportunities: [
      "Enquiry collection",
      "Customer communication",
      "Notifications",
      "Lead collection",
      "Follow-up workflows",
      "Reporting workflows",
    ],

    technology: [
      "Web applications",
      "Mobile applications",
      "Cloud platforms",
      "Business software",
      "Communication APIs",
      "Automation systems",
    ],

    faqs: [
      {
        question: "Can healthcare businesses get customized technology solutions?",
        answer:
          "Technology solutions can be structured around the organization's digital, communication and operational requirements.",
      },
      {
        question: "Can healthcare websites support enquiry workflows?",
        answer:
          "Websites can be designed with enquiry and communication functionality according to the required business workflow.",
      },
    ],
  },

  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    shortDescription:
      "Technology solutions for retailers, online stores, distributors and product-based businesses.",

    challenges: [
      "Product presentation",
      "Online selling",
      "Billing and POS",
      "Inventory management",
      "Customer communication",
      "Digital marketing",
      "Business visibility",
    ],

    solutions: [
      {
        slug: "online-commerce",
        title: "Online Commerce",
        description:
          "E-commerce experiences for businesses selling products through digital channels.",
      },
      {
        slug: "retail-management",
        title: "Retail Management",
        description:
          "Business systems supporting billing, POS, inventory and retail workflows.",
      },
      {
        slug: "digital-retail",
        title: "Digital Retail",
        description:
          "Connected digital services supporting online presence, communication and customer engagement.",
      },
    ],

    relevantServices: [
      "Web Development",
      "E-Commerce",
      "Business Software",
      "Digital Marketing",
      "WhatsApp Automation",
      "Google Business Profile",
      "Creative Design",
    ],

    relevantProducts: [
      "Billing Software",
      "POS Software",
      "Inventory Systems",
      "WhatsApp Automation Platform",
      "Business Management Software",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Lead collection",
      "Customer enquiries",
      "Order communication",
      "Inventory workflows",
      "Reporting",
      "WhatsApp communication",
      "Business notifications",
    ],

    technology: [
      "E-commerce platforms",
      "POS systems",
      "Billing systems",
      "Inventory systems",
      "Web applications",
      "Payment integrations",
      "Communication APIs",
    ],

    faqs: [
      {
        question: "Can retail businesses have both online and offline systems?",
        answer:
          "The project scope includes e-commerce, billing, POS and inventory-related solutions that can address different retail requirements.",
      },
      {
        question: "Can customer communication be automated?",
        answer:
          "Yes. WhatsApp automation, lead automation and communication workflows are included within the broader service scope.",
      },
    ],
  },

  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Technology, software, automation, engineering and documentation solutions for manufacturers, engineering businesses and machine/product companies.",

    challenges: [
      "Business process management",
      "Product and machine information",
      "Technical documentation",
      "Warranty management",
      "Digital communication",
      "Business software",
      "Technical visualization",
    ],

    solutions: [
      {
        slug: "manufacturing-software",
        title: "Manufacturing Software",
        description:
          "Business systems designed around manufacturing and operational workflows.",
      },
      {
        slug: "warranty-management",
        title: "Warranty Management",
        description:
          "Digital workflows for warranty registration, claims, validation and tracking.",
      },
      {
        slug: "technical-documentation",
        title: "Technical Documentation",
        description:
          "Technical documentation, machine manuals, installation and maintenance information.",
      },
      {
        slug: "engineering-visualization",
        title: "Engineering Visualization",
        description:
          "Technical drawings, 3D machine modelling, visualization and technical animation.",
      },
    ],

    relevantServices: [
      "Business Software",
      "AI & Automation",
      "Technical Services",
      "Technical Documentation",
      "Warranty System",
      "Web Development",
      "Professional Sales Material",
    ],

    relevantProducts: [
      "Business Management Software",
      "Warranty Management System",
      "Billing Software",
      "Inventory Systems",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Business workflows",
      "Warranty registration",
      "Warranty claims",
      "Customer notifications",
      "Reporting",
      "Data synchronization",
      "Document workflows",
    ],

    technology: [
      "Business software",
      "ERP systems",
      "Inventory systems",
      "Web applications",
      "Cloud platforms",
      "Automation systems",
      "Technical documentation systems",
    ],

    faqs: [
      {
        question: "Can manufacturing businesses get technical services as well as software?",
        answer:
          "Yes. The project scope includes business software, technical and engineering services, technical documentation and warranty system design.",
      },
      {
        question: "Can warranty workflows be digitized?",
        answer:
          "The warranty system scope includes registration, claim processing, claim validation, tracking, status management and warranty history.",
      },
    ],
  },

  {
    slug: "food-hospitality",
    title: "Food & Hospitality",
    shortDescription:
      "Digital, business software, communication and technology solutions for restaurants, cafes, food businesses and hospitality companies.",

    challenges: [
      "Customer communication",
      "Online presence",
      "Digital visibility",
      "Billing and POS",
      "Business workflows",
      "Customer enquiries",
      "Promotional communication",
    ],

    solutions: [
      {
        slug: "hospitality-digital-presence",
        title: "Digital Presence",
        description:
          "Professional digital platforms for restaurants, cafes and hospitality businesses.",
      },
      {
        slug: "restaurant-business-systems",
        title: "Business Systems",
        description:
          "Billing, POS and business management technology for food and hospitality operations.",
      },
      {
        slug: "hospitality-communication",
        title: "Customer Communication",
        description:
          "Digital communication workflows for enquiries, notifications and customer interactions.",
      },
    ],

    relevantServices: [
      "Web Development",
      "Business Software",
      "Digital Marketing",
      "Google Business Profile",
      "WhatsApp Automation",
      "Creative Design",
      "E-Commerce",
    ],

    relevantProducts: [
      "Billing Software",
      "POS Software",
      "Business Management Software",
      "WhatsApp Automation Platform",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Customer enquiries",
      "Notifications",
      "Lead collection",
      "Promotional communication",
      "Reporting",
      "WhatsApp workflows",
    ],

    technology: [
      "Web applications",
      "POS systems",
      "Billing systems",
      "Business software",
      "Cloud platforms",
      "Communication APIs",
    ],

    faqs: [
      {
        question: "Can restaurants and cafes get complete digital solutions?",
        answer:
          "The service scope covers websites, digital marketing, Google Business Profile, billing, POS, business software and communication solutions.",
      },
      {
        question: "Can customer communication be automated?",
        answer:
          "WhatsApp automation and other communication workflows can be considered based on the business requirement.",
      },
    ],
  },

  {
    slug: "professional-services",
    title: "Professional Services",
    shortDescription:
      "Technology and digital solutions for consultants, agencies, professional firms and service businesses.",

    challenges: [
      "Professional digital presence",
      "Lead generation",
      "Customer enquiries",
      "Business workflow management",
      "Digital communication",
      "Online visibility",
      "Internal business systems",
    ],

    solutions: [
      {
        slug: "professional-digital-presence",
        title: "Digital Presence",
        description:
          "Professional websites and digital platforms for service-oriented organizations.",
      },
      {
        slug: "lead-management",
        title: "Lead Management",
        description:
          "Structured workflows for collecting and managing business enquiries and leads.",
      },
      {
        slug: "business-workflow",
        title: "Business Workflow",
        description:
          "Technology systems designed around internal operational and service workflows.",
      },
    ],

    relevantServices: [
      "Web Development",
      "Digital Marketing",
      "Business Software",
      "AI & Automation",
      "WhatsApp Automation",
      "Google Business Profile",
      "Professional Sales Material",
    ],

    relevantProducts: [
      "Business Management Software",
      "Billing Software",
      "WhatsApp Automation Platform",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Lead collection",
      "Enquiry management",
      "Email automation",
      "WhatsApp automation",
      "Reporting",
      "Customer communication",
      "Data synchronization",
    ],

    technology: [
      "Web applications",
      "CRM-related workflows",
      "Cloud platforms",
      "Business software",
      "Communication APIs",
      "Automation systems",
    ],

    faqs: [
      {
        question: "Can professional firms get customized business systems?",
        answer:
          "Yes. Custom business management software can be structured around the organization's specific workflow and requirements.",
      },
      {
        question: "Can lead generation and communication be connected?",
        answer:
          "Lead automation, form automation, email automation and WhatsApp automation are included within the project service scope.",
      },
    ],
  },

  {
    slug: "smb",
    title: "Small & Medium Businesses",
    shortDescription:
      "Practical technology solutions for small and medium-sized businesses looking to build, automate, operate and grow.",

    challenges: [
      "Establishing a digital presence",
      "Business software requirements",
      "Manual workflows",
      "Customer communication",
      "Office technology",
      "Digital marketing",
      "Business process improvement",
    ],

    solutions: [
      {
        slug: "smb-digital-foundation",
        title: "Digital Foundation",
        description:
          "Websites, digital presence and core technology systems for growing businesses.",
      },
      {
        slug: "smb-automation",
        title: "Business Automation",
        description:
          "Automation of repetitive workflows, communication and business processes.",
      },
      {
        slug: "smb-business-systems",
        title: "Business Systems",
        description:
          "Business software for billing, accounting, inventory and operational workflows.",
      },
      {
        slug: "smb-office-technology",
        title: "Office Technology",
        description:
          "Office setup, networking, software, devices, cloud and IT support.",
      },
    ],

    relevantServices: [
      "Web Development",
      "Business Software",
      "AI & Automation",
      "WhatsApp Automation",
      "Digital Marketing",
      "Office & IT Setup",
      "Google Business Profile",
    ],

    relevantProducts: [
      "Billing Software",
      "POS Software",
      "Business Management Software",
      "Attendance System",
      "WhatsApp Automation Platform",
      "Custom Business Software",
    ],

    automationOpportunities: [
      "Lead collection",
      "Enquiry automation",
      "Email automation",
      "WhatsApp automation",
      "Reporting",
      "Data synchronization",
      "Business workflows",
    ],

    technology: [
      "Web applications",
      "Business software",
      "Cloud platforms",
      "Automation systems",
      "Communication platforms",
      "Office IT infrastructure",
    ],

    faqs: [
      {
        question: "Can small businesses start with only the technology they currently need?",
        answer:
          "Yes. Solutions can be structured around the organization's current requirements and expanded as its technology needs evolve.",
      },
      {
        question: "Can technology and digital marketing be handled together?",
        answer:
          "The project scope includes web development, digital marketing, Google Business Profile, automation and business technology services.",
      },
    ],
  },

  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    shortDescription:
      "Office technology, infrastructure, business software, automation, biometrics and IT solutions for organizations.",

    challenges: [
      "Office infrastructure",
      "Employee attendance",
      "Networking",
      "Business software",
      "Cloud systems",
      "IT support",
      "Business automation",
      "Technology management",
    ],

    solutions: [
      {
        slug: "office-technology",
        title: "Office Technology",
        description:
          "Technology setup covering computers, networking, software, devices and office infrastructure.",
      },
      {
        slug: "employee-attendance",
        title: "Employee Attendance",
        description:
          "Biometric and digital attendance workflows for organizational requirements.",
      },
      {
        slug: "corporate-automation",
        title: "Corporate Automation",
        description:
          "Automation solutions for repetitive business workflows and communication.",
      },
      {
        slug: "corporate-it",
        title: "Corporate IT",
        description:
          "IT support, cloud setup, business software configuration and technology consulting.",
      },
    ],

    relevantServices: [
      "Office & IT Setup",
      "Business Software",
      "Business IT Solutions",
      "AI & Automation",
      "Web Development",
      "WhatsApp Automation",
      "Technology Consulting",
    ],

    relevantProducts: [
      "Attendance System",
      "Business Management Software",
      "Billing Software",
      "ERP",
      "Custom Business Software",
      "WhatsApp Automation Platform",
    ],

    automationOpportunities: [
      "Employee attendance",
      "Business workflows",
      "Reporting",
      "Communication",
      "Data synchronization",
      "Notifications",
      "Internal process automation",
    ],

    technology: [
      "Office networking",
      "Cloud platforms",
      "Business software",
      "Biometric systems",
      "Web applications",
      "Automation systems",
      "Communication APIs",
    ],

    faqs: [
      {
        question: "What office technology requirements can be supported?",
        answer:
          "The project scope includes computers, networking, printers, business devices, software setup, cloud setup, biometrics, IT support and technology consulting.",
      },
      {
        question: "Can employee attendance be integrated into business systems?",
        answer:
          "Biometric attendance and employee attendance management are included within the office and IT service scope.",
      },
    ],
  },
];

export function getIndustryBySlug(
  slug: string
): IndustryDetail | undefined {
  return industries.find((industry) => industry.slug === slug);
}