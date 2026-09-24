import type { CSSProperties, ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  style?: CSSProperties;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  style,
}: SectionProps) {
  return (
    <section id={id} style={style} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}