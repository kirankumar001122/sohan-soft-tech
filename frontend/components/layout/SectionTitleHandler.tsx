"use client";

import { useEffect } from "react";

export default function SectionTitleHandler() {
  useEffect(() => {
    const updateTitle = () => {
      const sectionTitles: Record<string, string> = {
        technology: "Technology",
        services: "Services",
        solutions: "Solutions",
        industries: "Industries",
        products: "Products",
        resources: "Resources",
        company: "Company",
      };

      const hash = window.location.hash.replace("#", "").toLowerCase();

      if (sectionTitles[hash]) {
        document.title = `${sectionTitles[hash]} | Sohan Soft Tech`;
      } else {
        document.title = "Sohan Soft Tech";
      }
    };

    updateTitle();

    window.addEventListener("hashchange", updateTitle);

    return () => {
      window.removeEventListener("hashchange", updateTitle);
    };
  }, []);

  return null;
}