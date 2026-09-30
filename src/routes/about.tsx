import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { Award, Users, Rocket, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samson Hitech" },
      {
        name: "description",
        content: "Samson Hitech specializes in AI agents, voice automation, Salesforce & ServiceNow integrations, custom web and mobile development.",
      },
      { property: "og:title", content: "About — Samson Hitech" },
      { property: "og:description", content: "Our story, values, and the team building the intelligent web." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { v: "7+", l: "Years" },
  { v: "24/7", l: "Support" },
  { v: "20+", l: "AI & Automation Solutions Built" },
];

const values = [
  {
    icon: Rocket,
    title: "Velocity with craft",
    desc: "We ship fast without cutting corners. Every line of code is reviewed, tested, and built to last.",
  },
  {
    icon: Shield,
    title: "Trust by default",
    desc: "Transparent process, predictable timelines, and code you fully own from day one.",
  },
  {
    icon: Users,
    title: "True partnership",
    desc: "We embed with your team — not just a vendor, a co-founder of the product mission.",
  },
  {
    icon: Award,
    title: "Outcomes",
    desc: "We measure success in your metrics: revenue, retention, and reach. Not story points.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <SectionHeading
          eyebrow="About us"
          title="AI-Native. Enterprise-Ready. Future-Focused."
          description="Samson Hitech is a technology studio specializing in AI agents, voice automation, Salesforce and ServiceNow integrations, custom web development, and mobile applications. We partner with startups and enterprises to build intelligent systems that automate workflows, improve efficiency, and create exceptional digital experiences."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border/60 bg-surface/50 p-6 hover-lift">
              <div className="text-4xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border/60 bg-surface/50 p-7 hover-lift">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-primary/20 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
