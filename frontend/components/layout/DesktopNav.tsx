"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { megaMenus } from "@/data/navigation";

function getNavIcon(label: string) {
  const iconClass = "h-4 w-4 text-[#8B2346]";

  if (
    label.includes("Web") ||
    label.includes("Code") ||
    label.includes("Digital Solutions") ||
    label.includes("Communication")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    );
  }

  if (
    label.includes("E-Commerce") ||
    label.includes("Retail") ||
    label.includes("POS") ||
    label.includes("Commerce")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    );
  }

  if (
    label.includes("Mobile") ||
    label.includes("WhatsApp") ||
    label.includes("SMS")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    );
  }

  if (label.includes("AI") || label.includes("Automation")) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    );
  }

  if (
    label.includes("Software") ||
    label.includes("ERP") ||
    label.includes("LMS") ||
    label.includes("Billing") ||
    label.includes("Warranty") ||
    label.includes("Business Solutions") ||
    label.includes("Digital Transformation")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    );
  }

  if (
    label.includes("IT") ||
    label.includes("Technical") ||
    label.includes("Office") ||
    label.includes("Infrastructure")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    );
  }

  if (label.includes("Education") || label.includes("Learning")) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    );
  }

  if (label.includes("Healthcare")) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    );
  }

  if (
    label.includes("Manufacturing") ||
    label.includes("Work") ||
    label.includes("Services") ||
    label.includes("SMB") ||
    label.includes("Food") ||
    label.includes("Hospitality")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V11m0 0h-5m5 0h5"
        />
      </svg>
    );
  }

  if (
    label.includes("Company") ||
    label.includes("About") ||
    label.includes("Careers")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    );
  }

  if (
    label.includes("Insights") ||
    label.includes("Case Studies") ||
    label.includes("FAQs") ||
    label.includes("Resources") ||
    label.includes("Contact")
  ) {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentMegaMenu = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <nav
      className="relative hidden items-center gap-2 lg:flex"
      onKeyDown={handleKeyDown}
    >
      {navItems.map((item) => {
        const isOpen = activeMenu === item.label;

        const isActiveRoute =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        const isHighlighted = isOpen || isActiveRoute;

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`group flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                isHighlighted
                  ? "bg-[#F8EEF2] font-semibold text-[#8B2346]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--background-soft)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{item.label}</span>

              <svg
                className={`h-3 w-3 shrink-0 transition-transform duration-250 ease-in-out ${
                  isOpen
                    ? "rotate-180 text-[#8B2346]"
                    : isHighlighted
                      ? "text-[#8B2346]"
                      : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        );
      })}

      {/* CTA BUTTON */}
      <Link
        href="/contact"
        className="ml-3 inline-flex items-center justify-center rounded-full bg-[#8B2346] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6F1837]"
      >
        Get a Free Consultation
      </Link>

      {/* MEGA MENU */}
      {activeMenu && currentMegaMenu && (
        <div
          className="absolute left-1/2 top-full z-50 w-max max-w-[90vw] -translate-x-1/2 pt-2.5 transition-all duration-200"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-7 shadow-[0_25px_60px_rgba(23,32,51,0.14)]">
            <div
              className={`grid gap-8 ${
                currentMegaMenu.groups.length >= 3
                  ? "grid-cols-3 min-w-[780px] max-w-[880px]"
                  : "grid-cols-2 min-w-[520px] max-w-[600px]"
              }`}
            >
              {currentMegaMenu.groups.map((group) => (
                <div key={group.title} className="space-y-4">
                  {/* Group Title */}
                  <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2.5">
                    <span className="text-[10px] text-[#8B2346]">●</span>

                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B2346]">
                      {group.title}
                    </h4>
                  </div>

                  {/* Group Items */}
                  <div className="space-y-1">
                    {group.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-start gap-3.5 rounded-xl p-2.5 transition-all duration-150 hover:bg-[#F8EEF2]"
                      >
                        {/* Icon */}
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8EEF2] transition-colors group-hover:bg-[#F1DDE5]">
                          {getNavIcon(subItem.label)}
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[#172033] transition-colors group-hover:text-[#8B2346]">
                            {subItem.label}
                          </p>

                          <p className="mt-0.5 line-clamp-1 text-[11.5px] leading-4 text-[#64748B]">
                            {subItem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Action Strip */}
            <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
              <p className="text-[11px] text-[#64748B]">
                {currentMegaMenu.bottomCtaText ||
                  "Looking for tailored technology solutions for your business?"}
              </p>

              <Link
                href={currentMegaMenu.bottomCtaHref || currentMegaMenu.href}
                onClick={() => setActiveMenu(null)}
                className="text-xs font-semibold text-[#8B2346] hover:underline"
              >
                {currentMegaMenu.bottomCtaLinkText ||
                  `Explore all ${currentMegaMenu.label.toLowerCase()} →`}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}