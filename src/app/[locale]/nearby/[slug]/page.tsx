import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components/SiteChrome";
import { LangProvider } from "@/components/LangProvider";
import type { Locale } from "@/i18n/translations";
import { guideLabels, guides } from "@/data/guides";

type Params = { params: Promise<{ locale: Locale; slug: string }> };
const domain = "https://www.lachocolateraecuador.com";
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, locale } = await params;
  const place = guides.find(g => g.slug === slug);
  if (!place || !place[locale]) return {};
  const url = (lang: string) => `${domain}/${lang}/nearby/${slug}`;
  return { title: place[locale].name, description: place[locale].intro,
    alternates: { canonical: url(locale), languages: Object.fromEntries(["en","es","zh"].map(l => [l,url(l)])) },
    openGraph: { title: place[locale].name, description: place[locale].tagline, url: url(locale), images: [domain + place.image] } };
}
export default async function Guide({ params }: Params) {
  const { slug, locale } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide || !guide[locale]) notFound();
  const p = guide[locale], l = guideLabels[locale];
  const rating = "rating" in p && typeof p.rating === "string" ? p.rating : "";
  const index = guides.indexOf(guide);
  const related = [1, 2, 3].map(offset => guides[(index + offset) % guides.length]);
  const parts = [
    p.intro, p.advice, p.features, p.about,
    <table key="info"><tbody>{[p.name,p.address,p.manager,p.hours,p.fee].map((value,i) => <tr key={i}><th scope="row">{l.facts[i]}</th><td>{value}</td></tr>)}</tbody></table>,
    p.hours,p.fee,p.access,p.character,
    <ol key="walk">{p.walk.map(step => <li key={step}>{step}</li>)}</ol>,
    p.caution,p.photo,p.stay,p.reviews,
    <div key="address"><address>{p.address}</address><a href={guide.map}>{l.map}</a></div>,
    <dl key="faq">{p.faq.map(([q,a]) => <div key={q}><dt>{q}</dt><dd>{a}</dd></div>)}</dl>,
    <ul key="sources">{guide.sources.map(url => <li key={url}><a href={url}>{new URL(url).hostname}</a></li>)}</ul>
  ];
  return <LangProvider initialLocale={locale}><Nav /><main>
    <header className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url("${guide.image}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="hero-overlay" /><div className="hero-content">
        <p className="hero-tagline">{l.nearby}</p><h1 className="hero-title">{p.name}</h1>
        <p className="hero-subtitle">{p.tagline}</p><a className="hero-cta" href={guide.map}>{l.map}</a>
        <p className="guide-hours">{p.hours}</p><a href="#section-13">{rating || l.reviews}</a>
      </div>
    </header>
    <article className="place-guide">{parts.map((part,i) => <section key={l.sections[i]} id={`section-${i}`}>
      <h2 className="section-title">{l.sections[i]}</h2>{typeof part === "string" ? <p>{part}</p> : part}
    </section>)}
    <section><h2 className="section-title">{l.nearby}</h2>
      <ul>{related.map(place => <li key={place.slug}><a href={`/${locale}/nearby/${place.slug}`}>{place[locale].name}</a></li>)}</ul>
      <a href={`/${locale}#nearby`}>{l.nearby} · {guides.length}</a>
    </section></article>
  </main><Footer /></LangProvider>;
}
