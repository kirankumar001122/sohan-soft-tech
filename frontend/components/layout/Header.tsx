import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-light)] bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-[88px] items-center justify-between">

          {/* BRAND */}
          <Link
            href="/"
            aria-label="Sohan Soft Tech home"
            className="group flex items-center gap-3"
          >
            <div className="relative h-[68px] w-[68px] shrink-0">
              <Image
                src="/sohan-logo.png"
                alt="Sohan Soft Tech logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex min-w-0 flex-col">
  <span className="text-[16px] font-semibold tracking-[-0.025em] text-[var(--text-primary)]">
    Sohan Soft Tech
  </span>

  <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
    Technology & Solutions
  </span>
</div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <DesktopNav />

          {/* MOBILE NAVIGATION */}
          <MobileNav />

        </div>
      </Container>
    </header>
  );
}