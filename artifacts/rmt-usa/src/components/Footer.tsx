import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import { ALL_SERVICES } from "@/data/services";

const BASE = import.meta.env.BASE_URL;

const offices = [
  { city: "United States", address: "RMT USA Inc., United States of America", phone: "+1 (800) 555-0199", email: "usa@rmt-usa.com" },
  { city: "Pakistan", address: "RMT Pakistan, Karachi, Pakistan", phone: "+92 21 555 0199", email: "pakistan@rmt-usa.com" },
  { city: "UAE", address: "RMT Middle East FZ-LLC, Dubai, UAE", phone: "+971 4 555 0199", email: "me@rmt-usa.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* Color logo — no invert filter */}
              <img src={`${BASE}rmt-logo.webp`} alt="RMT Medical Technologies Inc." className="h-12 w-auto object-contain drop-shadow-sm" />
            </Link>
            <p className="text-background/55 text-sm mb-5 leading-relaxed">
              End-to-end medical device and technology solutions — from design through regulatory approval and contract manufacturing.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
                { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full border border-background/15 flex items-center justify-center text-background/50 hover:text-primary hover:border-primary transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Testing", href: "/testing" },
                { label: "Training & Workshops", href: "/training" },
                { label: "Insights", href: "/insights" },
                { label: "Gallery", href: "/gallery" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/55 text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-2">
              {ALL_SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="text-background/55 text-xs hover:text-primary transition-colors leading-snug block">
                    {svc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICES */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Offices</h4>
            <ul className="flex flex-col gap-4">
              {offices.map((office) => (
                <li key={office.city} className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-xs font-semibold mb-0.5">{office.city}</p>
                    <p className="text-background/45 text-xs leading-relaxed">{office.address}</p>
                    <a href={`tel:${office.phone}`} className="block text-background/45 text-xs hover:text-primary transition-colors mt-0.5">{office.phone}</a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-background/10">
              <p className="text-xs text-background/35 uppercase tracking-widest mb-2">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {["ISO 13485", "CE Mark", "ISO 14971", "IEC 62304"].map((cert) => (
                  <span key={cert} className="text-xs px-2 py-1 border border-primary/35 text-primary rounded font-medium">{cert}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-background/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/35 text-xs">&copy; {new Date().getFullYear()} RMT Medical Technologies Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-background/35 text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/35 text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
