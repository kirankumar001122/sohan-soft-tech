import type { CSSProperties, ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "white" | "warm" | "cream" | "paleGold" | "dark";
  id?: string;
  style?: CSSProperties;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "default",
  id,
  style,
}: SectionProps) {
  const tones = {
    default: "",
    white: "bg-[var(--background)]",
    warm: "bg-[var(--background-alt)]",
    cream: "bg-[var(--background)]",
    paleGold: "bg-[var(--background-pale-gold)]",
    dark: "section-dark bg-[var(--background-dark)] text-[var(--text-on-dark)]",
  };

  return (
    <section
      id={id}
      style={style}
      className={`py-5 sm:py-6 lg:py-7 ${tones[tone]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
