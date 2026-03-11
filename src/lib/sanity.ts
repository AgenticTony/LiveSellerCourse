import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
});

// GROQ Queries
export const bootcampDatesQuery = `*[_type == "bootcamp" | order(startDate asc]`;
export const instructorQuery = `*[_type == "instructor"][0]`;
