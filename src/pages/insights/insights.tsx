import React, { useState } from "react";
import { Link } from "wouter";
import { Clock, ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

type ArticleCategory = "All" | "Compliance" | "Software & AI" | "Medical Devices" | "Regulatory" | "Manufacturing" | "Research";

interface Article {
  id: string;
  category: ArticleCategory;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string; initials: string; color: string };
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  { id: "1", category: "Compliance", readTime: "7 min", date: "May 8, 2025", title: "Navigating EU MDR Cybersecurity Guidelines for Medical Devices in 2025", excerpt: "A deep dive into the latest EU MDR updates regarding premarket cybersecurity requirements and how manufacturers should prepare their technical file packages.", author: { name: "Dr. James Hartwell", role: "VP of Regulatory Affairs", initials: "JH", color: "bg-blue-600" }, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", featured: true },
  { id: "2", category: "Medical Devices", readTime: "5 min", date: "Apr 21, 2025", title: "The Future of Cardiology: Continuous Remote ECG Monitoring", excerpt: "How real-time ECG data transmission is reshaping post-operative care for cardiac patients and reducing hospital readmissions by up to 38%.", author: { name: "Dr. Priya Nambiar", role: "Clinical Research Lead", initials: "PN", color: "bg-rose-600" }, image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80" },
  { id: "3", category: "Software & AI", readTime: "8 min", date: "Apr 5, 2025", title: "HL7 vs FHIR: Which Standard to Choose for Your Healthcare App", excerpt: "Understanding the technical and strategic differences between healthcare interoperability standards — and when to use each for your medical software project.", author: { name: "Michael Torres", role: "Software Architect", initials: "MT", color: "bg-teal-600" }, image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&q=80" },
  { id: "4", category: "Medical Devices", readTime: "5 min", date: "Mar 18, 2025", title: "Material Selection for Next-Gen Wearable Biosensors", excerpt: "Evaluating biocompatibility, flexibility, and signal integrity in next-generation skin-contact medical wearables that meet ISO 10993 requirements.", author: { name: "Dr. Aisha Kapoor", role: "Materials Engineer", initials: "AK", color: "bg-emerald-600" }, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" },
  { id: "5", category: "Compliance", readTime: "9 min", date: "Mar 10, 2025", title: "ISO 13485:2016 Quality Management — A Practical Implementation Guide", excerpt: "Everything you need to know to implement and maintain an ISO 13485-compliant Quality Management System in your medical device organisation.", author: { name: "Sarah Chen", role: "QA Manager", initials: "SC", color: "bg-indigo-600" }, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
  { id: "6", category: "Software & AI", readTime: "6 min", date: "Feb 28, 2025", title: "How AI is Solving Alarm Fatigue in ICU Environments", excerpt: "Machine learning algorithms are achieving 73% reductions in false-positive clinical alarms — transforming AI and improving patient safety in critical care units.", author: { name: "Dr. Raza Ahmed", role: "AI Research Lead", initials: "RA", color: "bg-orange-600" }, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
  { id: "7", category: "Regulatory", readTime: "6 min", date: "Feb 15, 2025", title: "SaMD Classification Under EU MDR Rule 11: A Practical Guide", excerpt: "Step-by-step guidance on classifying your Software as a Medical Device under EU MDR Rule 11 — with worked examples for common SaMD types.", author: { name: "James O'Brien", role: "Regulatory Specialist", initials: "JO", color: "bg-purple-600" }, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80" },
  { id: "8", category: "Manufacturing", readTime: "7 min", date: "Jan 30, 2025", title: "IQ/OQ/PQ Validation — What Every Medical Device Manufacturer Must Know", excerpt: "A practical walkthrough of the Installation, Operational, and Performance Qualification process for medical device manufacturing equipment.", author: { name: "Anna Mueller", role: "Process Validation Engineer", initials: "AM", color: "bg-cyan-600" }, image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80" },
  { id: "9", category: "Research", readTime: "5 min", date: "Jan 18, 2025", title: "From Research to Market: Commercialising a Medical Device Innovation", excerpt: "The critical steps — regulatory strategy, IP protection, clinical evidence, and funding — that transform a laboratory prototype into a commercially viable medical device.", author: { name: "Dr. Maria Vasquez", role: "Innovation Director", initials: "MV", color: "bg-pink-600" }, image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80" },
  { id: "10", category: "Compliance", readTime: "4 min", date: "Jan 8, 2025", title: "Post-Market Surveillance Under EU MDR: What Has Changed", excerpt: "Key changes to PMS requirements under EU MDR and IVDR — PSUR timelines, PMCF obligations, and practical approaches to meeting the new requirements.", author: { name: "Dr. James Hartwell", role: "VP of Regulatory Affairs", initials: "JH", color: "bg-blue-600" }, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" },
];

const CATEGORIES: ArticleCategory[] = ["All", "Compliance", "Software & AI", "Medical Devices", "Regulatory", "Manufacturing", "Research"];

const CATEGORY_COLORS: Record<string, string> = {
  "Compliance": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Software & AI": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Medical Devices": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Regulatory": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Manufacturing": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Research": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
};

export default function Insights() {
  const [filter, setFilter] = useState<ArticleCategory>("All");

  useSEO({
    title: "Insights",
    description: "Expert insights, articles, and guides on medical device development, regulatory compliance (ISO 13485, EU MDR), software & AI, and medical technology innovation.",
    keywords: "medical device insights, regulatory compliance articles, ISO 13485 guide, EU MDR updates, medical technology blog",
    path: "/insights",
  });

  const featured = articles.find((a) => a.featured)!;
  const filtered = (filter === "All" ? articles : articles.filter((a) => a.category === filter)).filter((a) => !a.featured);

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-20 bg-[#060d17] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="page-container text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Knowledge & Expertise</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5">Insights</h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">Expert analysis, practical guides, and industry updates from the RMT Medical Technologies team.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-12 bg-background">
        <div className="page-container">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-0 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all group cursor-pointer">
              <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-4 left-4 text-xs px-2.5 py-1 rounded-full font-semibold ${CATEGORY_COLORS[featured.category]}`}>{featured.category}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime} read</span>
                  <span>��</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">Featured</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${featured.author.color} flex items-center justify-center text-white text-xs font-bold`}>{featured.author.initials}</div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{featured.author.name}</p>
                      <p className="text-muted-foreground text-xs">{featured.author.role}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER + ARTICLES GRID */}
      <section className="pb-20 bg-background">
        <div className="page-container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
                {cat}
              </button>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mb-6">Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-semibold ${CATEGORY_COLORS[article.category]}`}>{article.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} min</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full ${article.author.color} flex items-center justify-center text-white text-xs font-bold`}>{article.author.initials}</div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-none">{article.author.name.split(" ").slice(-1)[0]}</p>
                        <p className="text-xs text-muted-foreground leading-none mt-0.5">{article.date.split(",")[0]}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-lg">
              <BookOpen className="mr-2 w-4 h-4" /> Load More Articles
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
