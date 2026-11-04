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
  title: "Sohan Soft Tech | Technology That Moves Business Forward",
  description:
    "Sohan Soft Tech creates elegant digital products, intelligent automation and connected systems that move businesses forward.",
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
    title: "Sohan Soft Tech | Technology That Moves Business Forward",
    description:
      "Elegant digital products, intelligent automation and connected systems for ambitious businesses.",
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
