import React, { lazy, Suspense, useLayoutEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

/** Eager routes avoid Suspense "Loading page" flash on money / contact paths */
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import TopicPage from "@/pages/topics/topic-page";

const About = lazy(() => import("@/pages/about"));
const ServicesOverview = lazy(() => import("@/pages/services"));
const ServiceRoute = lazy(() =>
  import("@/pages/services/ServiceRoute").then((m) => ({ default: m.ServiceRoute }))
);
const SubServiceRoute = lazy(() =>
  import("@/pages/services/SubServiceRoute").then((m) => ({ default: m.SubServiceRoute }))
);
const Projects = lazy(() => import("@/pages/projects"));
const CaseStudy = lazy(() => import("@/pages/projects/case-study"));
const Careers = lazy(() => import("@/pages/careers"));
const Testing = lazy(() => import("@/pages/testing"));
const Training = lazy(() => import("@/pages/training"));
const Insights = lazy(() => import("@/pages/insights"));
const InsightArticle = lazy(() => import("@/pages/insights/insight-article"));
const Gallery = lazy(() => import("@/pages/gallery"));
const Testimonials = lazy(() => import("@/pages/testimonials"));
const Products = lazy(() => import("@/pages/products"));
const Pharmaceutical = lazy(() => import("@/pages/pharmaceutical"));
const Media = lazy(() => import("@/pages/media"));
const NotFound = lazy(() => import("@/pages/not-found"));
const SitemapPage = lazy(() => import("@/pages/sitemap"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

/** Matches #seo-boot overlay — no text (avoids FOUC / soft-404 "Loading page" signals). */
function RouteLoadingScreen() {
  return (
    <div
      className="min-h-[50vh] w-full"
      style={{ background: "#060d17" }}
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading"
    />
  );
}

/** Reveal app only after first paint so crawlers/users never see stub→loader flicker. */
function AppReadyGate({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    let cancelled = false;
    const reveal = () => {
      if (cancelled) return;
      document.documentElement.classList.add("app-ready");
    };
    // Double rAF: after layout + paint of React shell
    requestAnimationFrame(() => {
      requestAnimationFrame(reveal);
    });
    // Fallback if rAF is delayed (slow devices / background tabs)
    const t = window.setTimeout(reveal, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);
  return <>{children}</>;
}

function Router() {
  return (
    <Suspense fallback={<RouteLoadingScreen />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={ServicesOverview} />
          <Route path="/services/:slug/:subSlug" component={SubServiceRoute} />
          <Route path="/services/:slug" component={ServiceRoute} />
          <Route path="/projects/:slug" component={CaseStudy} />
          <Route path="/projects" component={Projects} />
          <Route path="/testing" component={Testing} />
          <Route path="/training" component={Training} />
          <Route path="/insights/:slug" component={InsightArticle} />
          <Route path="/insights" component={Insights} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/products" component={Products} />
          <Route path="/pharmaceutical" component={Pharmaceutical} />
          <Route path="/media" component={Media} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/sitemap" component={SitemapPage} />
          <Route path="/topics/:slug" component={TopicPage} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppReadyGate>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                  <Router />
                </main>
              </div>
            </AppReadyGate>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
