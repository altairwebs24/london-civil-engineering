import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Layers3, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, PageIntro, SiteFooter, SiteHeader } from "@/components/site-layout";
import { companyAddress, siteMedia } from "@/lib/site-media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | London Group & Civil Engineering" },
      { name: "description", content: "Meet London Group & Civil Engineering, serving construction, planning and storm-water needs in Bluff, South Africa." },
      { property: "og:title", content: "About London Group & Civil Engineering" },
      { property: "og:description", content: "Construction and civil engineering services based in Merewent, Bluff, South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="ABOUT LONDON GROUP" title="A practical approach to building." intro="London Group & Civil Engineering brings construction, engineering plans and storm-water services together." />
        <section className="about-main page-width">
          <div className="about-image-wrap"><img src={siteMedia.siteConsultation} alt="Engineers discussing a project together at a construction site" /><span className="image-caption">CONSIDER THE PLAN. RESPECT THE SITE.</span></div>
          <div className="about-copy"><span className="eyebrow"><span className="eyebrow-mark" />WHO WE ARE</span><h2>Grounded in the work. Focused on the <em>result.</em></h2><p>We work across construction and engineering, plan drawing, and storm-water services. Our approach is rooted in understanding each project’s needs and the practical work that brings it into the world.</p><p>Based in Merewent, Bluff, South Africa, we’re ready to hear about what you’re planning.</p><Button asChild variant="outline"><Link to="/contact">Get in touch <ArrowRight aria-hidden="true" /></Link></Button></div>
        </section>
        <section className="about-values"><div className="page-width about-values-grid"><div><span className="eyebrow eyebrow-on-dark"><span className="eyebrow-mark" />HOW WE WORK</span><h2>From clear thinking<br />to <em>solid ground.</em></h2></div><div className="value-item"><Compass aria-hidden="true" /><div><h3>Start with the details</h3><p>Good planning makes the next steps clearer.</p></div></div><div className="value-item"><Layers3 aria-hidden="true" /><div><h3>Connect the disciplines</h3><p>Plans, construction and infrastructure all shape the same outcome.</p></div></div><div className="value-item"><MapPin aria-hidden="true" /><div><h3>Rooted in Bluff</h3><p>{companyAddress}</p></div></div></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}