import {
  getProjects,
  getCertificates,
  getBadges,
  getQualifications,
} from "@/api/api";

export default async function Page() {
  const projects = await getProjects();
  const certificates = await getCertificates();
  const badges = await getBadges();
  const qualifications = await getQualifications();
  return (
    <>
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#F6F1E6] via-white to-white"
      >
        {/* Subtle grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply hero-grain" />

        {/* Soft decorative shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-28 left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float-slower" />
        <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <p className="text-sm tracking-[0.35em] uppercase text-muted animate-fade-up">
                Portfolio
              </p>

              <h1 className="mt-4 font-orbitron text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl leading-[1.05] animate-fade-up-delay">
                Thobile{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Sema</span>
                  <span className="absolute -bottom-2 left-0 h-3 w-full bg-primary/35 blur-[1px] rounded-md" />
                </span>
              </h1>

              {/* Accent line */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3 animate-fade-up-delay2">
                <span className="h-1 w-10 rounded-full bg-primary" />
                <span className="h-1 w-24 rounded-full bg-primary/40" />
              </div>

              <h2 className="mt-6 text-lg sm:text-xl md:text-2xl text-muted animate-fade-up-delay2">
                Cybersecurity • Software Engineering • AI (Exploring)
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-muted mx-auto md:mx-0 animate-fade-up-delay3">
                I focus on cybersecurity and build practical projects that show
                real skills. I use development knowledge to understand and
                secure systems end-to-end.
              </p>

              {/* CTA row */}
              <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up-delay3">
                <a
                  href="#projects"
                  className="group rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <span className="inline-flex items-center gap-2">
                    View Projects
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact
                </a>

                <a
                  href="https://github.com/tnsema"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/tnsema/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-7 flex items-center justify-center md:justify-start gap-2 text-sm text-muted animate-fade-up-delay4">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
                <span>Based in South Africa • Open to opportunities</span>
              </div>

              {/* Scroll hint */}
              <div className="mt-10 hidden md:flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted/80 animate-fade-up-delay4">
                <span>Scroll</span>
                <span className="inline-block h-6 w-[2px] bg-black/10 relative overflow-hidden rounded-full">
                  <span className="absolute top-0 left-0 h-3 w-full bg-primary animate-scroll-line" />
                </span>
              </div>
            </div>

            {/* RIGHT — faded image presence */}
            <div className="relative hidden md:block min-h-[520px]">
              {/* Photo */}
              <img
                src="/b&w.jpg"
                alt=""
                className="pointer-events-none absolute right-[-6%] top-1/2 -translate-y-1/2 w-[560px] max-w-none grayscale opacity-25 hero-photo"
              />

              {/* Fade mask */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F6F1E6] via-[#F6F1E6]/55 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (Cream) */}
      <section
        id="about"
        className="min-h-screen flex items-center bg-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              About
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Cybersecurity first. Development as a supporting strength. AI as
              an active interest.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 items-start">
            {/* Summary */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>

              <p className="text-muted leading-relaxed">
                I focus primarily on cybersecurity, with a strong interest in
                how systems are built, secured, and maintained. My development
                knowledge helps me understand applications from both a builder’s
                and defender’s perspective.
              </p>

              <p className="mt-4 text-muted leading-relaxed">
                I’m also exploring artificial intelligence, particularly how it
                can be used responsibly in security, automation, and analysis.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Cybersecurity-first", "Builder mindset", "AI-curious"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-black"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Quick facts */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-orbitron text-lg font-bold text-primary mb-5">
                Quick Facts
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Primary focus",
                    desc: "Cybersecurity and defensive security practices",
                  },
                  {
                    title: "Supporting skills",
                    desc: "Software development, scripting, and system understanding",
                  },
                  {
                    title: "Current interest",
                    desc: "Applying AI to security workflows and automation",
                  },
                  { title: "Location", desc: "South Africa" },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS (Cream) */}
      <section
        id="qualifications"
        className="min-h-screen flex items-center bg-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Qualifications
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Formal education that built my foundation in computing.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {qualifications.map((q: any) => (
              <article
                key={`${q.title}-${q.institution}-${q.status}`}
                className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                      EDUCATION
                    </p>

                    <h3 className="mt-3 font-orbitron text-lg font-bold">
                      {q.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted">{q.institution}</p>

                    <p className="mt-2 text-sm text-muted">
                      {q.startYear ? `${q.startYear}` : "—"}
                      {q.endYear
                        ? ` • ${q.endYear}`
                        : q.startYear
                          ? " • Present"
                          : ""}
                    </p>
                  </div>

                  {q.status ? (
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${
                        String(q.status).toLowerCase() === "completed"
                          ? "bg-emerald-100 text-emerald-900 border-emerald-200"
                          : "bg-amber-100 text-amber-900 border-amber-200"
                      }`}
                    >
                      {q.status}
                    </span>
                  ) : null}
                </div>

                {q.focus?.length ? (
                  <div className="mt-6">
                    <p className="text-sm font-semibold">Focus areas</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {q.focus.slice(0, 8).map((f: string) => (
                        <span
                          key={f}
                          className="rounded-full bg-[#F6F1E6] border border-black/10 px-3 py-1 text-xs text-muted"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {q.notes ? (
                  <p className="mt-6 text-sm text-muted leading-relaxed">
                    {q.notes}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS (White) */}
      <section id="skills" className="min-h-screen flex items-center bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Skills
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              A practical skill set shaped by hands-on learning and projects.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cybersecurity",
                items: [
                  "CIA Triad (Confidentiality, Integrity, Availability)",
                  "Basic Linux usage and permissions",
                  "Understanding users, groups, and file access",
                  "Intro to networking concepts (IP, ports, protocols)",
                  "Awareness of common security threats",
                  "Why logging and monitoring are important",
                  "Developing a security-first mindset",
                ],
              },
              {
                title: "Software Development",
                items: [
                  "JavaScript fundamentals and modern ES features",
                  "TypeScript basics and type safety concepts",
                  "React fundamentals and component-based UI design",
                  "Next.js basics (routing, layouts, static generation)",
                  "Java programming fundamentals",
                  "Frontend basics (HTML, CSS, Tailwind)",
                  "Basic API consumption and request handling",
                  "Database fundamentals (MySQL, MongoDB)",
                  "Introductory PL/SQL concepts",
                  "Git and version control workflows",
                ],
              },
              {
                title: "AI & Tooling",
                items: [
                  "AI and machine learning fundamentals",
                  "Supervised vs unsupervised learning concepts",
                  "Basic understanding of common ML algorithms",
                  "Intro to model training and evaluation",
                  "Awareness of data quality and bias",
                  "Using AI tools to support learning and productivity",
                  "Exploring responsible and secure use of AI",
                ],
              },
              {
                title: "Professional Skills",
                items: [
                  "Clear technical documentation",
                  "Breaking problems into manageable steps",
                  "Following structured processes",
                  "Learning through labs and hands-on practice",
                  "Asking the right technical questions",
                  "Researching unfamiliar topics effectively",
                  "Working with feedback and iteration",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-orbitron text-xl font-bold text-primary mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3 text-muted">
                  {col.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS (Cream) */}
      <section
        id="projects"
        className="min-h-screen flex items-center bg-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Projects
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Selected projects across cybersecurity and development.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: any) => (
              <article
                key={p.slug}
                className="group rounded-3xl border border-black/10 bg-white/70 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-36 bg-gradient-to-br from-white to-[#F6F1E6] border-b border-black/10 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10" />
                  <div className="absolute bottom-4 left-6">
                    <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                      PROJECT
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-orbitron text-lg font-bold">{p.title}</h3>

                  <p className="mt-3 text-muted leading-relaxed">
                    {p.shortDescription ?? p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags?.map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#F6F1E6] border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {/* NEW: Details button */}
                    <a
                      href={`/projects/${p.slug}`}
                      className="rounded-2xl bg-primary px-4 py-2 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Details
                    </a>

                    {p.links?.repo && p.links.repo !== "#" && (
                      <a
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Repo
                      </a>
                    )}

                    {p.links?.demo && p.links.demo !== "#" && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/tnsema"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-2xl border border-black/10 bg-white px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View more on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS (White) */}
      <section
        id="certifications"
        className="min-h-screen flex items-center bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Certifications
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Credentials that support my cybersecurity focus.
            </p>

            {/* Optional: link to the full certificates page */}
            <div className="mt-8">
              <a
                href="/certificates"
                className="inline-block rounded-2xl border border-black/10 bg-[#F6F1E6]/40 px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View all certificates
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c: any) => {
              const issuedYear = c.issued
                ? new Date(c.issued).getFullYear()
                : "—";
              const status = (c.status ?? "").toLowerCase();

              const statusClasses =
                status === "earned"
                  ? "bg-emerald-100 text-emerald-900 border-emerald-200"
                  : status === "studying"
                    ? "bg-amber-100 text-amber-900 border-amber-200"
                    : "bg-gray-100 text-gray-900 border-gray-200";

              return (
                <article
                  key={`${c.name}-${c.issuer}`}
                  className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                        CERTIFICATION
                      </p>

                      <h3 className="mt-3 font-orbitron text-lg font-bold">
                        {c.name}
                      </h3>

                      <p className="mt-2 text-sm text-muted">
                        {c.issuer} • {issuedYear}
                      </p>
                    </div>

                    {c.status ? (
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses}`}
                      >
                        {c.status}
                      </span>
                    ) : null}
                  </div>

                  {/* Skills chips (optional but looks good) */}
                  {c.skills?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.skills.slice(0, 4).map((s: string) => (
                        <span
                          key={s}
                          className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-xs text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {c.verifyUrl ? (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-2xl bg-primary px-4 py-2 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        Verify
                      </a>
                    ) : null}

                    {c.evidence ? (
                      <a
                        href={c.evidence}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Evidence
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BADGES (Cream) */}
      <section
        id="badges"
        className="min-h-screen flex items-center bg-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Badges & Labs
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Practical learning paths, labs, and hands-on training.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {badges.map((b: any) => (
              <article
                key={`${b.name}-${b.issuer}-${b.year}-${b.status}`}
                className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                  {b.type?.toUpperCase?.() ?? "BADGE"}
                </p>

                <h3 className="mt-3 font-orbitron text-lg font-bold">
                  {b.name}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  {b.issuer}
                  {b.year ? ` • ${b.year}` : ""} •{" "}
                  <span className="font-semibold">{b.status}</span>
                </p>

                {b.skills?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {b.skills.slice(0, 6).map((s: string) => (
                      <span
                        key={s}
                        className="rounded-full bg-[#F6F1E6] border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}

                {b.verifyUrl ? (
                  <a
                    href={b.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Verify
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (White) */}
      <section id="contact" className="min-h-screen flex items-center bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Contact
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted text-lg">
              The fastest way to reach me is through email or the links below.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:thobilesema@gmail.com"
              className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="font-orbitron text-sm tracking-widest text-primary">
                EMAIL
              </p>
              <p className="mt-3 font-semibold">thobilesema@gmail.com</p>
            </a>

            <a
              href="https://github.com/tnsema"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="font-orbitron text-sm tracking-widest text-primary">
                GITHUB
              </p>
              <p className="mt-3 font-semibold">github.com/tnsema</p>
            </a>

            <a
              href="https://www.linkedin.com/in/tnsema/"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="font-orbitron text-sm tracking-widest text-primary">
                LINKEDIN
              </p>
              <p className="mt-3 font-semibold">linkedin.com/in/tnsema</p>
            </a>

            <a
              href="/downloads/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-black/10 bg-[#F6F1E6]/40 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="font-orbitron text-sm tracking-widest text-primary">
                CV
              </p>
              <p className="mt-3 font-semibold">Download PDF</p>
            </a>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Based in South Africa • Open to remote opportunities
          </p>
        </div>
      </section>
    </>
  );
}
