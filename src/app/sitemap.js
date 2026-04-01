import blogs from "@/data/blogs.json";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const base = siteConfig.siteUrl.replace(/\/+$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/buy-sell",
    "/contact",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...blogs.map((b) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    })),
  ];
}

