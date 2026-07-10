import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://learningsemantics.com";
  return ["", "/platform", "/why-us", "/use-cases", "/company", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
    }),
  );
}
