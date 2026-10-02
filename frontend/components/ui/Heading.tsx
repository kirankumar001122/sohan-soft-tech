import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function Heading({
  children,
  as = "h2",
  className = "",
}: HeadingProps) {
  const styles = {
    h1: "font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl",
    h2: "font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-normal sm:text-4xl lg:text-[2.75rem]",
    h3: "font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-normal sm:text-3xl",
  };

  const Tag = as;

  return <Tag className={`${styles[as]} ${className}`}>{children}</Tag>;
}
