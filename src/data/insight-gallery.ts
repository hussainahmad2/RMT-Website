import { INSIGHT_ARTICLES } from "@/data/insights-content";
import { getInsightPostDetail } from "@/data/insights-posts";

export interface InsightGalleryItem {
  id: string;
  articleId: string;
  src: string;
  thumb: string;
  category: "Insights";
  caption: string;
  year: string;
}

/** Same image set used by Gallery → Insights filter and the Insights tab. */
export const INSIGHT_GALLERY_ITEMS: InsightGalleryItem[] = INSIGHT_ARTICLES.flatMap((article) => {
  const detail = getInsightPostDetail(article.id);
  if (!detail) return [];

  const hero: InsightGalleryItem[] = [
    {
      id: `insight-${article.id}-hero`,
      articleId: article.id,
      src: detail.heroImage,
      thumb: detail.heroImage,
      category: "Insights",
      caption: article.title,
      year: article.date,
    },
  ];

  const extras: InsightGalleryItem[] = detail.galleryImages.map((image, index) => ({
    id: `insight-${article.id}-${index + 1}`,
    articleId: article.id,
    src: image,
    thumb: image,
    category: "Insights",
    caption: `${article.title} - Image ${index + 2}`,
    year: article.date,
  }));

  return [...hero, ...extras];
});
