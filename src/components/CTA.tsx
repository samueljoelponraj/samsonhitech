import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 mt-32">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface/60 p-10 md:p-16">
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl animate-[glow-pulse_5s_ease-in-out_infinite]" />
        <div className="relative max-w-2xl">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Ready to ship something <span className="text-gradient">remarkable?</span>
          </h3>
          <p className="mt-4 text-muted-foreground">
            Let's turn your idea into a product your users love. Free 30-minute strategy call, no strings attached.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-violet transition-all"
          >
            Book a call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
