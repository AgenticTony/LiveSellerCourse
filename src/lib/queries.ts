import { client, bootcampDatesQuery, instructorQuery } from "./sanity";

// Types
export interface BootcampDate {
  _id: string;
  startDate: string;
  endDate: string;
  spotsRemaining: number;
  isOpen: boolean;
}

export interface Instructor {
  _id: string;
  name: string;
  bio: unknown;
  photo: {
    asset: {
      url: string;
    };
  stats: Array<{
    label: string;
    value: string;
  }>;
}

// Fetch functions
export async function getBootcampDates(): Promise<BootcampDate[]> {
  return client.fetch({
    query: bootcampDatesQuery,
  });
}

export async function getInstructor(): Promise<Instructor | null> {
  const results = await client.fetch({
    query: instructorQuery,
  });
  return results[0] || null;
}
