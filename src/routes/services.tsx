import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Samson Hitech" },
      { name: "description", content: "AI agents, web & mobile apps, SEO, and content — a complete tech stack for modern teams." },
      { property: "og:title", content: "Services — Samson Hitech" },
      { property: "og:description", content: "Full-stack engineering, AI, and growth services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="Services"
          title="Every capability under one roof"
          description="From idea validation to production launch — and the AI layer that makes it intelligent."
        />
        <ServicesGrid />
      </section>
      <CTA />
    </Layout>
  );
}
