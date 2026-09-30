import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Monitor, Cloud, Brain, Code2, ArrowRight, Sparkles } from "lucide-react";
import digitalImg from "@/assets/service-digital.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import aiImg from "@/assets/service-ai.jpg";
import codeImg from "@/assets/service-code.jpg";

type Service = {
  id: string;
  icon: typeof Monitor;
  title: string;
  description: string;
  technologies: string[];
  cta: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "digital",
    icon: Monitor,
    title: "Digital Transformation",
    description: "Leverage modern technologies to redefine your business, streamline operations, and deliver exceptional customer experiences.",
    technologies: ["Java", "Python", "Kotlin", ".NET", "PHP", "Go", "React", "Angular", "Vue.js", "Node.js", "Flutter", "Spring Boot", "Microsoft", "Salesforce", "SAP", "ServiceNow"],
    cta: "Elevate Digital Transformation Journey",
    image: digitalImg,
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate software delivery with scalable cloud infrastructure, DevOps automation, CI/CD pipelines, and cloud-native architecture.",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Prometheus", "Grafana", "Ansible", "Helm", "ArgoCD", "Python", "Bash"],
    cta: "Explore Cloud Solutions",
    image: cloudImg,
  },
  {
    id: "ai",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Transform business operations with intelligent automation, predictive analytics, generative AI, and machine learning solutions designed for growth.",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Anthropic", "Google Gemini", "LangChain", "LlamaIndex", "Hugging Face", "Vertex AI", "Amazon SageMaker", "Azure AI", "Databricks", "MLflow", "Pandas", "NumPy"],
    cta: "Explore AI Solutions",
    image: aiImg,
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Software Development",
    description: "Build scalable web, mobile, and enterprise applications tailored to your unique business requirements.",
    technologies: ["Java", "Spring Boot", ".NET", "Node.js", "React", "Angular", "Next.js", "Vue.js", "Flutter", "React Native", "Swift", "Kotlin", "PostgreSQL", "MongoDB"],
    cta: "Build Your Solution",
    image: codeImg,
  },
];

export function ServicesGrid() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId)!;

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr] lg:items-stretch">
      {/* Sidebar */}
      <div className="flex flex-col gap-3">
        {services.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`group flex flex-1 items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all ${
                isActive
                  ? "border-primary/60 bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border-border/60 bg-surface/50 text-foreground hover:border-primary/40 hover:bg-surface-elevated"
              }`}
            >
              <s.icon className={`h-5 w-5 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
              <span className="text-sm font-semibold tracking-tight">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div className="relative rounded-3xl border border-border/60 bg-surface/40 p-6 md:p-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-[420px] aspect-square"
              style={{
                maskImage: "radial-gradient(circle at center, black 55%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 55%, transparent 80%)",
              }}
            >
              <img
                src={active.image}
                alt={active.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover mix-blend-screen opacity-90"
              />
            </div>
          </div>

          {/* Right content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              <span className="text-gradient">{active.title}</span>
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              {active.description}
            </p>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border/60" />
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                  <Sparkles className="h-3 w-3" /> Key Technologies
                </span>
                <div className="h-px flex-1 bg-border/60" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-surface-elevated px-3 py-1 text-xs text-foreground/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-violet transition-all"
            >
              {active.cta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
