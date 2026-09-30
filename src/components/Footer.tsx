import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">
              Samson<span className="text-gradient">Hitech</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Engineering intelligent digital experiences. From AI agents to scalable web apps — we build the future.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@samsonhitech.in</li>
            <li> </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Samson Hitech. All rights reserved.
      </div>
    </footer>
  );
}
