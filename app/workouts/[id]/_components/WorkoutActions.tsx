"use client";

import { Button } from "@/components/ui/button";
import { FitLogContext } from "@/contexts/FitLogContext";
import { Workout } from "@/types";
import { Bookmark, CalendarPlus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const {
    plannedWorkouts,
    setPlannedWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  } = useContext(FitLogContext)!;

  function handleAddToPlan() {
    if (plannedWorkouts.some((w) => w.id === workout.id)) {
      toast.error("This workout is already in your plan.");
      return;
    }
    toast.success("This workout is added in your plan.");

    setPlannedWorkouts((prev) => [...prev, workout]);
  }

  function handleSave() {
    if (savedWorkouts.some((w) => w.id === workout.id)) {
      toast.error("This workout is already saved.");
      return;
    }
    toast.success("This workout is added in your saved.");

    setSavedWorkouts((prev) => [...prev, workout]);
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button
        onClick={handleAddToPlan}
        className="bg-primary font-bold text-primary-foreground hover:bg-primary/90"
      >
        <CalendarPlus />
        Add to today&apos;s plan
      </Button>

      <Button
        onClick={handleSave}
        variant="outline"
        className="border-border bg-transparent"
      >
        <Bookmark />
        Save for later
      </Button>
    </div>
  );
}
