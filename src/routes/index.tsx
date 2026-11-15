import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, DraftingCompass, HardHat, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, SiteFooter, SiteHeader } from "@/components/site-layout";
import { siteMedia } from "@/lib/site-media";
import heroVideo from "@/assets/hero-workspace.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "London Group & Civil Engineering | Building with Purpose" },
      { name: "description", content: "Construction, engineering plans and storm-water services in Merewent, Bluff, South Africa." },
      { property: "og:title", content: "London Group & Civil Engineering" },
      { property: "og:description", content: "Construction, engineering plans and storm-water services in South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={siteMedia.engineeringPlans} aria-hidden="true">
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="page-width hero-content">
            <span className="eyebrow eyebrow-on-dark"><span className="eyebrow-mark" />LONDON GROUP & CIVIL ENGINEERING</span>
            <h1>Building for<br /><span>what comes next.</span></h1>
            <p>Construction, engineering plans and storm-water services—considered from the ground up.</p>
            <div className="hero-actions">
              <Button asChild variant="secondary" size="lg"><Link to="/services">Explore our services <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="hero-outline"><Link to="/contact">Talk to our team</Link></Button>
            </div>
          </div>
          <a className="hero-scroll" href="#our-work"><ArrowDown aria-hidden="true" /><span>Explore London Group</span></a>
          <div className="hero-index"><span>01</span><i /><span>03</span></div>
        </section>
        <section id="our-work" className="home-intro page-width">
          <div className="intro-heading"><span className="eyebrow"><span className="eyebrow-mark" />WHAT WE DO</span><h2>Good work begins<br />with a <em>solid plan.</em></h2></div>
          <div className="intro-detail"><p>From the first technical drawing to the final site detail, we bring construction, engineering and water infrastructure together.</p><Link className="text-link" to="/about">Get to know us <ArrowRight aria-hidden="true" /></Link></div>
        </section>
        <section className="service-strip">
          <div className="page-width service-strip-grid">
            <Link className="service-teaser" to="/services"><span className="service-icon"><HardHat aria-hidden="true" /></span><span className="service-number">01 / CONSTRUCTION</span><h3>Construction & engineering</h3><span className="teaser-arrow"><ArrowRight aria-hidden="true" /></span></Link>
            <Link className="service-teaser" to="/services"><span className="service-icon"><DraftingCompass aria-hidden="true" /></span><span className="service-number">02 / DESIGN</span><h3>Plans & technical drawings</h3><span className="teaser-arrow"><ArrowRight aria-hidden="true" /></span></Link>
            <Link className="service-teaser" to="/services"><span className="service-icon"><Waves aria-hidden="true" /></span><span className="service-number">03 / INFRASTRUCTURE</span><h3>Storm-water services</h3><span className="teaser-arrow"><ArrowRight aria-hidden="true" /></span></Link>
          </div>
        </section>
        <section className="home-projects page-width">
          <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-mark" />ON THE GROUND</span><h2>Plans meet <em>progress.</em></h2></div><Link className="text-link" to="/projects">View our work <ArrowRight aria-hidden="true" /></Link></div>
          <div className="home-project-grid">
            <Link className="project-feature" to="/projects"><img src={siteMedia.buildingConstruction} alt="Construction team working on a building site" loading="lazy" /><span className="image-label">CONSTRUCTION & ENGINEERING <ArrowRight aria-hidden="true" /></span></Link>
            <Link className="project-side" to="/projects"><img src={siteMedia.stormwaterPipeline} alt="Storm-water pipeline installation across an earthwork site" loading="lazy" /><span className="image-label">STORM-WATER INFRASTRUCTURE <ArrowRight aria-hidden="true" /></span></Link>
          </div>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
