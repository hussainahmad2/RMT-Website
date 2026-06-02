import { useEffect } from "react";
import { useLocation } from "wouter";

/** Scroll to top whenever the route changes. */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}
