import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, PageIntro, SiteFooter, SiteHeader } from "@/components/site-layout";
import { siteMedia } from "@/lib/site-media";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | London Group & Civil Engineering" },
      { name: "description", content: "A look at the construction, engineering and storm-water work behind London Group & Civil Engineering." },
      { property: "og:title", content: "Project Gallery | London Group & Civil Engineering" },
      { property: "og:description", content: "Construction sites, technical planning and storm-water infrastructure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { image: siteMedia.buildingConstruction, alt: "Team at work pouring concrete at a building construction site", type: "CONSTRUCTION", name: "Building & engineering" },
  { image: siteMedia.stormwaterPipeline, alt: "New concrete storm-water pipes and drain chamber under construction", type: "WATER INFRASTRUCTURE", name: "Storm-water pipeline" },
  { image: siteMedia.stormwaterDrainage, alt: "Storm-water drainage channel and pipe outlet being inspected", type: "SITE SERVICES", name: "Drainage inspection" },
  { image: siteMedia.technicalDrawing, alt: "Engineering plans and drafting tools ready for a project", type: "PLANNING", name: "Technical drawings" },
  { image: siteMedia.constructionSite, alt: "Engineer checking structural work on a building site", type: "CONSTRUCTION", name: "Site progress" },
  { image: siteMedia.planningMeeting, alt: "Construction team reviewing drawings together", type: "COLLABORATION", name: "Planning together" },
];

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="PROJECTS & WORK" title="The work speaks on site." intro="A glimpse into the construction, engineering and water infrastructure work behind our practice." />
        <section className="project-gallery page-width">
          {projects.map((project, index) => <article key={project.name} className={`gallery-item gallery-item-${index + 1}`}><img src={project.image} alt={project.alt} loading="lazy" /><div className="gallery-caption"><span className="service-number">{project.type}</span><h2>{project.name}</h2></div></article>)}
        </section>
        <section className="project-note page-width"><p>Every project starts with a conversation.</p><Button asChild variant="outline"><Link to="/contact">Talk with our team <ArrowRight aria-hidden="true" /></Link></Button></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}