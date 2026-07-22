import { useEffect } from "react";
import { useLocation } from "wouter";

/** Scroll to top whenever the route changes. */
export function ScrollToTop() {
  const [location] = useLocation();
  const shouldRestoreInsightsScroll =
    location === "/insights" && window.sessionStorage.getItem("insights:restore-scroll") === "1";

  useEffect(() => {
    if (shouldRestoreInsightsScroll) {
      return;
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location, shouldRestoreInsightsScroll]);

  return null;
}
