import type { Workout } from "@/types";
import PlanWorkoutCard from "./PlanWorkoutCard";
import EmptyPlan from "./EmptyPlan";

type PlanWorkoutListProps = {
  workouts: Workout[];
};

export default function PlanWorkoutList({ workouts }: PlanWorkoutListProps) {
  if (workouts.length === 0) {
    return <EmptyPlan />;
  }

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <PlanWorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
