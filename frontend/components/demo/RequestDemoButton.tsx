"use client";

import { useDemoBooking } from "./DemoBookingProvider";

export default function RequestDemoButton({
  className = "",
  onClick,
  children = "Request a Demo",
}: {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const { openBooking } = useDemoBooking();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openBooking();
      }}
      className={className}
    >
      {children}
    </button>
  );
}