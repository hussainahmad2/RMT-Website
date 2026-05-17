import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { ALL_SERVICES } from "@/data/services";

const BASE = import.meta.env.BASE_URL;

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border shadow-sm py-2"
          : "bg-background/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-0" data-testid="link-home-logo">
          <img
            src={`${BASE}rmt-logo.webp`}
            alt="RMT Medical Technologies Inc."
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground/80"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-foreground/80"}`}
          >
            About Us
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.startsWith("/services") ? "text-primary" : "text-foreground/80"}`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px]"
                >
                  <div className="bg-background border border-border shadow-2xl rounded-xl p-5">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Services</span>
                      <Link href="/services" className="text-xs text-primary font-semibold hover:underline" onClick={() => setServicesOpen(false)}>
                        View All &rarr;
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      {ALL_SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                          <span className="leading-tight">{service.name}</span>
                        </Link>
                      ))}
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
                className={`text-sm font-medium transition-colors hover:text-primary ${location === href ? "text-primary" : "text-foreground/80"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button asChild variant="default" className="font-semibold h-9 px-5 text-sm rounded-lg">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground/70"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border absolute top-full left-0 w-full shadow-lg"
          >
            <div className="flex flex-col p-4 gap-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium px-3 py-2.5 rounded-md transition-colors ${location === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 py-2">Services</p>
                <div className="pl-2 flex flex-col gap-0.5">
                  {ALL_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground text-sm px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Button asChild className="mt-3 w-full rounded-lg">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
