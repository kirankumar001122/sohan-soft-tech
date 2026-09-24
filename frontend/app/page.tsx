import type { Metadata } from "next";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CompanyIntro from "@/components/home/CompanyIntro";
import FinalCTA from "@/components/home/FinalCTA";
import FounderSection from "@/components/home/FounderSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProductsSection from "@/components/home/ProductsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import SecuritySection from "@/components/home/SecuritySection";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import TechnologySection from "@/components/home/TechnologySection";
import WhySohanSection from "@/components/home/WhySohanSection";

export const metadata: Metadata = {
  title: "Sohan Soft Tech | Technology That Works for Your Business",
  description:
    "Sohan Soft Tech builds technology, automation and digital solutions that help businesses operate, connect and grow.",
  keywords: [
    "Sohan Soft Tech",
    "technology solutions",
    "software development",
    "business automation",
    "AI automation",
    "digital solutions",
    "IT services",
  ],
  openGraph: {
    title: "Sohan Soft Tech | Technology That Works for Your Business",
    description:
      "Technology, automation and digital solutions that help businesses operate, connect and grow.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      <CompanyIntro />

      <ServicesSection />

      <SolutionsSection />

      <IndustriesSection />

      <ProductsSection />

      <CaseStudiesSection />

      <WhySohanSection />

      <FounderSection />

      <ProcessSection />

      <TechnologySection />

      <SecuritySection />

      <ResourcesSection />

      <FinalCTA />
    </main>
  );
}