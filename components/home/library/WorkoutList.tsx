import type { Workout } from "@/types";
import WorkoutCard from "./WorkoutCard";

async function WorkoutList() {
  let data: Workout[];

  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    data = await res.json();
  } catch (error) {
    console.error("Failed to load workouts:", error);

    return (
      <p className="py-10 text-center text-sm text-muted-foreground">
        Failed to load workouts. Please try again later.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;
