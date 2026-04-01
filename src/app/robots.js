import { siteConfig } from "@/lib/site";

export default function robots() {
  const base = siteConfig.siteUrl.replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}

