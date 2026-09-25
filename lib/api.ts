import type { Workout } from "@/types";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  return res.json();
}
export async function getWorkoutById(id: string): Promise<Workout> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return res.json();
}
