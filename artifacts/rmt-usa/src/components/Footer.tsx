import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-xl">
                RMT
              </div>
              <span className="font-heading font-bold text-2xl tracking-wide text-foreground">
                RMT <span className="text-primary">USA</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Premium industrial services delivering mechanical, electrical, piping, fabrication, and maintenance excellence across major US and international sites.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/mechanical" className="text-muted-foreground hover:text-primary transition-colors">Mechanical Services</Link></li>
              <li><Link href="/services/electrical" className="text-muted-foreground hover:text-primary transition-colors">Electrical Services</Link></li>
              <li><Link href="/services/piping" className="text-muted-foreground hover:text-primary transition-colors">Piping Services</Link></li>
              <li><Link href="/services/welding-fabrication" className="text-muted-foreground hover:text-primary transition-colors">Welding & Fabrication</Link></li>
              <li><Link href="/services/maintenance-turnaround" className="text-muted-foreground hover:text-primary transition-colors">Maintenance & Turnaround</Link></li>
              <li><Link href="/services" className="text-primary hover:underline transition-colors mt-2 text-sm font-semibold">View All Services &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  <strong>Headquarters</strong><br />
                  12500 Industrial Blvd<br />
                  Houston, TX 77015
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">info@rmt-usa.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} RMT USA. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
