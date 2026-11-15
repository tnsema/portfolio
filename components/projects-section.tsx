"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { OutlineButton, SolidButton } from "@/components/ui/buttons";

type Project = {
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string;
  tags?: string[];
  types?: string[];
  links?: { repo?: string | null; demo?: string | null };
};

const filters = ["All", "Software", "Cloud", "Cyber"] as const;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeFromUrl = searchParams.get("type")?.toLowerCase() ?? "all";
  const activeType = filters.find((filter) => filter.toLowerCase() === typeFromUrl) ?? "All";
  const visibleProjects = activeType === "All"
    ? projects
    : projects.filter((project) => project.types?.some((type) => type.toLowerCase() === activeType.toLowerCase()));

  function selectType(type: (typeof filters)[number]) {
    const params = new URLSearchParams(searchParams.toString());
    if (type === "All") params.delete("type");
    else params.set("type", type.toLowerCase());
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}#projects`, { scroll: false });
  }

  return (
    <section id="projects" className="order-3 min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="font-orbitron text-3xl font-bold sm:text-4xl">Projects</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
          <p className="mt-4 text-muted">Selected projects across software, cloud, and cybersecurity.</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Filter projects by type">
          {filters.map((filter) => {
            const selected = activeType === filter;
            return (
              <button key={filter} type="button" onClick={() => selectType(filter)} aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selected ? "border-primary bg-primary text-black shadow-sm" : "border-black/10 bg-white/70 text-muted hover:border-primary/50 hover:text-black"}`}>
                {filter}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-muted" aria-live="polite">
          Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}{activeType === "All" ? "" : ` in ${activeType}`}.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-lg border border-black/10 bg-white/70 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-36 overflow-hidden border-b border-black/10 bg-black">
                <img src="/project-card-cover.png" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-6"><p className="font-orbitron text-xs tracking-[0.25em] text-primary">PROJECT</p></div>
              </div>
              <div className="p-8">
                {p.types?.length ? (
                  <div className="mb-3 flex flex-wrap gap-2" aria-label={`${p.title} project types`}>
                    {p.types.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => selectType(type as (typeof filters)[number])}
                        className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-black transition hover:bg-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                ) : null}
                <h3 className="font-orbitron text-lg font-bold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.shortDescription ?? p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.tags?.map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-[#F6F1E6] px-3 py-1 text-xs text-muted">{tag}</span>)}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <SolidButton href={`/projects/${p.slug}`} className="px-4 py-2 font-semibold hover:-translate-y-0.5 hover:shadow-xl">Details <ArrowRight size={16} aria-hidden="true" /></SolidButton>
                  {p.links?.repo && p.links.repo !== "#" ? <OutlineButton href={p.links.repo} target="_blank" rel="noreferrer" className="px-4 py-2 font-semibold hover:-translate-y-0.5 hover:shadow-lg">Repo <Github size={16} aria-hidden="true" /></OutlineButton> : null}
                  {p.links?.demo && p.links.demo !== "#" ? <OutlineButton href={p.links.demo} target="_blank" rel="noreferrer" className="px-4 py-2 font-semibold hover:-translate-y-0.5 hover:shadow-lg">Demo <ExternalLink size={16} aria-hidden="true" /></OutlineButton> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center"><OutlineButton href="https://github.com/tnsema" target="_blank" rel="noreferrer" className="px-6 py-3 hover:-translate-y-0.5 hover:shadow-lg">View more on GitHub <Github size={17} aria-hidden="true" /></OutlineButton></div>
      </div>
    </section>
  );
}
