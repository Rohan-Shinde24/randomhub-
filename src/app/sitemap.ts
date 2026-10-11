
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://randomhub-ten.vercel.app";

  const pages = [
    { path: "", priority: 1.0 },
    { path: "/how-to-use", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/privacy-policy", priority: 0.4 },
    { path: "/terms", priority: 0.4 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
