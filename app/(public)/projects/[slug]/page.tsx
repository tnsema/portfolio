import { getProjects, getProjectBySlug } from "@/api/api";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p: any) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center bg-[#F6F1E6]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-orbitron text-3xl font-bold">
            Project not found
          </h1>
          <p className="mt-4 text-muted">
            That project slug doesn’t exist in your JSON.
          </p>
          <a
            href="/#projects"
            className="mt-8 inline-block rounded-2xl bg-primary px-6 py-3 font-semibold text-black"
          >
            Back to Projects
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F6F1E6] to-white">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12 py-16">
        {/* Top */}
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div>
            <p className="text-sm tracking-[0.35em] uppercase text-muted">
              Project
            </p>
            <h1 className="mt-3 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold">
              {project.title}
            </h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-6 text-lg text-muted max-w-2xl">
              {project.description}
            </p>
          </div>

          <a
            href="/#projects"
            className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-5 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            ← Back
          </a>
        </div>

        {/* Image */}
        {project.images?.cover ? (
          <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <img
              src={project.images.cover}
              alt={project.title}
              className="h-[320px] w-full object-cover"
            />
          </div>
        ) : null}

        {/* Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Left */}
          <div className="md:col-span-2 space-y-8">
            {project.problem ? (
              <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
                <h2 className="font-orbitron text-xl font-bold">Problem</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
            ) : null}

            {project.approach?.length ? (
              <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
                <h2 className="font-orbitron text-xl font-bold">Approach</h2>
                <ul className="mt-4 space-y-3 text-muted">
                  {project.approach.map((a: string) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.outcome ? (
              <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
                <h2 className="font-orbitron text-xl font-bold">Outcome</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            ) : null}
          </div>

          {/* Right */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
              <h3 className="font-orbitron text-lg font-bold text-primary">
                Tags
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#F6F1E6] border border-black/10 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech */}
            {project.tech?.length ? (
              <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
                <h3 className="font-orbitron text-lg font-bold text-primary">
                  Tech
                </h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {project.tech.map((s: string) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm">
              <h3 className="font-orbitron text-lg font-bold text-primary">
                Links
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.links?.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Repo
                  </a>
                ) : null}

                {project.links?.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-primary px-4 py-2 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Demo
                  </a>
                ) : null}

                {project.links?.writeup ? (
                  <a
                    href={project.links.writeup}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Write-up
                  </a>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
