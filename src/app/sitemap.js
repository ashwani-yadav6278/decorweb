import decorations from "../../data/decorations";

export default function sitemap() {
  const baseUrl = "https://www.balloonzaa.in";

  // Safe slug function
  const safeSlug = (slug) =>
    slug
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "-")
      .replace(/-+/g, "-")
      .trim();

  const galleryUrls = decorations.map((item) => ({
    url: `${baseUrl}/gallery/${safeSlug(item.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    ...galleryUrls,
  ];
}