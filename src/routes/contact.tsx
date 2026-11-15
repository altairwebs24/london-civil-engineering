import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-layout";
import { companyAddress, mapUrl, whatsappUrl } from "@/lib/site-media";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | London Group & Civil Engineering" },
      { name: "description", content: "Contact London Group & Civil Engineering on WhatsApp or find the office in Merewent, Bluff, South Africa." },
      { property: "og:title", content: "Contact London Group & Civil Engineering" },
      { property: "og:description", content: "Let's talk construction, engineering plans and storm-water services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="CONTACT" title="Let’s talk about your project." intro="Tell us what you’re working on. We’re ready to start a conversation." />
        <section className="contact-details page-width">
          <a className="contact-detail-row contact-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="contact-detail-icon"><MessageCircle aria-hidden="true" /></span><span className="contact-detail-copy"><span className="service-number">WHATSAPP</span><strong>076 688 9366</strong><span>Message London Group & Civil Engineering</span></span><ArrowUpRight className="contact-external" aria-hidden="true" />
          </a>
          <a className="contact-detail-row contact-location" href={mapUrl} target="_blank" rel="noreferrer">
            <span className="contact-detail-icon"><MapPin aria-hidden="true" /></span><span className="contact-detail-copy"><span className="service-number">OUR LOCATION</span><strong>Visit us in Merewent</strong><span>{companyAddress}</span></span><ArrowUpRight className="contact-external" aria-hidden="true" />
          </a>
          <div className="contact-message"><span className="eyebrow"><span className="eyebrow-mark" />START A CONVERSATION</span><h2>Construction, plans or storm-water—we’re here to help you move forward.</h2><Button asChild variant="default" size="lg"><a href={whatsappUrl} target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}