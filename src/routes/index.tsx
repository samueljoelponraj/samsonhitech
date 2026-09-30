import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";

import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samson Hitech — AI-Native Tech Studio" },
      { name: "description", content: "We build AI agents, mobile apps, and scalable web platforms. 7+ years, 50+ projects shipped." },
      { property: "og:title", content: "Samson Hitech — AI-Native Tech Studio" },
      { property: "og:description", content: "AI agents, mobile apps, web platforms — engineered for ambitious teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <SectionHeading
          eyebrow="What we do"
          title="Services engineered for scale"
          description="A focused suite of capabilities to take your product from concept to category leader."
        />
        <ServicesGrid />
      </section>
      <CTA />
    </Layout>
  );
}
