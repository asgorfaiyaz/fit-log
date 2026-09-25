import type { Workout } from "@/types";
import WorkoutCard from "./WorkoutCard";

async function WorkoutList() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data: Workout[] = await res.json();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;
