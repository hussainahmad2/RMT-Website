import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";

import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import ServicesOverview from "@/pages/services/services";
import { ServiceRoute } from "@/pages/services/ServiceRoute";
import { SubServiceRoute } from "@/pages/services/SubServiceRoute";
import Projects from "@/pages/projects/projects";
import Careers from "@/pages/careers/careers";
import Contact from "@/pages/contact/contact";
import Testing from "@/pages/testing/testing";
import Training from "@/pages/training/training";
import Insights from "@/pages/insights/insights";
import Gallery from "@/pages/gallery/gallery";
import Testimonials from "@/pages/testimonials/testimonials";
import Products from "@/pages/products/products";
import NotFound from "@/pages/not-found/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesOverview} />
        <Route path="/services/:slug/:subSlug" component={SubServiceRoute} />
        <Route path="/services/:slug" component={ServiceRoute} />
        <Route path="/projects" component={Projects} />
        <Route path="/testing" component={Testing} />
        <Route path="/training" component={Training} />
        <Route path="/insights" component={Insights} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/products" component={Products} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
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
              <Footer />
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
