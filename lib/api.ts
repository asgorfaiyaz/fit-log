import type { Workout } from "@/types";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  return res.json();
}
