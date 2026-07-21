import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { writeFileSync } from "fs";
import { buildSitemapXml } from "./src/lib/sitemap-urls";

function sitemapPlugin(): Plugin {
  const writeSitemap = (outDir: string) => {
    writeFileSync(path.resolve(outDir, "sitemap.xml"), buildSitemapXml(), "utf-8");
  };

  return {
    name: "generate-sitemap",
    buildStart() {
      writeSitemap(path.resolve(import.meta.dirname, "public"));
    },
    closeBundle() {
      writeSitemap(path.resolve(import.meta.dirname, "dist"));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemapPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("@tanstack")) return "query";
            if (id.includes("lucide-react") || id.includes("react-icons")) return "icons";
            if (id.includes("recharts")) return "charts";
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
