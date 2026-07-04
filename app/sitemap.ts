import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kortex-automation.vercel.app";
  const routes = [
    "",
    "/services",
    "/ai-agents",
    "/integrations",
    "/pricing",
    "/case-studies",
    "/contact",
    "/book-call",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
