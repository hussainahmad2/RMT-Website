import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { applyRouteSeoToHtml, getAllRouteSeo } from "./src/lib/route-seo";
import { buildSitemapXml } from "./src/lib/sitemap-urls";

function routeSeoPlugin(): Plugin {
  return {
    name: "route-seo-html",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist");
      const templatePath = path.resolve(outDir, "index.html");
      const template = readFileSync(templatePath, "utf-8");

      for (const route of getAllRouteSeo()) {
        const html = applyRouteSeoToHtml(template, route);
        if (route.path === "/") {
          writeFileSync(templatePath, html, "utf-8");
          continue;
        }
        const dir = path.resolve(outDir, route.path.replace(/^\//, ""));
        mkdirSync(dir, { recursive: true });
        writeFileSync(path.join(dir, "index.html"), html, "utf-8");
      }
    },
  };
}

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
  plugins: [react(), tailwindcss(), sitemapPlugin(), routeSeoPlugin()],
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
