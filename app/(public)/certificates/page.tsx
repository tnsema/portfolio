import { getCertificates } from "@/api/api";

function formatDate(input: string | null) {
  if (!input) return "—";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-ZA", { year: "numeric", month: "short" });
}

function statusPill(status: string) {
  const s = (status || "").toLowerCase();
  if (s === "earned")
    return "bg-emerald-100 text-emerald-900 border-emerald-200";
  if (s === "studying") return "bg-amber-100 text-amber-900 border-amber-200";
  return "bg-gray-100 text-gray-900 border-gray-200";
}

export default async function CertificatesPage() {
  const certificates: any[] = await getCertificates();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F6F1E6] to-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm tracking-[0.35em] uppercase text-muted">
            Credentials
          </p>

          <h1 className="mt-3 font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold">
            Certifications
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-muted">
            Certifications and active study that support my cybersecurity focus.
          </p>

          <div className="mt-8">
            <a
              href="/#certifications"
              className="inline-block rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article
              key={`${c.name}-${c.issuer}`}
              className="group rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                    CERTIFICATE
                  </p>
                  <h2 className="mt-2 font-orbitron text-lg font-bold leading-snug">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{c.issuer}</p>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusPill(
                    c.status,
                  )}`}
                >
                  {c.status}
                </span>
              </div>

              {/* Dates */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-xs tracking-widest uppercase text-muted">
                    Issued
                  </p>
                  <p className="mt-1 font-semibold">{formatDate(c.issued)}</p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-xs tracking-widest uppercase text-muted">
                    Expires
                  </p>
                  <p className="mt-1 font-semibold">{formatDate(c.expires)}</p>
                </div>
              </div>

              {/* Skills */}
              {c.skills?.length ? (
                <div className="mt-6">
                  <p className="text-xs tracking-widest uppercase text-muted">
                    Skills
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.skills.map((s: string) => (
                      <span
                        key={s}
                        className="rounded-full bg-[#F6F1E6] border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                {c.verifyUrl ? (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-primary px-4 py-2 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Verify
                  </a>
                ) : null}

                {c.evidence ? (
                  <a
                    href={c.evidence}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Evidence
                  </a>
                ) : null}
              </div>

              {/* Note (optional) */}
              {c.notes ? (
                <p className="mt-6 text-sm text-muted leading-relaxed">
                  {c.notes}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-10 text-center shadow-sm">
          <h2 className="font-orbitron text-2xl font-bold">Want a tip?</h2>
          <p className="mt-3 text-muted">
            If you want to do something do it now, because later the coffee gets
            cold.
          </p>
          <a
            href="/#contact"
            className="mt-7 inline-block rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
