import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "lachocolateraecuador.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "La Chocolatera — Salinas, Ecuador",
      template: "%s | La Chocolatera",
    },
    description:
      locale === 'es' ? "Guía de viaje a La Chocolatera en Salinas, Ecuador. Descubra el fenómeno natural del 'mar chocolate', la colonia de lobos marinos, y el punto más occidental del continente ecuatoriano." :
      locale === 'zh' ? "La Chocolatera 旅行指南——探索厄瓜多尔大陆最西端的自然奇观：独特的\"巧克力海\"现象、海狮栖息地、以及惊涛拍岸的太平洋悬崖海岸。" :
      "A travel guide to La Chocolatera in Salinas, Ecuador. Discover the unique 'chocolate sea' phenomenon, the sea lion colony, and the westernmost point of mainland Ecuador.",
    keywords: [
      "La Chocolatera",
      "Salinas tourism",
      "Ecuador chocolate sea",
      "Westernmost point Ecuador",
      "Sea lions Ecuador",
      "La Lobería",
      "Punta Santa Elena",
      "Naval base Salinas",
      "Surfing Ecuador",
      "Pacific coast Ecuador",
    ],
    authors: [{ name: "La Chocolatera Travel Guide" }],
    creator: "La Chocolatera Travel Guide",
    publisher: "La Chocolatera Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title: "La Chocolatera — Salinas, Ecuador",
    description: (locale === 'es' ? "Guía de viaje a La Chocolatera en Salinas, Ecuador. Descubre el fenómeno natural del mar chocolate, la colonia de lobos marinos, y el punto más occidental del continente ecuatoriano." :
      (locale === 'zh' ? "La Chocolatera 旅行指南——探索厄瓜多尔大陆最西端的自然奇观：独特的\"巧克力海\"现象、海狮栖息地、以及惊涛拍岸的太平洋悬崖海岸。" :
      "A travel guide to La Chocolatera in Salinas, Ecuador. Discover the unique chocolate sea phenomenon, the sea lion colony, and the westernmost point of mainland Ecuador.")),
      siteName: "La Chocolatera Travel Guide",
      images: [
        {
          url: "/gallery/la-chocolatera (1).jpg",
          width: 1200,
          height: 630,
          alt: "La Chocolatera - Salinas, Ecuador",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "La Chocolatera — Salinas, Ecuador",
      description:
        "A travel guide to La Chocolatera in Salinas, Ecuador.",
      images: ["/gallery/la-chocolatera (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <SchemaScript locale={locale} />
      <body>{children}</body>
    </html>
  );
}
