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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B2346] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#8B2346] text-white hover:bg-[#6F1837]",
    secondary:
      "bg-[#F8EEF2] text-[#8B2346] hover:bg-[#8B2346] hover:text-white",
    outline:
      "border border-[#E5E7EB] bg-white text-[#172033] hover:border-[#8B2346] hover:text-[#8B2346]",
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