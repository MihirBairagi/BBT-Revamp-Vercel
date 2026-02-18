// Simple Projects API helpers
const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function fetchProjects() {
  try {
    // Always fetch fresh data so new projects appear immediately
    const res = await fetch(`${BASE}/projects`, { cache: 'no-store' });
    const json = await res.json();
    return json.projects || [];
  } catch (e) {
    console.error("fetchProjects error", e);
    return [];
  }
}

export async function fetchProject(id) {
  try {
    // Always fetch fresh data for project detail as well
    const res = await fetch(`${BASE}/projects/${id}`, { cache: 'no-store' });
    const json = await res.json();
    console.log("json", json);
    const toReturn = {
        ...json.project,
        gallery: json.gallery || []
    }
    return toReturn || null;
  } catch (e) {
    console.error("fetchProject error", e);
    return null;
  }
} 