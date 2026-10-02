import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--brand-gold)] text-[var(--ink)] shadow-[0_10px_24px_rgba(217,149,0,0.22)] hover:bg-[var(--brand-gold-rich)] hover:-translate-y-0.5",
    secondary:
      "bg-[var(--brand-gold-soft)] text-[var(--brand-gold-deep)] hover:bg-[var(--brand-gold)] hover:text-[var(--ink)] hover:-translate-y-0.5",
    outline:
      "border border-[var(--brand-gold)] bg-transparent text-[var(--brand-gold-deep)] hover:bg-[var(--brand-gold)] hover:text-[var(--ink)] hover:-translate-y-0.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
