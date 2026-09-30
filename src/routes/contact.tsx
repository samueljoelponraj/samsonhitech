import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Samson Hitech" },
      {
        name: "description",
        content: "Tell us about your project. Free 30-minute strategy call, no obligations.",
      },
      { property: "og:title", content: "Contact — Samson Hitech" },
      {
        property: "og:description",
        content: "Start a conversation with our team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : "";
    });
    // Use the submitter's email as replyTo
    if (payload.email) payload.replyTo = payload.email;

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Share a few details and we'll get back within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@samsonhitech.in" },
              { icon: MapPin, label: "Studio", value: "Remote · Worldwide" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/50 p-5"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-primary/20 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border/60 bg-surface/50 p-8 space-y-5"
          >
            {/* StaticForms Hidden Fields */}
            <input type="hidden" name="accessKey" value="sf_b512813f1b5c9e7219f53b8c" />
            <input type="hidden" name="subject" value="New enquiry from Samson Hitech" />
            <input type="hidden" name="replyTo" value="@email" />
            <input type="text" name="honeypot" style={{ display: "none" }} />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>

            <Field label="Company" name="company" placeholder="Acme Inc." />

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Project details
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your idea, timeline, and goals…"
                className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {loading ? "Sending..." : sent ? "Message sent ✓" : "Send message"}

              {!loading && !sent && <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm"
      />
    </div>
  );
}
