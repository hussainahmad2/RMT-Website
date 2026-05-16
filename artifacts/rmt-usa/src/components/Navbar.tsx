import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Mechanical Services", slug: "mechanical" },
  { name: "Electrical Services", slug: "electrical" },
  { name: "Piping Services", slug: "piping" },
  { name: "Welding & Fabrication", slug: "welding-fabrication" },
  { name: "Civil & Structural", slug: "civil-structural" },
  { name: "Instrumentation & Controls", slug: "instrumentation" },
  { name: "Maintenance & Turnaround", slug: "maintenance-turnaround" },
  { name: "Scaffolding Services", slug: "scaffolding" },
  { name: "Industrial Insulation", slug: "insulation" },
  { name: "Painting & Coating", slug: "painting-coating" },
  { name: "Project Management", slug: "project-management" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-xl">
            RMT
          </div>
          <span className="font-heading font-bold text-2xl tracking-wide text-foreground">
            RMT <span className="text-primary">USA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground/90"}`}>Home</Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-foreground/90"}`}>About Us</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.startsWith("/services") ? "text-primary" : "text-foreground/90"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                >
                  <div className="bg-card border border-border shadow-xl p-6 grid grid-cols-2 gap-x-8 gap-y-4">
                    {services.map((service) => (
                      <Link 
                        key={service.slug} 
                        href={`/services/${service.slug}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {service.name}
                      </Link>
                    ))}
                    <div className="col-span-2 pt-4 mt-2 border-t border-border">
                      <Link href="/services" className="text-primary text-sm font-semibold hover:underline">
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/projects" ? "text-primary" : "text-foreground/90"}`}>Projects</Link>
          <Link href="/careers" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/careers" ? "text-primary" : "text-foreground/90"}`}>Careers</Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-foreground/90"}`}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="default" className="font-semibold tracking-wide rounded-none h-10 px-6">
            <Link href="/contact">GET A QUOTE</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border absolute top-full left-0 w-full shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-foreground text-lg font-medium p-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col">
                <span className="text-foreground text-lg font-medium p-2 opacity-50">Services</span>
                <div className="pl-4 flex flex-col gap-2 border-l border-border ml-2">
                  <Link href="/services" className="text-primary py-1" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                  {services.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      className="text-muted-foreground py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Button asChild className="mt-4 rounded-none w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
