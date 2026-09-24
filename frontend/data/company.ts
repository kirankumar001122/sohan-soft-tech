export interface CompanyValue {
  title: string;
  description: string;
}

export interface CompanyCapability {
  title: string;
  description: string;
}

export interface CompanyApproach {
  title: string;
  description: string;
}

export const companyData = {
  name: "Sohan Soft Tech",

  tagline: "Build. Automate. Operate. Grow.",

  introduction:
    "Sohan Soft Tech is positioned as a technology partner for businesses looking to build, automate and improve their digital and technology operations.",

  mission:
    "To help businesses use technology, automation and digital solutions to create more connected and efficient ways of working.",

  vision:
    "To build long-term technology partnerships that help organizations adapt, operate and grow through practical digital solutions.",

  values: [
    {
      title: "Business First",
      description:
        "Technology should begin with understanding the business requirement, workflow and intended outcome.",
    },
    {
      title: "Practical Technology",
      description:
        "Solutions should be useful, maintainable and aligned with real operational requirements.",
    },
    {
      title: "Connected Thinking",
      description:
        "Software, automation, communication and digital services can work together as part of a wider technology ecosystem.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "Technology initiatives can evolve over time as business requirements, processes and priorities change.",
    },
  ] satisfies CompanyValue[],

  capabilities: [
    {
      title: "Digital Solutions",
      description:
        "Web, e-commerce, mobile and other digital solutions designed around business requirements.",
    },
    {
      title: "Business Software",
      description:
        "Business systems and software designed to organize operational workflows and information.",
    },
    {
      title: "AI & Automation",
      description:
        "Automation opportunities that connect repetitive workflows, communication and business processes.",
    },
    {
      title: "Communication Technology",
      description:
        "Digital communication solutions including WhatsApp and SMS-based business workflows.",
    },
    {
      title: "Office & IT Technology",
      description:
        "Technology setup, networking, business software and IT-related requirements for organizations.",
    },
    {
      title: "Technical & Creative Services",
      description:
        "Technical documentation, engineering-related services and professional business materials.",
    },
  ] satisfies CompanyCapability[],

  approach: [
    {
      title: "Understand",
      description:
        "Start by understanding the business, its users, existing workflows and technology requirements.",
    },
    {
      title: "Plan",
      description:
        "Translate requirements into a practical technology approach with clearly defined priorities.",
    },
    {
      title: "Build",
      description:
        "Develop the required software, digital systems, automation or technology solution.",
    },
    {
      title: "Connect",
      description:
        "Integrate relevant systems, communication channels and workflows where required.",
    },
    {
      title: "Improve",
      description:
        "Continue refining technology solutions as business requirements evolve.",
    },
  ] satisfies CompanyApproach[],

  technologyAreas: [
    "Web Technologies",
    "Mobile Technologies",
    "Cloud Platforms",
    "Business Software",
    "AI & Automation",
    "APIs & Integrations",
    "Databases",
    "Communication Platforms",
    "Office & IT Infrastructure",
  ],

  industries: [
    "Education",
    "Healthcare",
    "Retail & E-Commerce",
    "Manufacturing",
    "Food & Hospitality",
    "Professional Services",
    "Small & Medium Businesses",
    "Corporate Offices",
  ],

  partnership:
    "Sohan Soft Tech approaches technology as an ongoing business capability rather than a one-time implementation. Solutions can evolve as organizations introduce new workflows, systems and digital requirements.",
};

export type CompanyData = typeof companyData;