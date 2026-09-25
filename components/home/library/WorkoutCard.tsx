import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

import type { Workout } from "@/types";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workouts/${workout.id}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-transform duration-200">
        <div className="relative h-56 overflow-hidden bg-muted sm:h-60">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary"
              >
                {group}
              </span>
            ))}
          </div>

          <h2 className="mt-4 font-heading text-xl font-bold uppercase leading-tight">
            {workout.name}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {workout.equipment}
          </p>

          <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="size-3.5 text-primary" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame className="size-3.5 text-primary" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star className="size-3.5 fill-primary text-primary" />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
