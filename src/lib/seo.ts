import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const SITE_NAME = "Revive Medical Technologies Inc";

export function useSEO({ title, description, keywords, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setOG = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setOG("og:title", title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`);
    setOG("og:description", description);
    setOG("og:type", "website");
    if (ogImage) setOG("og:image", ogImage);
  }, [title, description, keywords, ogImage]);
}
