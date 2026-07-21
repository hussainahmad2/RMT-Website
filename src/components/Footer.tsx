import React from "react";
import { Link } from "wouter";
import { MapPin, Mail, Linkedin, Youtube, Facebook } from "lucide-react";
import { ALL_SERVICES } from "@/data/services";

const BASE = import.meta.env.BASE_URL;

const offices = [
  { city: "United States", address: "St. Cloud Edgewater Business Centre Sartell, Minnesota, United States", email: "info@rmt-usa.com" },
  { city: "Pakistan", address: "Building 2A, W1 Street, Rawat Industrial Estate, Islamabad, 46220", email: "info@rmt-usa.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#060d17] text-white pt-14 pb-8">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src={`${BASE}rmt-logo.webp`} alt="RMT Medical Technologies Inc." className="h-12 w-auto object-contain drop-shadow-sm" />
            </Link>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">
              End-to-end medical device and technology solutions — from design through regulatory approval and contract manufacturing.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: "https://www.linkedin.com/company/revivemedicaltechnologies", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.youtube.com/@ReviveMeditech", Icon: Youtube, label: "YouTube" },
                { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-primary hover:border-primary transition-colors">
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
                { label: "Products", href: "/products" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Testing", href: "/testing" },
                { label: "Training & Workshops", href: "/training" },
                { label: "Insights", href: "/insights" },
                { label: "Gallery", href: "/gallery" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-primary transition-colors">{link.label}</Link>
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
                  <Link href={`/services/${svc.slug}`} className="text-white/50 text-xs hover:text-primary transition-colors leading-snug block">
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
                    <p className="text-white/40 text-xs leading-relaxed">{office.address}</p>
                    {office.email && <a href={`mailto:${office.email}`} className="block text-white/40 text-xs hover:text-primary transition-colors mt-0.5">{office.email}</a>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {["ISO 13485:2016", "CE Mark", "ISO 14971", "IEC 62304"].map((cert) => (
                  <span key={cert} className="text-xs px-2 py-1 border border-primary/35 text-primary rounded font-medium">{cert}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} RMT Medical Technologies Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/sitemap" className="text-white/30 text-xs hover:text-primary transition-colors">Sitemap</Link>
            <a href="#" className="text-white/30 text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
