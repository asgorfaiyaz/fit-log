import type { Workout } from "@/types";

type MetricsSummaryProps = {
  workouts: Workout[];
};

function getWorkoutMetrics(workouts: Workout[]) {
  return workouts.reduce(
    (total, workout) => ({
      exercises: total.exercises + 1,
      minutes: total.minutes + workout.duration,
      calories: total.calories + workout.caloriesBurned,
    }),
    {
      exercises: 0,
      minutes: 0,
      calories: 0,
    },
  );
}

export default function MetricsSummary({ workouts }: MetricsSummaryProps) {
  const { exercises, minutes, calories } = getWorkoutMetrics(workouts);

  return (
    <div className="grid overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-3">
      <MetricCard label="Exercises" value={exercises} />
      <MetricCard label="Minutes" value={minutes} />
      <MetricCard label="Calories" value={calories} />
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-b border-border px-6 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>

      <p className="mt-2 font-heading text-4xl font-bold leading-none sm:text-5xl">
        {value}
      </p>
    </div>
  );
}
