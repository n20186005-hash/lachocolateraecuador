"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "./LangProvider";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { guideLabels } from "@/data/guides";
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        padding: "0.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export function Nav() {
  const { t, locale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          La Chocolatera
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href={`/${locale}#nearby`}>{guideLabels[locale].nearby}</a>
          <a href={`/${locale}#about`}>{t.nav.about}</a>
          <a href={`/${locale}#visiting`}>{t.nav.visiting}</a>
          <a href={`/${locale}#transportation`}>{t.nav.transportation}</a>
          <a href={`/${locale}#tips`}>{t.nav.tips}</a>
          <a href={`/${locale}#gallery`}>{t.gallery.title}</a>
          <a href={`/${locale}#reviews`}>{t.nav.reviews}</a>
          <a href={`/${locale}#faq`}>{t.nav.faq}</a>
          <a href={`/${locale}#location`}>{t.nav.location}</a>
        </div>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export function Footer() {
  const { t, locale } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {guideLabels[locale].privacy}
        </Link>
        <Link href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {guideLabels[locale].terms}
        </Link>
        <Link href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {guideLabels[locale].cookies}
        </Link>
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {t.footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{t.footer.text}</p>
    </footer>
  );
}
