import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-light)]/80 bg-[var(--background)]/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Sohan Soft Tech home"
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="relative h-14 w-14 shrink-0 sm:h-[60px] sm:w-[60px]">
              <Image
                src="/sohan-logo.png"
                alt="Sohan Soft Tech logo"
                fill
                sizes="(max-width: 640px) 56px, 60px"
                priority
                className="object-contain"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[15px] font-semibold tracking-normal text-[var(--ink)]">
                Sohan Soft Tech
              </span>
              <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
                Build. Automate. Operate. Grow.
              </span>
            </div>
          </Link>

          <DesktopNav />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
