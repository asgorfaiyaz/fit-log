"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Workout } from "@/types";
import { useContext } from "react";
import { FitLogContext } from "@/contexts/FitLogContext";
import { usePlan } from "@/contexts/PlanContext";
import { toast } from "react-toastify";

type PlanWorkoutCardProps = {
  workout: Workout;
};

export default function PlanWorkoutCard({ workout }: PlanWorkoutCardProps) {
  const { plannedWorkouts, setPlannedWorkouts, setSavedWorkouts } =
    useContext(FitLogContext)!;
  const { activeTab } = usePlan();

  function handleRemove() {
    if (activeTab === "planned") {
      setPlannedWorkouts((prev) =>
        prev.filter((item) => item.id !== workout.id),
      );

      toast.success(`${workout.name} removed from your plan.`);
      return;
    }

    setSavedWorkouts((prev) => prev.filter((item) => item.id !== workout.id));

    toast.success(`${workout.name} removed from saved.`);
  }

  function handleAddToPlan() {
    if (plannedWorkouts.some((w) => w.id === workout.id)) {
      toast.error("This workout is already in your plan.");
      return;
    }

    setPlannedWorkouts((prev) => [...prev, workout]);

    setSavedWorkouts((prev) => prev.filter((item) => item.id !== workout.id));

    toast.success("Workout added to your plan.");
  }
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-36">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, 144px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-lg font-bold uppercase leading-none">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock3 className="size-3.5 text-primary" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame className="size-3.5 text-primary" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star className="size-3.5 fill-primary text-primary" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:shrink-0">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-border bg-transparent px-4"
        >
          <Link href={`/workouts/${workout.id}`}>View Details</Link>
        </Button>

        {activeTab === "planned" && (
          <Button
            size="sm"
            className="bg-primary px-4 font-bold text-primary-foreground hover:bg-primary/90"
          >
            Mark as Done
          </Button>
        )}

        {activeTab === "saved" && (
          <Button
            onClick={handleAddToPlan}
            size="sm"
            className="bg-primary px-4 font-bold text-primary-foreground hover:bg-primary/90"
          >
            Add to Plan
          </Button>
        )}
        <Button
          onClick={handleRemove}
          variant="ghost"
          size="icon"
          className="size-8 shrink-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          <X className="size-4" />
          <span className="sr-only">Remove {workout.name}</span>
        </Button>
      </div>
    </article>
  );
}
