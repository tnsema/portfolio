import {
  getProjects,
  getCertificates,
  getBadges,
  getQualifications,
  getExperience,
} from "@/api/api";
import { Award, Briefcase, Cloud, Code2, Database, FolderKanban, GitBranch, Github, Linkedin, Mail, MonitorSmartphone, Server } from "lucide-react";

export default async function Page() {
  const projects = await getProjects();
  const certificates = await getCertificates();
  const badges = await getBadges();
  const qualifications = await getQualifications();
  const experience = await getExperience();
  const qualificationsByLatest = [...qualifications].sort((a: any, b: any) => {
    const aYear = a.endYear ?? a.startYear ?? 0;
    const bYear = b.endYear ?? b.startYear ?? 0;
    return bYear - aYear;
  });
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section
        id="top"
        className="order-1 relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#F6F1E6] via-white to-white"
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
                Software · Cloud · Cyber
              </h2>

              {/* CTA row */}
              <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up-delay3">
                <a
                  href="#projects"
                  aria-label="View projects"
                  title="View projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <FolderKanban size={21} aria-hidden="true" />
                  <span>View Projects</span>
                </a>

                <a
                  href="#contact"
                  aria-label="Contact Thobile"
                  title="Contact"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Mail size={21} aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/tnsema"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Github size={21} aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tnsema/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Linkedin size={21} aria-hidden="true" />
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
                className="pointer-events-none absolute right-[-6%] top-1/2 -translate-y-1/2 w-[560px] max-w-none grayscale opacity-45 hero-photo"
              />

              {/* Dark core over a masked image; transparent edges reveal the hero. */}
              <div className="pointer-events-none absolute right-[-6%] top-1/2 h-[562px] w-[560px] max-w-none -translate-y-1/2 hero-photo bg-[radial-gradient(circle_at_center,rgba(73,48,20,0.15)_0%,rgba(73,48,20,0.05)_35%,transparent_72%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (Cream) */}
      <section
        id="about"
        className="order-2 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              About
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Building reliable software, cloud solutions, and infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 items-start">
            {/* Summary */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>

              <p className="text-muted leading-relaxed">
                I am a cloud-focused software engineer with hands-on experience
                building and maintaining web applications, AWS solutions, and
                Linux-based hosting environments. My work spans application
                development, deployments, DNS, email services, and production
                troubleshooting.
              </p>

              <p className="mt-4 text-muted leading-relaxed">
                I currently develop the SAMDDRA membership platform while
                supporting containerized workloads, GitHub Actions deployment
                workflows, and cloud infrastructure planning. I bring a
                practical, security-conscious approach to delivering dependable
                systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Cloud engineering", "Software development", "Infrastructure & DevOps", "AWS Certified"].map(
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
                    desc: "Cloud engineering, software delivery, and infrastructure",
                  },
                  {
                    title: "Current role",
                    desc: "Software Engineer at Samddra",
                  },
                  {
                    title: "Credentials",
                    desc: "AWS Certified Cloud Practitioner and AWS re/Start graduate",
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

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="order-3 min-h-screen flex items-center bg-gradient-to-b from-[#F6F1E6] to-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12 w-full">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl font-bold sm:text-4xl">
              Experience
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Professional experience across software development, cloud, and infrastructure support.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            {experience.map((job: any, index: number) => (
              <div key={`${job.role}-${job.company}`}>
                <article className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Briefcase size={21} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-orbitron text-xs tracking-[0.22em] text-primary">
                          EXPERIENCE
                        </p>
                        <h3 className="mt-2 font-orbitron text-lg font-bold">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {job.company}
                          {job.employmentType ? ` • ${job.employmentType}` : ""}
                        </p>
                      </div>
                    </div>
                    {job.start || job.end ? (
                      <span className="shrink-0 rounded-full border border-black/10 bg-[#F6F1E6] px-3 py-1 text-xs font-semibold text-muted">
                        {job.start ?? ""}{job.start && job.end ? " - " : ""}{job.end ?? ""}
                      </span>
                    ) : null}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                    {job.highlights.map((highlight: string) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {index < experience.length - 1 ? (
                  <div className="flex h-14 flex-col items-center justify-center" aria-hidden="true">
                    <span className="h-4 w-px bg-primary/40" />
                    <span className="h-3 w-3 rounded-full border-2 border-[#F6F1E6] bg-primary shadow-sm" />
                    <span className="h-4 w-px bg-primary/40" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS (Cream) */}
      <section
        id="qualifications"
        className="order-5 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]"
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

          <div className="mx-auto mt-12 max-w-5xl">
            <div>
            {qualificationsByLatest.map((q: any, index: number) => (
              <div
                key={`${q.title}-${q.institution}-${q.status}`}
                className="relative"
              >
                <article
                  className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
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
                {q.awards?.length ? (
                  <div className="mt-7 border-t border-black/10 pt-6">
                    <p className="font-orbitron text-xs tracking-[0.2em] text-primary">
                      AWARDS DURING THIS DIPLOMA
                    </p>
                    <div className="mt-4 space-y-4">
                      {[...q.awards]
                        .sort((a: any, b: any) => b.year - a.year)
                        .map((award: any, awardIndex: number) => (
                        <div key={`${award.title}-${award.year}`} className="relative pl-9">
                          {awardIndex < q.awards.length - 1 ? (
                            <span className="absolute left-[13px] top-7 h-8 w-px bg-primary/30" />
                          ) : null}
                          <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-lg border border-black/10 bg-[#F6F1E6] text-primary">
                            <Award size={15} aria-hidden="true" />
                          </span>
                          <div className="rounded-2xl border border-black/10 bg-[#F6F1E6]/60 px-4 py-3">
                            <p className="font-semibold">{award.title}</p>
                            <p className="mt-1 text-sm text-muted">
                              {q.institution} <span className="mx-1">•</span> {award.year}
                            </p>
                          </div>
                        </div>
                        ))}
                    </div>
                  </div>
                ) : null}
                </article>
                {index < qualifications.length - 1 ? (
                  <div className="flex h-14 flex-col items-center justify-center" aria-hidden="true">
                    <span className="h-4 w-px bg-primary/40" />
                    <span className="h-3 w-3 rounded-full border-2 border-[#F6F1E6] bg-primary shadow-sm" />
                    <span className="h-4 w-px bg-primary/40" />
                  </div>
                ) : null}
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS (White) */}
      <section id="skills" className="order-4 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full py-16">
          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-orbitron text-3xl font-bold sm:text-4xl">
                  Technical Expertise
                </h2>
                <p className="mt-2 text-muted">
                  Cloud, infrastructure, engineering, and delivery capabilities.
                </p>
              </div>
              <span className="rounded-full bg-[#F6F1E6] px-3 py-1.5 text-sm font-medium text-muted">
                Core capabilities
              </span>
            </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              {
                title: "AWS Cloud Practitioner Coverage",
                icon: Cloud,
                className: "md:col-span-2",
                items: [],
                groups: [
                  ["Compute", "EC2, Lambda, Elastic Beanstalk, Lightsail, Auto Scaling"],
                  ["Storage", "S3, S3 Glacier, EBS, EFS, AWS Backup"],
                  ["Networking", "VPC, Route 53, CloudFront, API Gateway, Elastic Load Balancing"],
                  ["Security", "IAM, IAM Identity Center, KMS, Cognito, WAF, GuardDuty"],
                  ["Databases", "RDS, Aurora, DynamoDB, ElastiCache"],
                  ["Management", "CloudWatch, CloudTrail, CloudFormation, Config, Systems Manager"],
                  ["Integration & cost", "SNS, SQS, EventBridge, Step Functions, Cost Explorer, Budgets"],
                ],
              },
              {
                title: "Linux & Infrastructure",
                icon: Server,
                items: [
                  "Ubuntu",
                  "Nginx",
                  "SSH",
                  "DNS",
                  "SSL/TLS",
                  "cPanel",
                ],
              },
              {
                title: "DevOps & CI/CD",
                icon: GitBranch,
                items: [
                  "Docker",
                  "Docker Compose",
                  "GitHub Actions",
                  "Git",
                  "GitHub",
                  "CI/CD",
                ],
              },
              {
                title: "Backend Engineering",
                icon: Code2,
                items: [
                  "Java",
                  "Spring Boot",
                  "PHP",
                  "CodeIgniter",
                  "Node.js",
                  "REST APIs",
                ],
              },
              {
                title: "Frontend Engineering",
                icon: MonitorSmartphone,
                items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
              },
              {
                title: "Databases",
                icon: Database,
                items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Database design", "Data modelling"],
              },
            ].map((col: any) => (
              <div
                key={col.title}
                className={`rounded-2xl bg-[#F6F1E6]/70 p-5 transition-all hover:-translate-y-0.5 hover:bg-[#F6F1E6] hover:shadow-sm sm:p-6 ${col.className ?? ""}`}
              >
                <col.icon size={22} className="text-muted" aria-hidden="true" />
                <h3 className="mt-5 font-orbitron text-lg font-bold">{col.title}</h3>
                {col.groups ? (
                  <div className="mt-4 grid gap-x-8 gap-y-3 text-sm leading-relaxed text-muted sm:grid-cols-2">
                    {col.groups.map(([label, services]: [string, string]) => (
                      <p key={label}>
                        <span className="font-semibold text-black">{label}: </span>
                        {services}
                      </p>
                    ))}
                  </div>
                ) : null}
                <p className="mt-3 leading-relaxed text-muted">{col.items.join(" · ")}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (Cream) */}
      <section
        id="projects"
        className="order-3 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]"
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
                <div className="h-36 overflow-hidden border-b border-black/10 relative bg-black">
                  <img
                    src="/project-card-cover.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-primary/10" />
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
        className="order-6 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]"
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
        className="order-7 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]"
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
      <section id="contact" className="order-8 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F6F1E6]">
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
    </div>
  );
}
