import { galleryData } from "@/data/galleryData";

export default function sitemap() {
  const baseUrl = "https://www.balloonzaa.in";

  const galleryUrls = galleryData.map((item) => ({
    url: `${baseUrl}/gallery/${item.slug}`,
    lastModified: new Date(),
    priority: 0.64,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },

    ...galleryUrls,
  ];
}