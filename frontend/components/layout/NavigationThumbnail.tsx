import Image from "next/image";
import {
  industryImages,
  productImages,
  serviceImages,
  solutionCategoryImages,
  solutionImages,
} from "@/data/catalogAssets";

const generalNavigationImages: Record<string, string> = {
  "/company": "/images/company-workspace.jpg",
  "/company/approach": "/images/business_solution.jpg",
  "/company/how-we-work": "/images/company-workspace.jpg",
  "/company/technology": "/images/technologyy.png",
  "/careers": "/images/team.jpg",
  "/resources/insights": "/images/digital_transformation.jpg",
  "/case-studies": "/images/business_solution.jpg",
  "/resources/faqs": "/images/company-workspace.jpg",
  "/resources/guides": "/images/learning_solution.jpg",
  "/resources/technology": "/images/technologyy.png",
};

function getNavigationImage(href: string) {
  const slug = href.split("/").filter(Boolean).at(-1) ?? "";

  if (href.startsWith("/services/")) return serviceImages[slug];
  if (href.startsWith("/products/")) return productImages[slug];
  if (href.startsWith("/industries/")) return industryImages[slug];
  if (href.startsWith("/solutions/")) {
    return solutionCategoryImages[slug] ?? solutionImages[slug];
  }

  return generalNavigationImages[href] ?? "/images/technologyy.png";
}

export default function NavigationThumbnail({ href }: { href: string }) {
  const src = getNavigationImage(href);

  return (
    <span className="relative mt-0.5 flex h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-[var(--border-light)] bg-white">
      <Image
        src={src}
        alt=""
        fill
        sizes="36px"
        className="object-cover"
      />
    </span>
  );
}