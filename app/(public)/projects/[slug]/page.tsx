import { getProjects, getProjectBySlug } from "@/api/api";
import { ExternalLink, Layers3 } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({ slug: project.slug }));
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-orbitron text-xl font-bold sm:text-2xl">{children}</h2>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: any = await getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-orbitron text-3xl font-bold">Project not found</h1>
          <p className="mt-4 text-muted">That project does not exist in the project list.</p>
          <a href="/#projects" className="mt-8 inline-block rounded-2xl bg-primary px-6 py-3 font-semibold text-black">
            Back to projects
          </a>
        </div>
      </section>
    );
  }

  const cover = project.visuals?.find((visual: any) => visual.type === "image" && visual.url);
  const visuals = project.visuals?.filter((visual: any) => visual.url) ?? [];
  const links = [
    { label: "Repository", url: project.links?.repo, primary: false },
    { label: "Live demo", url: project.links?.demo, primary: true },
    { label: "Architecture diagram", url: project.links?.writeup, primary: false },
  ].filter((link) => link.url);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <a href="/#projects" className="inline-flex rounded-2xl border border-black/10 bg-white/70 px-5 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg">
          ← Back to projects
        </a>

        <header className="relative mt-7 overflow-hidden rounded-[2rem] bg-[#12100d] px-7 py-10 text-white shadow-xl sm:px-10 sm:py-14">
          <img src="/project-card-cover.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
          <div className="relative max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1.5 font-orbitron text-[10px] tracking-[0.2em] text-primary">
                <Layers3 size={14} aria-hidden="true" />
                CASE STUDY
              </span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                {project.status}
              </span>
            </div>
            <h1 className="mt-6 font-orbitron text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{project.title}</h1>
            <div className="mt-6 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">{project.tagline}</p>

            {project.technologies?.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((technology: any) => (
                  <span key={technology.name} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                    {technology.name}
                  </span>
                ))}
              </div>
            ) : null}

            {links.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className={link.primary ? "inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl" : "inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20"}>
                    {link.label}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        {cover ? (
          <figure className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <img src={cover.url} alt={cover.caption || project.title} className="h-[240px] w-full object-cover sm:h-[380px]" />
            {cover.caption ? <figcaption className="border-t border-black/10 px-6 py-3 text-sm text-muted">{cover.caption}</figcaption> : null}
          </figure>
        ) : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {project.problemStatement ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Problem & solution</SectionHeading>
                <div className="mt-6 space-y-5 text-muted leading-relaxed">
                  <div><h3 className="font-semibold text-black">Context</h3><p className="mt-1">{project.problemStatement.context}</p></div>
                  <div><h3 className="font-semibold text-black">Challenge</h3><p className="mt-1">{project.problemStatement.painPoint}</p></div>
                  <div><h3 className="font-semibold text-black">Solution</h3><p className="mt-1">{project.problemStatement.solution}</p></div>
                </div>
              </article>
            ) : null}

            {project.architecture ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Architecture</SectionHeading>
                <p className="mt-4 leading-relaxed text-muted">{project.architecture.summary}</p>
                {project.architecture.components?.length ? (
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {project.architecture.components.map((component: any) => (
                      <div key={component.layer} className="rounded-2xl border border-black/10 bg-[#F6F1E6]/70 p-5">
                        <h3 className="font-semibold">{component.layer}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{component.description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ) : null}

            {project.keyImplementations?.length ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Key implementations</SectionHeading>
                <div className="mt-6 space-y-5">
                  {project.keyImplementations.map((item: any) => (
                    <div key={item.title} className="flex gap-4"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" /><div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 leading-relaxed text-muted">{item.description}</p></div></div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.securityDecisions?.length ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Security decisions</SectionHeading>
                <div className="mt-6 space-y-5">
                  {project.securityDecisions.map((item: any) => (
                    <div key={item.title}><h3 className="font-semibold">{item.title}</h3><p className="mt-1 leading-relaxed text-muted">{item.decision}</p></div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.technicalChallenges?.length ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Technical challenges</SectionHeading>
                <div className="mt-6 space-y-6">
                  {project.technicalChallenges.map((item: any) => (
                    <div key={item.challenge} className="rounded-2xl border border-black/10 bg-[#F6F1E6]/70 p-5 text-muted leading-relaxed">
                      <p><span className="font-semibold text-black">Challenge: </span>{item.challenge}</p>
                      <p className="mt-3"><span className="font-semibold text-black">Resolution: </span>{item.solution}</p>
                      <p className="mt-3"><span className="font-semibold text-black">Outcome: </span>{item.outcome}</p>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {project.resilienceTesting?.length ? (
              <article className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm">
                <SectionHeading>Resilience testing</SectionHeading>
                <div className="mt-6 space-y-6">
                  {project.resilienceTesting.map((item: any) => (
                    <div key={item.test} className="border-l-2 border-primary pl-5 text-muted leading-relaxed"><h3 className="font-semibold text-black">{item.test}</h3><p className="mt-2"><span className="font-semibold text-black">Method: </span>{item.method}</p><p className="mt-2"><span className="font-semibold text-black">Observed: </span>{item.observation}</p><p className="mt-2"><span className="font-semibold text-black">Recovery: </span>{item.recovery}</p></div>
                  ))}
                </div>
              </article>
            ) : null}
          </div>

          <aside className="space-y-8">
            {project.technologies?.length ? (
              <div className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm"><h2 className="font-orbitron text-lg font-bold text-primary">Technologies</h2><ul className="mt-5 space-y-3">{project.technologies.map((technology: any) => <li key={technology.name}><p className="font-semibold">{technology.name}</p><p className="text-sm text-muted">{technology.category}</p></li>)}</ul></div>
            ) : null}
            {project.takeaways ? (
              <div className="rounded-3xl border border-black/10 bg-white/75 p-8 shadow-sm"><h2 className="font-orbitron text-lg font-bold text-primary">Takeaways</h2><h3 className="mt-5 font-semibold">Learnings</h3><ul className="mt-3 space-y-3 text-sm text-muted">{project.takeaways.learnings?.map((item: string) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul><h3 className="mt-6 font-semibold">Next steps</h3><ul className="mt-3 space-y-3 text-sm text-muted">{project.takeaways.futureRoadmap?.map((item: string) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul></div>
            ) : null}
          </aside>
        </div>

        {visuals.length > 1 ? (
          <div className="mt-12"><SectionHeading>Project visuals</SectionHeading><div className="mt-6 grid gap-6 sm:grid-cols-2">{visuals.slice(1).map((visual: any) => <figure key={visual.url} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"><img src={visual.url} alt={visual.caption} className="h-64 w-full object-cover" /><figcaption className="px-5 py-3 text-sm text-muted">{visual.caption}</figcaption></figure>)}</div></div>
        ) : null}
      </div>
    </section>
  );
}
