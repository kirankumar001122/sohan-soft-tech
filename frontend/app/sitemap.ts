import type { MetadataRoute } from "next";

const baseUrl = "http://localhost:3000";

const services = [
  "web-development",
  "ecommerce",
  "mobile-app-development",
  "ai-automation",
  "business-software",
  "office-it-setup",
  "technical-services",
];

const solutions = [
  "business",
  "education",
  "digital-transformation",
  "automation",
  "communication",
  "office-technology",
  "business-management",
  "billing-accounting",
  "inventory-management",
  "business-automation",
  "education-erp",
  "learning-management",
  "student-management",
  "education-communication",
  "digital-business-systems",
  "cloud-transformation",
  "ai-transformation",
  "workflow-transformation",
  "lead-automation",
  "communication-automation",
  "reporting-automation",
  "data-synchronization",
  "workflow-automation",
  "whatsapp-business",
  "whatsapp-automation",
  "sms-dlt",
  "customer-communication",
  "office-setup",
  "networking",
  "biometric-attendance",
  "cloud-office",
  "it-support",
];

const industries = [
  "education",
  "healthcare",
  "retail-ecommerce",
  "manufacturing",
  "food-hospitality",
  "professional-services",
  "smb",
  "corporate-offices",
];

const products = [
  "billing-software",
  "pos-software",
  "attendance-system",
  "education-erp",
  "learning-management",
  "sms-dlt-platform",
  "whatsapp-automation-platform",
  "business-management-software",
  "warranty-management-system",
  "custom-business-software",
];

const staticPages = [
  "",
  "/services",
  "/solutions",
  "/industries",
  "/products",
  "/company",
  "/careers",
  "/resources",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionRoutes = solutions.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...productRoutes,
  ];
}