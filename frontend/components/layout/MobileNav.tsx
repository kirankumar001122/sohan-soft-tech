"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-white text-[var(--text-primary)] transition hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
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
        <div className="absolute left-0 right-0 top-[76px] border-b border-[var(--border-light)] bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
            <nav className="flex flex-col">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Services
              </Link>

              <Link
                href="/solutions"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Industries
              </Link>

              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Products
              </Link>

              <Link
                href="/company"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Company
              </Link>

              <Link
                href="/resources"
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-light)] py-4 text-base font-medium text-[var(--text-primary)] hover:text-[var(--brand-green)]"
              >
                Resources
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--brand-green-dark)]"
              >
                Get a Free Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}