import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.premier.furniture";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}