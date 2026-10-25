import type { MetadataRoute } from "next";

const BASE = "https://www.surynetraenergy.com"; // TODO: replace with real domain

const routes = [
  "", "/about", "/solutions/epc", "/solutions/resco", "/solutions/open-access",
  "/solutions/om", "/resco", "/projects", "/sustainability", "/calculator",
  "/insights", "/contact", "/legal/privacy", "/legal/terms", "/legal/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }));
}
