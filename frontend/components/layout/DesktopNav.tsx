"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { megaMenus, type MegaMenu } from "@/data/navigation";

const navItems = [
  { label: "Services", href: "/services", mega: true },
  { label: "Solutions", href: "/solutions", mega: true },
  { label: "Industries", href: "/industries", mega: true },
  { label: "Products", href: "/products", mega: true },
  { label: "Case Studies", href: "/case-studies", mega: false },
  { label: "Company", href: "/company", mega: true },
  { label: "Resources", href: "/resources", mega: true },
  { label: "Contact", href: "/contact", mega: false },
];

function NavIcon({ label }: { label: string }) {
  return (
    <svg
      className="h-4 w-4 text-[var(--brand-gold-deep)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
      <title>{label}</title>
    </svg>
  );
}

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  const openMenu = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 160);
  };

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, []);

  const currentMegaMenu: MegaMenu | null = activeMenu
    ? megaMenus[activeMenu] ?? null
    : null;

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center xl:flex"
      onKeyDown={(event) => {
        if (event.key === "Escape") setActiveMenu(null);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setActiveMenu(null);
        }
      }}
    >
      <ul className="flex items-center gap-0.5">
        {navItems.map((item) => {
          const isOpen = activeMenu === item.label;
          const isActiveRoute =
            pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href));

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega && openMenu(item.label)}
              onMouseLeave={scheduleClose}
            >
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={() => setActiveMenu(null)}
                  aria-current={isActiveRoute ? "page" : undefined}
                  className={`rounded-full px-2.5 py-2 text-[13px] font-medium transition ${
                    isActiveRoute
                      ? "font-semibold text-[var(--brand-gold-deep)]"
                      : "text-[var(--ink)] hover:text-[var(--brand-gold-deep)]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.mega && (
                  <button
                    type="button"
                    aria-label={`${item.label} menu`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`${menuId}-panel`}
                    onClick={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setActiveMenu(item.label);
                    }}
                    className={`flex h-8 w-7 items-center justify-center rounded-full transition hover:bg-[var(--brand-gold-soft)] ${
                      isOpen ? "text-[var(--brand-gold-deep)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                  <svg
                    className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <Link
        href="/contact"
        className="ml-3 inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-4 py-2.5 text-[13px] font-semibold text-[var(--ink)] shadow-[0_8px_20px_rgba(217,149,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-gold-rich)]"
      >
        Get a Free Consultation
      </Link>

      {currentMegaMenu && (
        <div
          id={`${menuId}-panel`}
          role="region"
          aria-label={`${currentMegaMenu.label} menu`}
          className="absolute left-1/2 top-full z-50 w-[min(940px,calc(100vw-48px))] -translate-x-1/2 pt-3"
          onMouseEnter={() => activeMenu && openMenu(activeMenu)}
          onMouseLeave={scheduleClose}
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--border-light)] bg-white shadow-[0_28px_70px_rgba(17,17,17,0.14)]">
            <div className="grid gap-0 lg:grid-cols-[1.6fr_0.9fr]">
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-deep)]">
                  {currentMegaMenu.label}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                  {currentMegaMenu.description}
                </p>
                <div
                  className={`mt-6 grid gap-6 ${
                    currentMegaMenu.groups.length >= 3
                      ? "grid-cols-3"
                      : "grid-cols-2"
                  }`}
                >
                  {currentMegaMenu.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="border-b border-[var(--border-light)] pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
                        {group.title}
                      </h4>
                      <ul className="mt-3 space-y-1">
                        {group.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-2.5 rounded-lg p-2 transition hover:bg-[var(--brand-gold-soft)]"
                            >
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-light)] bg-[var(--background)]">
                                <NavIcon label={subItem.label} />
                              </span>
                              <span>
                                <span className="block text-[13px] font-semibold text-[var(--ink)] group-hover:text-[var(--brand-gold-deep)]">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="mt-0.5 line-clamp-2 block text-[11.5px] leading-4 text-[var(--text-muted)]">
                                    {subItem.description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden bg-[var(--background-dark)] p-6 text-white">
                <span aria-hidden="true" className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[var(--brand-gold)]/20" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-rich)]">
                  Featured
                </p>
                <h3 className="relative mt-4 text-xl font-semibold tracking-[-0.03em]">
                  {currentMegaMenu.featured?.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-white/70">
                  {currentMegaMenu.featured?.description}
                </p>
                <Link
                  href={currentMegaMenu.featured?.href || currentMegaMenu.href}
                  onClick={() => setActiveMenu(null)}
                  className="relative mt-6 inline-flex rounded-full bg-[var(--brand-gold)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-gold-rich)]"
                >
                  {currentMegaMenu.featured?.cta || "Explore"}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border-light)] bg-[var(--background)] px-6 py-3.5">
              <p className="text-[12px] text-[var(--text-muted)]">
                {currentMegaMenu.bottomCtaText}
              </p>
              <Link
                href={currentMegaMenu.bottomCtaHref || currentMegaMenu.href}
                onClick={() => setActiveMenu(null)}
                className="text-[12px] font-semibold text-[var(--brand-gold-deep)] hover:underline"
              >
                {currentMegaMenu.bottomCtaLinkText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
