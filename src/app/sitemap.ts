import type { MetadataRoute } from "next"
import { services } from "@/data/services"
import { posts } from "@/data/posts"

const BASE = "https://www.karmainmotion88.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/packages", "/reviews", "/about", "/contact", "/book", "/blog"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  )

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const postRoutes = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...serviceRoutes, ...postRoutes]
}
