import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-semibold tracking-tight text-lg">
            Samson<span className="text-gradient">Hitech</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition shrink-0"
          >
            Start a Project
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 rounded-md hover:bg-secondary">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/50 px-6 py-4 flex flex-col gap-2 bg-background/95">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "py-2 text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
