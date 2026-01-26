import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
  console.warn(
    "[Sanity] Missing environment variables. Sanity client will be disabled."
  );
}

export const sanityClient = projectId && dataset
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true, // fast + read-only
    })
  : null;
