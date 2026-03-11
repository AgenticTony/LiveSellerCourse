import { client } from "./sanity";

// Types
export interface BootcampDate {
  _id: string;
  startDate: string;
  endDate: string;
  available: boolean;
  label: string;
}

export interface Instructor {
  _id: string;
  name: string;
  bio: string;
  experience: string;
  image?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// GROQ queries
const bootcampDatesQuery = `*[_type == "bootcampDate"]{
  _id,
  startDate,
  endDate,
  available,
  label
}|order by startDate asc`;

const instructorQuery = `*[_type == "instructor"][0...1]{
  _id,
  name,
  bio,
  experience,
  image
}`;

const testimonialsQuery = `*[_type == "testimonial"]{
  _id,
  name,
  role,
  content,
  rating
}`;

// Fetch functions
export async function getBootcampDates(): Promise<BootcampDate[]> {
  return client.fetch(bootcampDatesQuery);
}

export async function getInstructor(): Promise<Instructor | undefined> {
  try {
    const result = await client.fetch(instructorQuery);
    return result || undefined;
  } catch {
    return undefined;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(testimonialsQuery);
}
