import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CinematicPageHero } from "@/components/CinematicPageHero";
import { useSEO } from "@/lib/seo";

interface GalleryItem {
  id: string;
  src: string;
  thumb: string;
  category: string;
  caption: string;
  year: string;
}

const items: GalleryItem[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", category: "Laboratory", caption: "Advanced research laboratory — PCB design and electronics prototyping", year: "2024" },
  { id: "2", src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80", category: "Testing", caption: "Quality control laboratory — analytical testing and characterisation", year: "2024" },
  { id: "3", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", category: "Team", caption: "R&D team collaborating on medical device formulation development", year: "2024" },
  { id: "4", src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80", category: "Team", caption: "Leadership team strategic planning session", year: "2023" },
  { id: "5", src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80", category: "Manufacturing", caption: "ISO 13485-certified cleanroom manufacturing facility", year: "2023" },
  { id: "6", src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80", category: "Engineering", caption: "Mechanical engineering and product design prototyping workshop", year: "2023" },
  { id: "7", src: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80", category: "Laboratory", caption: "Biomedical laboratory — cardiac device testing and characterisation", year: "2023" },
  { id: "8", src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80", category: "Testing", caption: "Microbiology laboratory — sterility and endotoxin testing", year: "2022" },
  { id: "9", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", category: "Engineering", caption: "Electronics and firmware development laboratory", year: "2022" },
  { id: "10", src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", category: "Team", caption: "Regulatory affairs team documentation review session", year: "2022" },
  { id: "11", src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&q=80", category: "Events", caption: "Medical technology conference — RMT exhibition stand", year: "2022" },
  { id: "12", src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80", category: "Manufacturing", caption: "Pharmaceutical development and drug formulation laboratory", year: "2021" },
  { id: "13", src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80", category: "Engineering", caption: "Wearable medical device prototype assembly", year: "2021" },
  { id: "14", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80", category: "Events", caption: "Annual company milestone celebration —200+ projects achieved", year: "2023" },
  { id: "15", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", category: "Team", caption: "Cross-functional training workshop for new team members", year: "2024" },
  { id: "16", src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80", category: "Events", caption: "ISO 13485 certification ceremony", year: "2021" },
];

const CATEGORIES = ["All", "Laboratory", "Testing", "Team", "Manufacturing", "Engineering", "Events"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useSEO({
    title: "Gallery",
    description: "A visual journey through RMT Medical Technologies — our laboratories, team, manufacturing facilities, and company milestones.",
    keywords: "RMT Medical Technologies gallery, medical device laboratory photos, company memories",
    path: "/gallery",
  });

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      {/* HERO */}
      <CinematicPageHero
        eyebrow="Our Story in Pictures"
        title="Gallery"
        description="Explore our laboratories, manufacturing facilities, team, and the milestones that have shaped RMT Medical Technologies."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85"
        fullHeight
      />

      {/* MILESTONES STRIP */}
      <section className="border-b border-white/10 bg-primary">
        <div className="page-container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
            {[
              { val: "2008", label: "Founded" },
              { val: "2011", label: "ISO 13485 Certified" },
              { val: "2020", label: "Global Expansion" },
              { val: "2023", label: "200+ Projects" },
            ].map((m) => (
              <div key={m.val} className="px-4 py-2 text-center text-white">
                <p className="font-heading text-2xl sm:text-3xl font-bold">{m.val}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER + GALLERY GRID */}
      <section className="py-12">
        <div className="page-container">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-start">
            <aside className="lg:sticky lg:top-20">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</p>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all lg:w-full lg:justify-start ${
                        filter === cat
                          ? "bg-primary text-white shadow-md"
                          : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              {filtered.length === 0 ? (
                <p className="py-16 text-center text-muted-foreground">No photos in this category yet.</p>
              ) : (
                <motion.div
                  key={filter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {filtered.map((item, i) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.04, 0.4) }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-border text-left transition-all duration-300 hover:border-primary/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={() => setLightbox(item)}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                        <img
                          src={item.thumb}
                          alt={item.caption}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">{item.category}</span>
                        <p className="mt-1.5 text-xs font-medium leading-snug text-white">{item.caption}</p>
                        <p className="mt-0.5 text-xs text-white/60">{item.year}</p>
                      </div>
                      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <ZoomIn className="h-3.5 w-3.5 text-white" />
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.caption} className="w-full object-contain max-h-[80vh]" />
              <div className="bg-background/95 backdrop-blur px-5 py-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full font-medium">{lightbox.category}</span>
                  <p className="text-foreground text-sm font-medium mt-2">{lightbox.caption}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{lightbox.year}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors shrink-0">
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
