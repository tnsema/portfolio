// api/api.js

import projectsData from "@/data/projects.json";
import certificatesData from "@/data/certificates.json";
import badgesData from "@/data/badges.json";

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
  return projectsData.map((p) => ({
    ...p,
    slug: p.slug ?? slugify(p.title), // IMPORTANT
  }));
}

export async function getProjectBySlug(slug) {
  const list = await getProjects();
  return list.find((p) => p.slug === slug) ?? null;
}

/* =======================
   Certificates
======================= */
export async function getCertificates() {
  return certificatesData;
}

/* =======================
   Badges
======================= */
export async function getBadges() {
  return badgesData;
}
