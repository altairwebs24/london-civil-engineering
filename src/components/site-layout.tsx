import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { companyAddress, whatsappUrl } from "@/lib/site-media";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner page-width">
        <Link to="/" className="brand-lockup" aria-label="London Group home">
          <span className="brand-mark"><Building2 aria-hidden="true" /></span>
          <span className="brand-name">LONDON GROUP<span>& CIVIL ENGINEERING</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "nav-link is-active" }} className="nav-link">{item.label}</Link>)}
        </nav>
        <Button asChild className="header-cta"><Link to="/contact">Start a project <ArrowRight aria-hidden="true" /></Link></Button>
        <Button
          variant="outline"
          size="icon"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav page-width" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="mobile-nav-link">{item.label}<ArrowRight aria-hidden="true" /></Link>)}
          <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-width">
        <div className="footer-brand-column">
          <Link to="/" className="brand-lockup footer-brand" aria-label="London Group home">
            <span className="brand-mark"><Building2 aria-hidden="true" /></span>
            <span className="brand-name">LONDON GROUP<span>& CIVIL ENGINEERING</span></span>
          </Link>
          <p>Construction, engineering and infrastructure services in South Africa.</p>
        </div>
        <div className="footer-location"><MapPin aria-hidden="true" /><span>{companyAddress}</span></div>
        <Button asChild variant="outline" className="footer-whatsapp"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight aria-hidden="true" /></a></Button>
      </div>
      <div className="footer-bottom page-width"><span>London Group & Civil Engineering</span><span>Built with purpose.</span></div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-intro">
      <div className="page-width page-intro-inner">
        <span className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="page-width contact-band-inner">
        <div><span className="eyebrow eyebrow-on-dark">LET'S GET TO WORK</span><h2>Have a project in mind?</h2><p>Start a conversation with our team on WhatsApp.</p></div>
        <Button asChild variant="secondary" size="lg"><a href={whatsappUrl} target="_blank" rel="noreferrer">Chat with us <ArrowRight aria-hidden="true" /></a></Button>
      </div>
    </section>
  );
}