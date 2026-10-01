"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { megaMenus } from "@/data/navigation";

const topLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const menuId = useId();

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          setExpanded(null);
        }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={`${menuId}-panel`}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-light)] bg-white text-[var(--ink)] transition hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold-deep)]"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <span className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </span>
        )}
      </button>

      {open && (
        <div id={`${menuId}-panel`} className="absolute inset-x-0 top-20 z-50 max-h-[calc(100dvh-80px)] overflow-y-auto border-b border-[var(--border-light)] bg-white shadow-[0_20px_40px_rgba(17,17,17,0.12)]">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            {topLinks.map((item) => {
              const menu = megaMenus[item.label];
              const isExpanded = expanded === item.label;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const submenuId = `${menuId}-${item.label.toLowerCase().replaceAll(" ", "-")}`;

              return (
                <div
                  key={item.href}
                  className="border-b border-[var(--border-light)] last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-12 flex-1 items-center border-l-2 pl-3 text-sm font-medium transition ${isActive ? "border-[var(--brand-gold)] text-[var(--brand-gold-deep)]" : "border-transparent text-[var(--ink)]"}`}
                    >
                      {item.label}
                    </Link>
                    {menu && (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                        aria-controls={submenuId}
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.label)
                        }
                        className={`flex h-11 w-11 items-center justify-center rounded-lg transition ${isExpanded ? "bg-[var(--brand-gold-soft)] text-[var(--brand-gold-deep)]" : "text-[var(--text-secondary)] hover:bg-[var(--background-soft)]"}`}
                      >
                        <svg className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="m4 7 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {menu && isExpanded && (
                    <div id={submenuId} className="space-y-4 pb-5 pl-4">
                      {menu.groups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold-deep)]">
                            {group.title}
                          </p>
                          <div className="grid gap-1 sm:grid-cols-2">
                            {group.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-2.5 transition hover:bg-[var(--background-soft)]"
                              >
                                <span className="block text-sm font-medium text-[var(--ink)]">{sub.label}</span>
                                {sub.description && <span className="mt-0.5 block text-xs leading-5 text-[var(--text-muted)]">{sub.description}</span>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-gold-rich)]"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
