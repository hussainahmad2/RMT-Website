export interface TestimonialVideo {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  quote?: string;
  client?: string;
}

export const TESTIMONIALS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=85";

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: "1",
    src: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    title: "Trusted Partner in Medical Innovation",
    subtitle: "Healthcare client on regulatory and product development support",
    category: "Product Development",
    quote: "RMT understood our regulatory pathway and delivered on every milestone.",
    client: "Healthcare Innovator",
  },
  {
    id: "2",
    src: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    title: "Quality You Can Rely On",
    subtitle: "Industry partner on laboratory testing and compliance",
    category: "Microbiology",
    quote: "Their laboratory rigor and turnaround time exceeded our expectations.",
    client: "Pharma Partner",
  },
  {
    id: "3",
    src: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    title: "End-to-End Excellence",
    subtitle: "Client experience with RMT's integrated service delivery",
    category: "Manufacturing",
    quote: "From design to cleanroom production — one team, one standard of quality.",
    client: "Device Manufacturer",
  },
  {
    id: "4",
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    title: "A Team That Delivers",
    subtitle: "Long-term partner on device development and scale-up",
    category: "Regulatory",
    quote: "They became an extension of our team through every submission cycle.",
    client: "MedTech Startup",
  },
];
