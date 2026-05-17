import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const services = [
  { name: "Product Design & Prototyping", slug: "product-design" },
  { name: "Regulatory Compliance", slug: "regulatory-compliance" },
  { name: "Software & AI Solutions", slug: "software-ai" },
  { name: "Quality Testing", slug: "quality-testing" },
  { name: "Electronics & Firmware Development", slug: "electronics-firmware" },
  { name: "Contract Manufacturing", slug: "contract-manufacturing" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading font-bold text-white text-sm rounded-sm">
                RMT
              </div>
              <span className="font-heading font-bold text-xl tracking-wide text-white">
                RMT <span className="text-primary">USA</span>
              </span>
            </Link>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              End-to-end medical device and technology solutions — from design through regulatory approval and contract manufacturing.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/60 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="text-background/60 text-sm hover:text-primary transition-colors">
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary text-sm font-semibold hover:underline mt-1 inline-block">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-background/60 text-sm leading-relaxed">
                  RMT USA Headquarters<br />
                  United States of America
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+18005550199" className="text-background/60 text-sm hover:text-primary transition-colors">
                  +1 (800) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@rmt-usa.com" className="text-background/60 text-sm hover:text-primary transition-colors">
                  info@rmt-usa.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-xs text-background/40 uppercase tracking-widest mb-2">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {["ISO 13485", "FDA Registered", "CE Mark"].map((cert) => (
                  <span key={cert} className="text-xs px-2 py-1 border border-primary/40 text-primary rounded">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} RMT USA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/40 text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/40 text-sm hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/40 text-sm hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
