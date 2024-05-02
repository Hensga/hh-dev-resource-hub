export const baseUrl = "https://hh-dev-resource-hub.netlify.app";

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
  ];
}
