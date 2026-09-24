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
    h1: "text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl",
    h2: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
    h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
  };

  const Tag = as;

  return (
    <Tag className={`${styles[as]} ${className}`}>
      {children}
    </Tag>
  );
}