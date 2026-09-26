import type { Workout } from "@/types";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  return res.json();
}
export async function getWorkoutById(id: string): Promise<Workout | null> {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch workout: ${res.status}`);
  }

  return res.json();
}
