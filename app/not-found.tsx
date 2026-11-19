import { ArrowRight, Home } from "lucide-react";
import { OutlineButton, SolidButton } from "@/components/ui/buttons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found on Thobile Sema's portfolio.",
  path: "/404/",
  keywords: ["404", "portfolio"],
  image: "/project-card-cover.png",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-[#F6F1E6] to-white">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-muted">
          Error 404
        </p>

        <h1 className="mt-4 font-orbitron text-5xl sm:text-6xl font-bold">
          Page not found
        </h1>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />

        <p className="mt-6 text-lg text-muted leading-relaxed">
          The page you’re looking for doesn’t exist, was moved, or was never
          created.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <SolidButton
            href="/"
            className="px-6 py-3 font-semibold hover:-translate-y-0.5 hover:shadow-xl"
          >
            Go home
            <Home size={17} aria-hidden="true" />
          </SolidButton>

          <OutlineButton
            href="/#projects"
            className="px-6 py-3 font-semibold hover:-translate-y-0.5 hover:shadow-lg"
          >
            View projects
            <ArrowRight size={17} aria-hidden="true" />
          </OutlineButton>
        </div>

        <p className="mt-10 text-sm text-muted">portfolio.thosem.com</p>
      </div>
    </section>
  );
}
