export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} animate-[fade-up_0.7s_ease-out_forwards]`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-[glow-pulse_2s_ease-in-out_infinite]" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
