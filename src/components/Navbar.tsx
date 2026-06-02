import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Sun, Moon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { ALL_SERVICES } from "@/data/services";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";

const BASE = import.meta.env.BASE_URL;

const TRAINING_CATEGORIES = [
  { label: "Regulatory & Quality Compliance", sub: ["HIPAA Compliance", "ISO 13485", "ISO 14971", "GMP Compliance"] },
  { label: "Engineering & Product Workshops", sub: ["Design Control & Management", "FMEA & DFMEA", "Healthtech Workforce Training"] },
  { label: "Research & Entrepreneurship", sub: ["Research Methodology", "Entrepreneurship in Healthtech", "Business Plan Feasibility"] },
  { label: "Scientific & Lab Skills", sub: ["HPLC Chromatography", "UV Spectrophotometry", "Drug/API Synthesis"] },
];

type DropdownKey = "company" | "services" | "training" | null;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  const navLinkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary ${
      isActive(href) ? "text-primary" : "text-foreground/75"
    }`;

  const dropdownBtnClass = (active: boolean) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary ${
      active ? "text-primary" : "text-foreground/75"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border shadow-sm py-1.5"
            : "bg-background/92 backdrop-blur-sm py-2"
        }`}
      >
        <div className="page-container flex items-center justify-between gap-3 h-12 sm:h-14">

          {/* LOGO — top left */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={`${BASE}rmt-logo.webp`}
              alt="RMT Medical Technologies Inc."
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV — center */}
          <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">

            {/* Home */}
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Company dropdown */}
            <div className="relative" onMouseEnter={() => setOpenDropdown("company")} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={dropdownBtnClass(isActive("/about") || isActive("/projects"))}>
                Company <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "company" && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.14 }}
                    className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-background border border-border shadow-xl rounded-xl py-2 overflow-hidden">
                      {[{ href: "/about", label: "About Us" }, { href: "/projects", label: "Our Projects" }, { href: "/gallery", label: "Gallery" }].map(({ href, label }) => (
                        <Link key={href} href={href} className="block px-4 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-muted transition-colors">{label}</Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={dropdownBtnClass(isActive("/services"))}>
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.14 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px]">
                    <div className="bg-background border border-border shadow-xl rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">All Services</span>
                        <Link href="/services" className="text-xs text-primary font-semibold hover:underline">View All &rarr;</Link>
                      </div>
                      <div className="grid grid-cols-2 gap-0.5">
                        {ALL_SERVICES.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/75 hover:text-primary hover:bg-muted transition-colors group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Testing */}
            <Link href="/testing" className={navLinkClass("/testing")}>
              Testing
            </Link>

            {/* Training dropdown */}
            <div className="relative" onMouseEnter={() => setOpenDropdown("training")} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={dropdownBtnClass(isActive("/training"))}>
                Training <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "training" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "training" && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.14 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px]">
                    <div className="bg-background border border-border shadow-xl rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Training & Workshops</span>
                        <Link href="/training" className="text-xs text-primary font-semibold hover:underline">View All &rarr;</Link>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        {TRAINING_CATEGORIES.map((cat) => (
                          <div key={cat.label}>
                            <p className="text-xs font-bold text-primary mb-2 leading-tight">{cat.label}</p>
                            {cat.sub.map((s) => (
                              <Link key={s} href="/training" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1 border-b border-border/50 last:border-0">{s}</Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Insights */}
            <Link href="/insights" className={navLinkClass("/insights")}>
              Insights
            </Link>

            {/* Careers */}
            <Link href="/careers" className={navLinkClass("/careers")}>
              Careers
            </Link>

            {/* Contact */}
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* RIGHT ACTIONS — dark toggle + quote, top right on all screens */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-foreground/60 hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Button
              className="h-8 px-2.5 sm:px-4 text-[11px] sm:text-xs font-semibold rounded-lg gap-1 sm:gap-1.5"
              onClick={() => setQuoteOpen(true)}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden min-[400px]:inline">Request a Quote</span>
              <span className="min-[400px]:hidden">Quote</span>
            </Button>
            <button
              className="xl:hidden p-1.5 rounded-md transition-colors text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="xl:hidden overflow-hidden bg-background border-b border-border absolute top-full left-0 w-full shadow-xl">
              <div className="flex flex-col p-4 gap-0.5 max-h-[85vh] overflow-y-auto">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/projects", label: "Projects" },
                  { href: "/gallery", label: "Gallery" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(href) ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}>
                    {label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border pt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 py-1.5">Services</p>
                  {ALL_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-border pt-2">
                  {[
                    { href: "/testing", label: "Testing" },
                    { href: "/training", label: "Training & Workshops" },
                    { href: "/insights", label: "Insights" },
                    { href: "/careers", label: "Careers" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(href) ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}>
                      {label}
                    </Link>
                  ))}
                </div>
                <Button
                  className="mt-3 w-full rounded-lg text-sm gap-2"
                  onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
                >
                  <FileText className="w-4 h-4" />
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <RequestQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
