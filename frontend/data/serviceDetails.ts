export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  introduction: string;
  capabilities: string[];
  features: string[];
  process: string[];
  technology: string[];
  useCases: string[];
  industries: string[];
  relatedServices: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Professional websites and web applications designed around business requirements, usability and long-term growth.",
    problem:
      "Businesses need a digital presence that communicates their value clearly, supports customers and provides a reliable foundation for future digital initiatives.",
    introduction:
      "Sohan Soft Tech provides web development services ranging from business websites to custom web applications. Solutions can be structured around the organization's content, workflows, users and technology requirements.",
    capabilities: [
      "Custom business websites",
      "Corporate website development",
      "Web application development",
      "Responsive website development",
      "UI/UX implementation",
      "Business portal development",
    ],
    features: [
      "Responsive layouts",
      "Business-focused information architecture",
      "Reusable website components",
      "Contact and enquiry integration",
      "SEO-ready page structure",
      "Performance-conscious implementation",
    ],
    process: [
      "Requirement understanding",
      "Information architecture",
      "UI and experience planning",
      "Development",
      "Testing and responsive QA",
      "Deployment and ongoing improvements",
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "Cloud platforms",
    ],
    useCases: [
      "Corporate websites",
      "Business portals",
      "Customer-facing web applications",
      "Service websites",
      "Digital platforms",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Retail & E-commerce",
      "Manufacturing",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "E-Commerce",
      "Mobile App Development",
      "AI & Automation",
      "Digital Marketing",
    ],
    faqs: [
      {
        question: "Can you build a website around our existing business workflow?",
        answer:
          "Yes. The website structure can be planned around the organization's services, users, workflows and business requirements.",
      },
      {
        question: "Can the website be expanded later?",
        answer:
          "Yes. The architecture can be planned so additional pages, integrations and business functionality can be added as requirements evolve.",
      },
    ],
  },

  {
    slug: "ecommerce",
    title: "E-Commerce",
    shortDescription:
      "E-commerce websites and digital commerce experiences for businesses selling products online.",
    problem:
      "Product businesses need an online commerce experience that presents products clearly and supports customers throughout the buying journey.",
    introduction:
      "E-commerce solutions can include online storefronts, product catalogues, commerce workflows and integrations required for digital selling.",
    capabilities: [
      "Online store development",
      "Product catalogue implementation",
      "Commerce workflow development",
      "Customer account functionality",
      "Payment integration",
      "Order management integration",
    ],
    features: [
      "Product presentation",
      "Category navigation",
      "Shopping workflows",
      "Responsive commerce interface",
      "Order-related functionality",
      "Integration-ready architecture",
    ],
    process: [
      "Business and product requirement analysis",
      "Commerce structure planning",
      "UI/UX design",
      "Development and integration",
      "Testing",
      "Launch and optimization",
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "REST APIs",
      "Payment APIs",
      "Cloud services",
    ],
    useCases: [
      "Online product stores",
      "Retail businesses",
      "Product companies",
      "Distributor websites",
      "Direct-to-customer commerce",
    ],
    industries: [
      "Retail & E-commerce",
      "Manufacturing",
      "Food & Hospitality",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Web Development",
      "Digital Marketing",
      "Social Media Branding",
      "Business Software",
    ],
    faqs: [
      {
        question: "Can an existing business website be converted into an e-commerce website?",
        answer:
          "Yes. The existing website structure can be assessed and commerce functionality can be planned around the business requirements.",
      },
      {
        question: "Can payment systems be integrated?",
        answer:
          "Payment integrations can be included where required, subject to the selected payment provider and its technical requirements.",
      },
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Mobile applications designed around customer, employee and business workflows.",
    problem:
      "Businesses may need mobile experiences that make their services, workflows and customer interactions accessible beyond a traditional website.",
    introduction:
      "Mobile application development covers applications designed for Android, iOS and cross-platform requirements.",
    capabilities: [
      "Android application development",
      "iOS application development",
      "Cross-platform applications",
      "Business applications",
      "Customer applications",
      "API-connected mobile applications",
    ],
    features: [
      "Mobile-first user experiences",
      "API integration",
      "Authentication",
      "Business workflow integration",
      "Notification support",
      "Responsive application interfaces",
    ],
    process: [
      "Requirement analysis",
      "Application architecture",
      "UI/UX planning",
      "Development",
      "Testing",
      "Deployment preparation",
    ],
    technology: [
      "React Native",
      "Flutter",
      "React",
      "TypeScript",
      "REST APIs",
      "Cloud services",
    ],
    useCases: [
      "Customer applications",
      "Employee applications",
      "Education applications",
      "Business workflow applications",
      "Service applications",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Retail & E-commerce",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Web Development",
      "Business Software",
      "AI & Automation",
      "Cloud Solutions",
    ],
    faqs: [
      {
        question: "Can the mobile app connect to an existing website or software system?",
        answer:
          "Yes. Mobile applications can be designed to communicate with existing backend systems through suitable APIs.",
      },
      {
        question: "Can one application support multiple platforms?",
        answer:
          "Cross-platform development can be considered when the project requirements are suitable for that approach.",
      },
    ],
  },

  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "AI-powered tools, integrations and business automation designed around repetitive workflows and communication.",
    problem:
      "Businesses often manage repetitive communication, data movement and operational workflows manually, creating opportunities for structured automation.",
    introduction:
      "AI and automation services focus on connecting business workflows with AI capabilities, APIs, communication platforms and automated processes.",
    capabilities: [
      "AI automation tools",
      "AI productivity systems",
      "Custom AI integrations",
      "Business workflow automation",
      "Lead automation",
      "Reporting automation",
    ],
    features: [
      "AI-assisted workflows",
      "API integrations",
      "Automated responses",
      "Lead collection",
      "Data synchronization",
      "Workflow triggers",
    ],
    process: [
      "Identify repetitive workflows",
      "Map the existing process",
      "Define automation requirements",
      "Integrate required systems",
      "Test automated workflows",
      "Monitor and improve",
    ],
    technology: [
      "AI APIs",
      "LLM integrations",
      "REST APIs",
      "Webhooks",
      "Cloud platforms",
      "Database systems",
    ],
    useCases: [
      "Lead automation",
      "Enquiry automation",
      "Automated notifications",
      "Data synchronization",
      "Reporting automation",
      "Business workflow automation",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Retail & E-commerce",
      "Manufacturing",
      "Professional Services",
      "Corporate Offices",
    ],
    relatedServices: [
      "WhatsApp Automation",
      "Business Software",
      "Business IT Solutions",
      "Web Development",
    ],
    faqs: [
      {
        question: "What type of business processes can be automated?",
        answer:
          "Processes involving repetitive communication, lead collection, notifications, reporting, data movement and structured workflows can be evaluated for automation.",
      },
      {
        question: "Can AI be integrated with an existing business application?",
        answer:
          "Yes. Where suitable APIs or integration points are available, AI functionality can be connected to existing applications and workflows.",
      },
    ],
  },

  {
    slug: "business-software",
    title: "Business Software",
    shortDescription:
      "Business systems for billing, accounting, POS, inventory, ERP, attendance, education and custom workflows.",
    problem:
      "Organizations often require software that matches their specific operational processes instead of relying only on generic tools.",
    introduction:
      "Business software services cover configurable and custom systems designed around operational requirements, workflows and business data.",
    capabilities: [
      "Accounting system setup",
      "Billing software",
      "POS systems",
      "Inventory systems",
      "ERP systems",
      "Education ERP",
      "LMS",
      "Attendance systems",
      "SMS/DLT platforms",
      "Custom business management software",
    ],
    features: [
      "Business workflow mapping",
      "Role-based access",
      "Data management",
      "Reporting workflows",
      "Business configuration",
      "Integration support",
    ],
    process: [
      "Business requirement analysis",
      "Workflow mapping",
      "System architecture",
      "Development or configuration",
      "Testing and user validation",
      "Deployment and support",
    ],
    technology: [
      "Web applications",
      "REST APIs",
      "SQL databases",
      "Cloud platforms",
      "Authentication systems",
      "Third-party integrations",
    ],
    useCases: [
      "Billing",
      "Accounting",
      "Point of sale",
      "Inventory management",
      "Education management",
      "Employee attendance",
      "Business management",
    ],
    industries: [
      "Education",
      "Retail & E-commerce",
      "Manufacturing",
      "Food & Hospitality",
      "Professional Services",
      "Corporate Offices",
    ],
    relatedServices: [
      "AI & Automation",
      "Office & IT Setup",
      "WhatsApp Automation",
      "Web Development",
    ],
    faqs: [
      {
        question: "Can business software be customized?",
        answer:
          "Yes. Custom business management software can be designed around the client's specific workflow and requirements.",
      },
      {
        question: "Can software integrate with communication systems?",
        answer:
          "Where supported by the required APIs, business systems can be connected with communication and automation platforms.",
      },
    ],
  },

  {
    slug: "office-it-setup",
    title: "Office & IT Setup",
    shortDescription:
      "Office technology, computer systems, networking, software, biometrics, cloud setup and IT support.",
    problem:
      "Organizations need their office technology, devices, networking and business systems to work together as part of a structured IT environment.",
    introduction:
      "Office & IT services cover technology setup and configuration for organizations establishing or improving their office infrastructure.",
    capabilities: [
      "Office technology setup",
      "Computer systems",
      "Networking",
      "Printers and business devices",
      "Software installation",
      "Cloud setup",
      "Biometric attendance",
      "IT support",
      "Technology consulting",
    ],
    features: [
      "Infrastructure planning",
      "Device setup",
      "Network setup",
      "Software configuration",
      "User access configuration",
      "Business system configuration",
    ],
    process: [
      "Understand office requirements",
      "Assess technology requirements",
      "Plan infrastructure",
      "Configure systems and devices",
      "Test connectivity and workflows",
      "Provide support and maintenance",
    ],
    technology: [
      "Computer systems",
      "Networking equipment",
      "Cloud platforms",
      "Business software",
      "Biometric systems",
      "Office devices",
    ],
    useCases: [
      "New office setup",
      "Office technology upgrades",
      "Employee attendance",
      "Business device setup",
      "Network setup",
      "IT maintenance",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Manufacturing",
      "Professional Services",
      "Small & Medium Businesses",
      "Corporate Offices",
    ],
    relatedServices: [
      "Business Software",
      "Business IT Solutions",
      "Cloud Solutions",
      "Technology Consulting",
    ],
    faqs: [
      {
        question: "Can you help with a complete office technology setup?",
        answer:
          "The service scope includes office technology, computer systems, networking, software setup, cloud setup and related business technology requirements.",
      },
      {
        question: "Can biometric attendance be integrated?",
        answer:
          "Biometric attendance and related employee attendance workflows are included within the project service scope.",
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Digital campaigns and online growth activities that support a business's digital presence.",
    problem:
      "Businesses need structured digital communication and online visibility to present their services and products to relevant audiences.",
    introduction:
      "Digital marketing services cover online campaigns, digital presence activities and supporting services such as SEO and social media.",
    capabilities: [
      "Digital marketing",
      "SEO",
      "Social media management",
      "Social media branding",
      "Social media optimization",
      "Digital branding",
    ],
    features: [
      "Digital campaign planning",
      "Search visibility activities",
      "Social media presence",
      "Content structure",
      "Brand consistency",
      "Digital communication",
    ],
    process: [
      "Understand business objectives",
      "Review digital presence",
      "Define activities",
      "Create and publish content",
      "Track relevant activity",
      "Improve based on requirements",
    ],
    technology: [
      "Search platforms",
      "Social platforms",
      "Analytics tools",
      "Content management systems",
      "Advertising platforms",
    ],
    useCases: [
      "Business digital presence",
      "Search visibility",
      "Social media presence",
      "Campaign communication",
      "Brand awareness activities",
    ],
    industries: [
      "Retail & E-commerce",
      "Food & Hospitality",
      "Professional Services",
      "Education",
      "Healthcare",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Web Development",
      "Google Business Profile",
      "Social Media Branding",
      "Creative Design",
    ],
    faqs: [
      {
        question: "Does digital marketing include SEO?",
        answer:
          "SEO is specifically included within the Digital Services scope of the project.",
      },
      {
        question: "Can social media branding be handled along with marketing?",
        answer:
          "Yes. Social media branding and social media optimization are included within the broader digital services scope.",
      },
    ],
  },

  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    shortDescription:
      "Business communication workflows using WhatsApp automation, notifications, enquiries and customer communication.",
    problem:
      "Businesses may need structured communication workflows for enquiries, notifications, leads and customer interactions.",
    introduction:
      "WhatsApp automation services focus on connecting business communication workflows with WhatsApp-based interactions and automation.",
    capabilities: [
      "WhatsApp Business setup",
      "WhatsApp bot setup",
      "Automated customer communication",
      "Lead collection",
      "Enquiry automation",
      "Notifications",
      "Automated responses",
      "WhatsApp API integrations",
    ],
    features: [
      "Automated messages",
      "Lead collection",
      "Enquiry workflows",
      "Notification workflows",
      "API integration",
      "Business communication automation",
    ],
    process: [
      "Understand communication requirements",
      "Map WhatsApp workflows",
      "Define message and trigger structure",
      "Configure integrations",
      "Test communication flows",
      "Deploy and maintain",
    ],
    technology: [
      "WhatsApp Business",
      "WhatsApp APIs",
      "REST APIs",
      "Webhooks",
      "Cloud services",
    ],
    useCases: [
      "Lead collection",
      "Customer enquiries",
      "Automated notifications",
      "Business communication",
      "Follow-up workflows",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Retail & E-commerce",
      "Food & Hospitality",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "AI & Automation",
      "Business Software",
      "Digital Marketing",
      "Web Development",
    ],
    faqs: [
      {
        question: "Can WhatsApp be connected to an existing website?",
        answer:
          "Where the required APIs and integrations are available, WhatsApp workflows can be connected with websites and business systems.",
      },
      {
        question: "Can enquiries be automated?",
        answer:
          "Enquiry automation and lead collection are specifically included within the WhatsApp automation service scope.",
      },
    ],
  },

  {
    slug: "business-it",
    title: "Business IT Solutions",
    shortDescription:
      "Cloud, automation, security and technology consulting aligned with business requirements.",
    problem:
      "Organizations require technology infrastructure and systems that support their operational requirements while remaining adaptable as the business changes.",
    introduction:
      "Business IT Solutions covers cloud-based infrastructure, business automation, security and technology consulting.",
    capabilities: [
      "Cloud solutions",
      "Business automation",
      "Technology security",
      "IT consulting",
      "Cloud-based business systems",
      "Technology planning",
    ],
    features: [
      "Requirement assessment",
      "Cloud planning",
      "Business automation",
      "Security considerations",
      "Technology consulting",
      "Integration planning",
    ],
    process: [
      "Understand business requirements",
      "Assess existing technology",
      "Define solution architecture",
      "Configure or develop systems",
      "Test and validate",
      "Provide ongoing support",
    ],
    technology: [
      "Cloud platforms",
      "Business applications",
      "APIs",
      "Databases",
      "Security systems",
      "Automation platforms",
    ],
    useCases: [
      "Cloud migration",
      "Business automation",
      "Technology planning",
      "Business application setup",
      "IT modernization",
    ],
    industries: [
      "Education",
      "Healthcare",
      "Manufacturing",
      "Professional Services",
      "Corporate Offices",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Office & IT Setup",
      "AI & Automation",
      "Business Software",
      "Web Development",
    ],
    faqs: [
      {
        question: "What does Business IT Solutions cover?",
        answer:
          "The project scope includes cloud solutions, automation, security and IT consulting based on business requirements.",
      },
      {
        question: "Can you work with existing business technology?",
        answer:
          "Technology consulting can be used to assess existing requirements and plan suitable integrations or improvements.",
      },
    ],
  },

  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    shortDescription:
      "Google Business Profile setup and optimization for business information, visibility and local presence.",
    problem:
      "Businesses need their important information to be structured and maintained consistently across their Google Business Profile.",
    introduction:
      "Google Business Profile services cover profile setup, business information configuration, category selection, content and profile optimization.",
    capabilities: [
      "Business profile creation",
      "Business information configuration",
      "Category setup",
      "Keyword integration",
      "Image uploads",
      "Profile optimization",
      "Search visibility setup",
      "Business information management",
    ],
    features: [
      "Business information setup",
      "Category configuration",
      "Image management",
      "Profile optimization",
      "Search visibility preparation",
      "Business information management",
    ],
    process: [
      "Collect business information",
      "Create or configure profile",
      "Set business categories",
      "Configure relevant information",
      "Add images and content",
      "Review and optimize",
    ],
    technology: [
      "Google Business Profile",
      "Google Search",
      "Google Maps",
      "Business information systems",
    ],
    useCases: [
      "Local business presence",
      "Business information management",
      "Search visibility",
      "Google Maps presence",
      "Customer discovery",
    ],
    industries: [
      "Retail & E-commerce",
      "Food & Hospitality",
      "Healthcare",
      "Professional Services",
      "Education",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Digital Marketing",
      "SEO",
      "Social Media Branding",
      "Web Development",
    ],
    faqs: [
      {
        question: "What information can be configured?",
        answer:
          "The service scope includes business information, categories, keywords, images and profile-related information.",
      },
      {
        question: "Is Google Business Profile the same as a website?",
        answer:
          "No. A Google Business Profile supports a business's presence across Google services, while a website provides a broader owned digital platform.",
      },
    ],
  },

  {
    slug: "professional-sales-material",
    title: "Professional Sales Material",
    shortDescription:
      "Professional business and sales materials including catalogues, brochures, profiles, stationery and commercial formats.",
    problem:
      "Businesses need consistent professional materials to present their company, products and commercial information.",
    introduction:
      "Professional Sales Material covers corporate and business materials used for communication, sales and presentation.",
    capabilities: [
      "Product catalogue",
      "Print catalogue",
      "PDF catalogue",
      "Company brochure",
      "Company profile PDF",
      "Visiting cards",
      "Letterhead",
      "Quotation format",
      "Invoice format",
      "Warranty card layout",
    ],
    features: [
      "Consistent business identity",
      "Product presentation",
      "Corporate information",
      "Sales documentation",
      "Digital-ready materials",
      "Print-ready formats",
    ],
    process: [
      "Collect company and product information",
      "Plan material structure",
      "Design the material",
      "Review content",
      "Finalize required formats",
      "Prepare delivery files",
    ],
    technology: [
      "Digital design tools",
      "PDF workflows",
      "Print-ready formats",
      "Digital presentation formats",
    ],
    useCases: [
      "Product catalogues",
      "Company presentations",
      "Sales materials",
      "Business stationery",
      "Commercial documents",
    ],
    industries: [
      "Manufacturing",
      "Retail & E-commerce",
      "Professional Services",
      "Food & Hospitality",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Creative Design",
      "Digital Marketing",
      "Web Development",
      "Google Business Profile",
    ],
    faqs: [
      {
        question: "Can catalogues be prepared for both print and digital use?",
        answer:
          "The project scope includes both print catalogue and PDF catalogue requirements.",
      },
      {
        question: "Can business documents follow the company's branding?",
        answer:
          "Yes. The materials can be structured around the organization's existing brand identity and business information.",
      },
    ],
  },

  {
    slug: "creative-design",
    title: "Creative Design Services",
    shortDescription:
      "Professional creative materials for festivals, social media, campaigns and business communication.",
    problem:
      "Businesses need consistent visual communication across promotional and digital channels.",
    introduction:
      "Creative Design Services cover visual materials required for social media, promotions, campaigns and business communication.",
    capabilities: [
      "Festival creative design",
      "Social media creative design",
      "Promotional creatives",
      "Product creatives",
      "Campaign creatives",
      "Digital advertisements",
      "Basic reels",
    ],
    features: [
      "Brand-aligned visual design",
      "Social media formats",
      "Promotional layouts",
      "Product-focused creatives",
      "Campaign materials",
      "Digital advertising creatives",
    ],
    process: [
      "Understand communication requirement",
      "Collect brand and campaign information",
      "Develop creative concept",
      "Prepare design",
      "Review and refine",
      "Prepare final formats",
    ],
    technology: [
      "Digital design tools",
      "Image editing workflows",
      "Video editing workflows",
      "Social media formats",
    ],
    useCases: [
      "Festival campaigns",
      "Social media posts",
      "Product promotion",
      "Campaign communication",
      "Digital advertisements",
    ],
    industries: [
      "Retail & E-commerce",
      "Food & Hospitality",
      "Education",
      "Manufacturing",
      "Professional Services",
      "Small & Medium Businesses",
    ],
    relatedServices: [
      "Digital Marketing",
      "Professional Sales Material",
      "Social Media Branding",
      "Web Development",
    ],
    faqs: [
      {
        question: "Can creative designs follow an existing brand identity?",
        answer:
          "Yes. The scope specifically describes creative design aligned with the client's brand identity.",
      },
      {
        question: "Are social media creatives included?",
        answer:
          "Yes. Social Media Creative Design is specifically included in the project scope.",
      },
    ],
  },

  {
    slug: "technical-services",
    title: "Technical & Engineering Services",
    shortDescription:
      "Technical drawings, 3D machine modelling, visualization and animated technical content.",
    problem:
      "Engineering and product businesses may need clear technical drawings, models and visual explanations for their products and machinery.",
    introduction:
      "Technical & Engineering Services cover AutoCAD drawings, machine modelling, 3D visualization and animated technical videos.",
    capabilities: [
      "AutoCAD 2D",
      "AutoCAD 3D",
      "2D technical drawings",
      "3D machine modelling",
      "3D visualization",
      "Animated technical videos",
    ],
    features: [
      "Technical drawing preparation",
      "Machine modelling",
      "Product visualization",
      "Technical animations",
      "Engineering-focused visual communication",
    ],
    process: [
      "Understand technical requirements",
      "Review available specifications",
      "Prepare drawings or models",
      "Review technical output",
      "Refine based on requirements",
      "Prepare final deliverables",
    ],
    technology: [
      "AutoCAD",
      "3D modelling tools",
      "Visualization tools",
      "Technical animation workflows",
    ],
    useCases: [
      "2D technical drawings",
      "Machine modelling",
      "Product visualization",
      "Technical demonstrations",
      "Machine functionality visualization",
    ],
    industries: [
      "Manufacturing",
      "Engineering",
      "Product Companies",
      "Industrial Businesses",
    ],
    relatedServices: [
      "Technical Documentation",
      "Professional Sales Material",
      "Creative Design",
      "Web Development",
    ],
    faqs: [
      {
        question: "What type of technical drawings are included?",
        answer:
          "The scope specifically includes AutoCAD 2D/3D and professional 2D technical drawings based on project requirements.",
      },
      {
        question: "Can machinery be represented in 3D?",
        answer:
          "Yes. Three-dimensional machine and product modelling is included within the technical and engineering service scope.",
      },
    ],
  },

  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    shortDescription:
      "Technical documentation, machine manuals, installation guides, maintenance instructions, safety and warranty documentation.",
    problem:
      "Technical products and machinery require clear documentation so users and service teams can understand installation, operation, maintenance and safety requirements.",
    introduction:
      "Technical Documentation services cover structured documentation for products, machines and technical workflows.",
    capabilities: [
      "Technical documentation",
      "Machine manuals",
      "Installation guides",
      "Maintenance documentation",
      "Safety documentation",
      "Warranty documentation",
      "Technical write-ups",
      "Product documentation",
    ],
    features: [
      "Structured documentation",
      "User instructions",
      "Installation information",
      "Maintenance instructions",
      "Safety guidelines",
      "Warranty information",
    ],
    process: [
      "Collect technical information",
      "Understand product or machine workflow",
      "Structure documentation",
      "Prepare content",
      "Review technical information",
      "Finalize documentation",
    ],
    technology: [
      "Digital documentation tools",
      "PDF workflows",
      "Technical illustration workflows",
      "Document management systems",
    ],
    useCases: [
      "Machine manuals",
      "Installation guides",
      "Maintenance instructions",
      "Safety documentation",
      "Warranty documentation",
      "Product documentation",
    ],
    industries: [
      "Manufacturing",
      "Engineering",
      "Product Companies",
      "Industrial Businesses",
    ],
    relatedServices: [
      "Technical & Engineering",
      "Warranty System",
      "Professional Sales Material",
      "Creative Design",
    ],
    faqs: [
      {
        question: "What documents can be prepared?",
        answer:
          "The project scope includes user manuals, installation guides, maintenance instructions, safety guidelines, warranty documentation and product documentation.",
      },
      {
        question: "Can documentation be created for machinery?",
        answer:
          "Yes. Machine manuals and related technical documentation are explicitly included in the service scope.",
      },
    ],
  },

  {
    slug: "warranty-system",
    title: "Warranty System Design",
    shortDescription:
      "Digital warranty workflows for registration, claims, validation, tracking, status management and warranty history.",
    problem:
      "Product businesses may need structured systems to manage warranty registrations, claims, validation and status tracking.",
    introduction:
      "Warranty System Design covers digital workflows for managing warranty-related information and processes.",
    capabilities: [
      "Warranty registration",
      "Claim processing",
      "Claim validation",
      "Warranty tracking",
      "Status management",
      "Automated documentation",
      "Reporting framework",
      "Customer support workflow",
      "Warranty history",
    ],
    features: [
      "Warranty registration workflow",
      "Claim management",
      "Claim validation",
      "Status tracking",
      "Warranty history",
      "Reporting",
      "Customer support workflow",
    ],
    process: [
      "Understand warranty workflow",
      "Map registration and claim processes",
      "Design system structure",
      "Develop or configure workflows",
      "Test claim and tracking flows",
      "Deploy and maintain",
    ],
    technology: [
      "Web applications",
      "REST APIs",
      "SQL databases",
      "Cloud platforms",
      "Workflow automation",
      "Reporting systems",
    ],
    useCases: [
      "Warranty registration",
      "Warranty claims",
      "Claim validation",
      "Warranty tracking",
      "Customer support",
      "Warranty reporting",
    ],
    industries: [
      "Manufacturing",
      "Engineering",
      "Product Companies",
      "Retail & E-commerce",
    ],
    relatedServices: [
      "Business Software",
      "AI & Automation",
      "Technical Documentation",
      "Web Development",
    ],
    faqs: [
      {
        question: "What can a warranty system track?",
        answer:
          "The project scope includes warranty registration, claim processing, claim validation, tracking, status management and warranty history.",
      },
      {
        question: "Can warranty workflows be automated?",
        answer:
          "The scope includes automated documentation, reporting frameworks and customer support workflows, which can form part of a structured warranty system.",
      },
    ],
  },
];

export function getServiceDetailBySlug(
  slug: string
): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}