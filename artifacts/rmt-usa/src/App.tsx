import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

import Home from "@/pages/Home";
import About from "@/pages/About";
import { ServicesOverview, ServiceDetail, SubServiceDetail } from "@/pages/Services";
import Projects from "@/pages/Projects";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Testing from "@/pages/Testing";
import Training from "@/pages/Training";
import Insights from "@/pages/Insights";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesOverview} />
        <Route path="/services/:slug/:subSlug" component={SubServiceDetail} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/projects" component={Projects} />
        <Route path="/testing" component={Testing} />
        <Route path="/training" component={Training} />
        <Route path="/insights" component={Insights} />
        <Route path="/gallery" component={Gallery} />
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
