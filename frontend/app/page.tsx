import type { Metadata } from "next";
import AutomationFeature from "@/components/home/AutomationFeature";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CompanyIntro from "@/components/home/CompanyIntro";
import FinalCTA from "@/components/home/FinalCTA";
import FounderSection from "@/components/home/FounderSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ServicesEcosystem from "@/components/home/ServicesEcosystem";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
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
      <ServicesEcosystem />
      <AutomationFeature />
      <SolutionsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhySohanSection />
      <FounderSection />
      <ProcessSection />
      <ResourcesSection />
      <FinalCTA />
    </main>
  );
}
