import Image from "next/image";
import type { Workout } from "@/types";
import WorkoutActions from "./WorkoutActions";
import { Badge } from "@/components/ui/badge";

type WorkoutDetailsProps = {
  workout: Workout;
};

const specs = [
  {
    label: "EQUIPMENT",
    key: "equipment",
  },
  {
    label: "DIFFICULTY",
    key: "difficulty",
  },
  {
    label: "SETS",
    key: "sets",
  },
  {
    label: "REPS",
    key: "reps",
  },
  {
    label: "DURATION",
    key: "duration",
  },
  {
    label: "CALORIES",
    key: "calories",
  },
  {
    label: "RATING",
    key: "rating",
  },
] as const;

function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-card">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h1 className="font-heading text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
          {workout.name}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {workout.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <Badge key={group} className="bg-primary text-primary-foreground">
              {group}
            </Badge>
          ))}
        </div>

        {/* Specs */}
        <div className="mt-7 overflow-hidden rounded-xl border border-border bg-card">
          {specs.map((spec) => {
            const value =
              spec.key === "duration"
                ? `${workout.duration} min`
                : spec.key === "calories"
                  ? `${workout.caloriesBurned} kcal`
                  : workout[spec.key];

            return (
              <div
                key={spec.key}
                className="flex items-center justify-between border-b border-border px-5 py-4 last:border-b-0"
              >
                <span className="text-xs font-bold tracking-wide text-muted-foreground">
                  {spec.label}
                </span>

                <span className="text-sm text-foreground">{value}</span>
              </div>
            );
          })}
        </div>

        <section className="mt-8">
          <h2
            id="instructions-title"
            className="font-heading text-xl font-bold uppercase"
          >
            INSTRUCTIONS
          </h2>

          <ol className="mt-4 space-y-4">
            {workout.instructions.map((instruction, index) => (
              <li
                key={instruction}
                className="flex gap-4 text-sm leading-6 text-muted-foreground"
              >
                <span className="shrink-0 text-primary">{index + 1}.</span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </section>

        <WorkoutActions workout={workout} />
      </div>
    </article>
  );
}

export default WorkoutDetails;
