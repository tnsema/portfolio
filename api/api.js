// api/api.js

import projectsData from "@/data/projects.json";
import certificatesData from "@/data/certificates.json";
import badgesData from "@/data/badges.json";
import qualificationsData from "@/data/qualifications.json";
import experienceData from "@/data/experience.json";

/* =======================
   Utils
======================= */
function slugify(text) {
  return String(text ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/* =======================
   Projects
======================= */
export async function getProjects() {
  return projectsData.map((p) => {
    const cover = p.visuals?.find((visual) => visual.type === "image")?.url;

    return {
      ...p,
      slug: p.id ?? slugify(p.title),
      shortDescription: p.tagline,
      description: p.tagline,
      problem: p.problemStatement?.painPoint,
      approach: p.keyImplementations?.map(
        (implementation) =>
          `${implementation.title}: ${implementation.description}`,
      ),
      outcome: p.problemStatement?.solution,
      tech: p.technologies?.map((technology) => technology.name),
      tags: p.technologies?.map((technology) => technology.name),
      images: cover ? { cover, gallery: [] } : undefined,
      links: {
        repo: p.links?.githubRepo,
        demo: p.links?.liveDemo ?? p.links?.youtubeDemo,
        writeup: p.links?.architectureDiagram,
      },
    };
  });
}

export async function getProjectBySlug(slug) {
  const list = await getProjects();
  return list.find((p) => p.slug === slug) ?? null;
}

/* =======================
   Certificates
======================= */
export async function getCertificates() {
  return [...certificatesData].sort(
    (a, b) => (a.importance ?? Number.MAX_SAFE_INTEGER) - (b.importance ?? Number.MAX_SAFE_INTEGER),
  );
}

/* =======================
   Badges
======================= */
export async function getBadges() {
  return badgesData;
}

/* =======================
   Qualifications
   ======================= */

export async function getQualifications() {
  return qualificationsData;
}

export async function getExperience() {
  return experienceData;
}
