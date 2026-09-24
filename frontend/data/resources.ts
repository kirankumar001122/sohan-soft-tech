export type ResourceType =
  | "Article"
  | "Guide"
  | "Case Study"
  | "FAQ";

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  published: boolean;
  content?: string[];
}

export const resources: Resource[] = [
  {
    slug: "business-automation-guide",
    title: "Business Automation",
    description:
      "An introduction to identifying repetitive business workflows and exploring practical automation opportunities.",
    type: "Guide",
    category: "Business Automation",
    published: false,
  },

  {
    slug: "website-development-guide",
    title: "Website Development Guide",
    description:
      "A practical overview of the key considerations involved in planning a modern business website.",
    type: "Guide",
    category: "Web Development",
    published: false,
  },

  {
    slug: "ai-automation-for-business",
    title: "AI & Automation for Business",
    description:
      "Explore how AI and automation can be considered for repetitive workflows, communication and business processes.",
    type: "Article",
    category: "AI & Automation",
    published: false,
  },

  {
    slug: "seo-for-business-websites",
    title: "SEO for Business Websites",
    description:
      "An overview of the foundational SEO considerations for organizations building their digital presence.",
    type: "Guide",
    category: "SEO",
    published: false,
  },

  {
    slug: "business-software-guide",
    title: "Business Software Guide",
    description:
      "Understand how business software can organize operational workflows, records and connected processes.",
    type: "Guide",
    category: "Business Software",
    published: false,
  },

  {
    slug: "digital-transformation-guide",
    title: "Digital Transformation",
    description:
      "A practical introduction to evaluating digital transformation opportunities across business workflows.",
    type: "Article",
    category: "Digital Transformation",
    published: false,
  },
];

export function getPublishedResources(): Resource[] {
  return resources.filter((resource) => resource.published);
}

export function getResourceBySlug(
  slug: string
): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}