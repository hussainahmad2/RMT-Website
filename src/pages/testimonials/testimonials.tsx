import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Maximize2, Play, Quote, Star, X,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  TESTIMONIAL_VIDEOS,
  TESTIMONIALS_HERO_IMAGE,
  type TestimonialVideo,
} from "@/data/testimonials";

const HERO_IMAGES = [
  TESTIMONIALS_HERO_IMAGE,
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=85",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85",
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
      ))}
    </div>
  );
}

function SpotlightPlayer({
  testimonial,
  onFullscreen,
}: {
  testimonial: TestimonialVideo;
  onFullscreen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(false);
    setReady(false);
    video.pause();
    video.src = testimonial.src;
    video.load();
  }, [testimonial.src]);

  const play = () => {
    void videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <div className="relative aspect-video sm:aspect-[16/9]">
        <video
          ref={videoRef}
          className="h-full w-full object-contain bg-black"
          controls={playing}
          playsInline
          preload="none"
          onLoadedData={() => setReady(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 hover:bg-black/50 transition-colors"
            aria-label={`Play ${testimonial.title}`}
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 ring-4 ring-primary/20">
              <Play className="h-9 w-9 ml-1" fill="currentColor" />
            </span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Play Full Quality</span>
          </button>
        )}
        <button
          type="button"
          onClick={onFullscreen}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/10"
          aria-label="Fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary text-primary-foreground">
          {testimonial.category}
        </span>
        {ready && !playing && (
          <span className="absolute bottom-4 right-4 text-[10px] text-white/50 uppercase tracking-wider">Ready</span>
        )}
      </div>
    </div>
  );
}

function ThumbnailStrip({
  items,
  activeId,
  onSelect,
}: {
  items: TestimonialVideo[];
  activeId: string;
  onSelect: (t: TestimonialVideo) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
      {items.map((t, i) => {
        const active = t.id === activeId;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t)}
            className={`shrink-0 w-[140px] sm:w-[160px] text-left rounded-xl border overflow-hidden transition-all ${
              active
                ? "border-primary ring-2 ring-primary/30 shadow-lg"
                : "border-border hover:border-primary/40 opacity-80 hover:opacity-100"
            }`}
          >
            <div className="aspect-video bg-[#060d17] flex items-center justify-center relative">
              <Play className={`w-6 h-6 ${active ? "text-primary" : "text-white/40"}`} fill={active ? "currentColor" : "none"} />
              <span className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-2.5 bg-card border-t border-border">
              <p className="text-[11px] font-semibold text-foreground line-clamp-1">{t.title}</p>
              <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">{t.category}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function QuoteCard({ testimonial }: { testimonial: TestimonialVideo }) {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <StarRating />
      <p className="text-foreground text-lg sm:text-xl font-medium leading-relaxed mt-4 mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="h-px bg-border mb-5" />
      <h3 className="font-heading font-bold text-foreground text-lg">{testimonial.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{testimonial.subtitle}</p>
      {testimonial.client && (
        <p className="text-xs font-bold uppercase tracking-widest text-primary mt-3">{testimonial.client}</p>
      )}
    </div>
  );
}

function FullscreenPlayer({ testimonial, onClose }: { testimonial: TestimonialVideo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = testimonial.src;
    v.load();
    void v.play();
  }, [testimonial.src]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white flex items-center gap-2 text-sm">
          <X className="w-5 h-5" /> Close
        </button>
        <video ref={videoRef} className="w-full max-h-[85vh] rounded-xl bg-black" controls playsInline preload="metadata" />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState<TestimonialVideo | null>(null);

  const current = TESTIMONIAL_VIDEOS[active];

  useSEO({
    title: "Client Testimonials",
    description: "Video testimonials from RMT Medical Technologies clients — partnership, quality, and results across medical device and software development.",
    keywords: "RMT testimonials, client reviews, medical technology partners",
    path: "/testimonials",
  });

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setActive((i) => (i - 1 + TESTIMONIAL_VIDEOS.length) % TESTIMONIAL_VIDEOS.length);
  const goNext = () => setActive((i) => (i + 1) % TESTIMONIAL_VIDEOS.length);

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero with rotating background */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#060d17]">
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={heroIdx}
              src={HERO_IMAGES[heroIdx]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1 }, scale: { duration: 5 } }}
              aria-hidden
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/90 to-[#060d17]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-transparent to-[#060d17]/60" />
        </div>

        <div className="page-container relative z-10 pb-14 pt-28 w-full text-center">
          <AnimatedSection immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 mb-5 backdrop-blur-sm">
              <Star className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.18em]">Client Voices</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Testimonials</h1>
            <div className="h-px w-16 bg-primary mx-auto mb-5" />
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Hear directly from the partners who trust RMT across regulatory, manufacturing, and software delivery.
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <Button asChild size="lg" className="rounded-xl font-semibold">
                <a href="#spotlight">Watch Stories</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/10 bg-primary">
        <div className="page-container py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
            {[
              { val: "200+", label: "Projects" },
              { val: "98%", label: "Satisfaction" },
              { val: "30+", label: "Countries" },
              { val: String(TESTIMONIAL_VIDEOS.length), label: "Video Stories" },
            ].map((s) => (
              <div key={s.label} className="text-center text-white px-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold">{s.val}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight player */}
      <section id="spotlight" className="py-16 md:py-20 scroll-mt-24">
        <div className="page-container">
          <AnimatedSection immediate className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">Featured Story</p>
                <div className="h-px w-12 bg-primary/50 mb-3" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Client Spotlight</h2>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={goPrev} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Previous">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-muted-foreground tabular-nums min-w-[3rem] text-center">
                  {String(active + 1).padStart(2, "0")} / {String(TESTIMONIAL_VIDEOS.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={goNext} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Next">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <SpotlightPlayer testimonial={current} onFullscreen={() => setFullscreen(current)} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <QuoteCard testimonial={current} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <ThumbnailStrip items={TESTIMONIAL_VIDEOS} activeId={current.id} onSelect={(t) => setActive(TESTIMONIAL_VIDEOS.findIndex((v) => v.id === t.id))} />
        </div>
      </section>

      {/* All stories grid */}
      <section className="py-16 border-t border-border bg-secondary/20">
        <div className="page-container">
          <AnimatedSection immediate className="mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">All Stories</p>
            <div className="h-px w-12 bg-primary/50 mb-3" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Every Client Voice</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {TESTIMONIAL_VIDEOS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActive(i);
                  document.getElementById("spotlight")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group text-left rounded-2xl border border-border bg-card p-5 hover:border-primary/35 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-heading font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{t.category}</span>
                      <StarRating />
                    </div>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2 italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      Watch video <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060d17] text-white">
        <div className="page-container text-center">
          <AnimatedSection immediate>
            <h2 className="font-heading text-3xl font-bold mb-3">Your Story Could Be Next</h2>
            <div className="h-px w-12 bg-primary mx-auto mb-6" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl font-semibold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {fullscreen && <FullscreenPlayer testimonial={fullscreen} onClose={() => setFullscreen(null)} />}
      </AnimatePresence>
    </div>
  );
}
