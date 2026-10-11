
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://randomhub-ten.vercel.app";
  const pages = ["", "/how-to-use", "/about", "/privacy-policy", "/terms"];

  return pages.map((page) => ({ url: `${baseUrl}${page}` }));
}
