import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const services = [
  { name: "Product Design & Prototyping", slug: "product-design" },
  { name: "Regulatory Compliance", slug: "regulatory-compliance" },
  { name: "Software & AI Solutions", slug: "software-ai" },
  { name: "Quality Testing", slug: "quality-testing" },
  { name: "Electronics & Firmware Development", slug: "electronics-firmware" },
  { name: "Turnkey Commissioning & Regulatory Approvals", slug: "turnkey-commissioning" },
  { name: "Pharmaceutical Product Development", slug: "pharmaceutical" },
  { name: "Contract Manufacturing", slug: "contract-manufacturing" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-background/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" data-testid="link-home-logo">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading font-bold text-white text-sm tracking-tight rounded-sm">
            RMT
          </div>
          <span className="font-heading font-bold text-xl tracking-wide text-foreground">
            RMT <span className="text-primary">USA</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {["Home", "About Us"].map((label) => {
            const href = label === "Home" ? "/" : "/about";
            return (
              <Link
                key={label}
                href={href}
                data-testid={`link-nav-${label.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              data-testid="link-nav-services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                location.startsWith("/services") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]"
                >
                  <div className="bg-background border border-border shadow-xl rounded-lg p-5 grid grid-cols-2 gap-1">
                    <div className="col-span-2 pb-3 mb-1 border-b border-border">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Our Services</span>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        data-testid={`link-service-${service.slug}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {service.name}
                      </Link>
                    ))}
                    <div className="col-span-2 pt-3 mt-1 border-t border-border">
                      <Link
                        href="/services"
                        className="text-primary text-sm font-semibold hover:underline"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {["Projects", "Careers", "Contact"].map((label) => {
            const href = `/${label.toLowerCase()}`;
            return (
              <Link
                key={label}
                href={href}
                data-testid={`link-nav-${label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            data-testid="button-theme-toggle"
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button asChild variant="default" className="font-semibold h-9 px-5 text-sm rounded-md">
            <Link href="/contact" data-testid="button-get-quote">Get a Quote</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            data-testid="button-theme-toggle-mobile"
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground/70"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            data-testid="button-mobile-menu"
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border absolute top-full left-0 w-full shadow-lg"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium px-3 py-2.5 rounded-md transition-colors ${
                    location === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3 py-2">Services</p>
                <div className="pl-2 flex flex-col gap-0.5">
                  <Link href="/services" className="text-primary text-sm px-3 py-1.5" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground text-sm px-3 py-1.5 rounded-md hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Button asChild className="mt-3 w-full rounded-md">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
