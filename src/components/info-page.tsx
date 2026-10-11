import type { ReactNode } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function InfoPage({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <main className="page-shell info-shell">
      <header className="info-topbar">
        <Link aria-label="RandomHub home" className="brand" href="/">
          <span className="brand-mark"><Sparkles size={19} /></span>
          <span>random<span className="brand-accent">hub</span></span>
        </Link>
        <Link className="back-to-tools" href="/">Random tools</Link>
      </header>
      <article className="info-content">
        <span className="eyebrow">RANDOMHUB</span>
        <h1>{title}</h1>
        <p className="info-summary">{summary}</p>
        <div className="info-body">{children}</div>
      </article>
      <footer className="page-footer info-footer">
        <Link className="brand footer-brand" href="/"><span className="brand-mark"><Sparkles size={16} /></span><span>random<span className="brand-accent">hub</span></span></Link>
        <nav aria-label="Legal and about" className="footer-links">
          <a href="/about">About</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </nav>
        <Link className="back-to-tools" href="/">Random tools</Link>
      </footer>
    </main>
  );
}