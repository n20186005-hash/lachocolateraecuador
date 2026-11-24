import { MetadataRoute } from 'next';

import { guides } from "@/data/guides";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'lachocolateraecuador.com'}`;

  return [
    ...guides.flatMap(({slug}) => ["en","es","zh"].map(locale => ({
      url: `https://www.lachocolateraecuador.com/${locale}/nearby/${slug}`,
      alternates: { languages: Object.fromEntries(["en","es","zh"].map(l => [l,`https://www.lachocolateraecuador.com/${l}/nearby/${slug}`])) }
    }))),
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}
