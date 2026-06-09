import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

/** Instant page swap — no fade delay for faster perceived load */
export function PageTransition({ children }: PageTransitionProps) {
  return <>{children}</>;
}
