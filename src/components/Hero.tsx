import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 -z-10 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary animate-[fade-up_0.6s_ease-out_forwards]">
            <Sparkles className="h-3 w-3" />
            AI-Native Tech Studio
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] animate-[fade-up_0.8s_ease-out_forwards]">
            AI Agents That Work.
            <br />
            <span className="text-gradient">Software That Scales.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-[fade-up_1s_ease-out_forwards]">
            Samson Hitech develops AI agents and voice assistants that integrate with Salesforce, ServiceNow, and enterprise systems—along with high-performance web and mobile applications built for growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-up_1.2s_ease-out_forwards]">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-violet transition-all"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium hover:bg-surface-elevated transition-colors"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl animate-[fade-up_1.4s_ease-out_forwards]">
            {[
              { v: "7+", l: "Years" },
              { v: "24/7", l: "Support" },
              { v: "20+", l: "AI & Automation Solutions Built" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary/40 pl-4">
                <div className="text-3xl md:text-4xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
