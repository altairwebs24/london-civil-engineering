import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, DraftingCompass, HardHat, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, PageIntro, SiteFooter, SiteHeader } from "@/components/site-layout";
import { siteMedia } from "@/lib/site-media";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | London Group & Civil Engineering" },
      { name: "description", content: "Explore construction, civil engineering plans and storm-water services from London Group in Bluff, South Africa." },
      { property: "og:title", content: "Construction & Engineering Services | London Group" },
      { property: "og:description", content: "Construction, technical drawings and storm-water infrastructure services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { num: "01", label: "CONSTRUCTION", title: "Construction & engineering", text: "Construction and engineering work delivered with attention to the plan, the site and the details that bring them together.", image: siteMedia.buildingConstruction, alt: "Construction workers on a large building project", icon: HardHat },
  { num: "02", label: "PLANS & DESIGN", title: "Plans & technical drawings", text: "A clear drawing is a practical start. We support projects with plans and technical drawing services.", image: siteMedia.technicalDrawing, alt: "Engineer reviewing technical drawings with a hard hat and drafting tools", icon: DraftingCompass },
  { num: "03", label: "WATER INFRASTRUCTURE", title: "Storm-water services", text: "Storm-water planning and site services built around drainage, runoff and infrastructure needs.", image: siteMedia.stormwaterPipeline, alt: "New storm-water pipe being installed across a project site", icon: Waves },
];

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="OUR SERVICES" title="From drawing board to ground level." intro="Construction, planning and water infrastructure services for projects built to move forward." />
        <section className="services-list page-width">
          {services.map(({ num, label, title, text, image, alt, icon: Icon }) => (
            <article key={num} className="service-row">
              <div className="service-row-copy"><span className="service-number">{num} / {label}</span><span className="service-icon"><Icon aria-hidden="true" /></span><h2>{title}</h2><p>{text}</p><Button asChild variant="link" className="service-link"><Link to="/contact">Discuss this service <ArrowRight aria-hidden="true" /></Link></Button></div>
              <img src={image} alt={alt} loading="lazy" />
            </article>
          ))}
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}