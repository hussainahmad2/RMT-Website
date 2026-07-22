import React, { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

/** Home stays eager for instant first paint; other routes load on demand */
import Home from "@/pages/home/home";

const About = lazy(() => import("@/pages/about/about"));
const ServicesOverview = lazy(() => import("@/pages/services/services"));
const ServiceRoute = lazy(() =>
  import("@/pages/services/ServiceRoute").then((m) => ({ default: m.ServiceRoute }))
);
const SubServiceRoute = lazy(() =>
  import("@/pages/services/SubServiceRoute").then((m) => ({ default: m.SubServiceRoute }))
);
const Projects = lazy(() => import("@/pages/projects/projects"));
const Careers = lazy(() => import("@/pages/careers/careers"));
const Contact = lazy(() => import("@/pages/contact/contact"));
const Testing = lazy(() => import("@/pages/testing/testing"));
const Training = lazy(() => import("@/pages/training/training"));
const Insights = lazy(() => import("@/pages/insights/insights"));
const InsightArticle = lazy(() => import("@/pages/insights/insight-article"));
const Gallery = lazy(() => import("@/pages/gallery/gallery"));
const Testimonials = lazy(() => import("@/pages/testimonials/testimonials"));
const Products = lazy(() => import("@/pages/products/products"));
const Pharmaceutical = lazy(() => import("@/pages/pharmaceutical/pharmaceutical"));
const NotFound = lazy(() => import("@/pages/not-found/not-found"));
const SitemapPage = lazy(() => import("@/pages/sitemap/sitemap"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

function RouteLoadingScreen() {
  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] pt-16 sm:pt-[4.5rem] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/90 px-8 py-7 shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <div className="text-center">
          <p className="font-heading text-lg font-bold text-foreground">Loading page</p>
        </div>
      </div>
    </div>
  );
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
          <Route path="/projects" component={Projects} />
          <Route path="/testing" component={Testing} />
          <Route path="/training" component={Training} />
          <Route path="/insights/:slug" component={InsightArticle} />
          <Route path="/insights" component={Insights} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/products" component={Products} />
          <Route path="/pharmaceutical" component={Pharmaceutical} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/sitemap" component={SitemapPage} />
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
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
