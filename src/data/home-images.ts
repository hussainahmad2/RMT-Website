/** Medical industry imagery — equipment, labs, manufacturing, diagnostics */

import heroIndustry from "@/assets/hero-bg.webp";
import innovationBiomaterials from "@/assets/innovation-biomaterials.jpg";

export const HOME_IMAGES = {
  heroIndustry: {
    src: heroIndustry,
    alt: "Revive Medical Technologies Inc. headquarters and industry facility",
  },
  heroSlides: [
    { src: heroIndustry, alt: "Revive Medical Technologies Inc. headquarters and industry facility" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=85", alt: "Medical professional using digital health technology" },
    { src: "https://images.unsplash.com/photo-1559757175-08a4f7e5bbf9?w=1920&q=85", alt: "Advanced medical imaging and diagnostics equipment" },
    { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=85", alt: "Medical device engineering and manufacturing" },
    { src: "https://images.unsplash.com/photo-1532187863486-abf9db8811ee?w=1920&q=85", alt: "Laboratory microscopy and quality testing" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Medical electronics and embedded systems" },
  ],
  showcase: [
    {
      src: "https://images.unsplash.com/photo-1559757175-08a4f7e5bbf9?w=600&q=85",
      alt: "MRI and advanced medical imaging equipment",
      label: "Diagnostics",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=85",
      alt: "Medical device engineering and precision manufacturing",
      label: "Manufacturing",
    },
    {
      src: "https://images.unsplash.com/photo-1532187863486-abf9db8811ee?w=600&q=85",
      alt: "Laboratory microscopy and quality testing",
      label: "Quality Lab",
    },
    {
      src: "https://images.unsplash.com/photo-1516549655169-fa992718ffa8?w=600&q=85",
      alt: "Surgical instruments and medical tools",
      label: "Surgical Tools",
    },
  ],
  industry: [
    {
      src: "https://media.istockphoto.com/id/2269449990/photo/camera-slides-by-a-business-certification-of-iso-13485.jpg?s=612x612&w=0&k=20&c=0IvP4_VUbq_WgMeS9-ym2fNNVyhxsXv8otkolMwchzQ=",
      alt: "Modern hospital and clinical environment",
      title: "Clinical Environments",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85",
      alt: "Biomedical engineering and device prototyping",
      title: "Device Engineering",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1723773736797-8d05f469c6df?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Medical equipment in a clinical setting",
      title: "Biomaterials",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85",
      alt: "Medical diagnostics and patient care technology",
      title: "Patient Care Tech",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85",
      alt: "Electronics and embedded medical systems",
      title: "Embedded Systems",
    },
    {
      src: "https://images.unsplash.com/photo-1551601651-2a8555f0a1d8?w=800&q=85",
      alt: "Surgical suite and operating equipment",
      title: "Surgical Equipment",
    },
  ],
  stats: "https://images.unsplash.com/photo-1532187863486-abf9db8811ee?w=1600&q=80",
  capabilities: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80",
  services: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
  whyRmt: "https://thumbs.dreamstime.com/b/doctor-medical-healthcare-icon-interface-medical-healthcare-concept-doctor-hospital-medical-icons-modern-interface-109106306.jpg",
  process: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
  certifications: "https://images.unsplash.com/photo-1579684385127-1ef15d558a9a?w=1600&q=80",
  global: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&fit=crop",
  cta: "https://images.unsplash.com/photo-1551601651-2a8555f0a1d8?w=1600&q=80",
  innovation: [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85",
    innovationBiomaterials,
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
  ],
} as const;
