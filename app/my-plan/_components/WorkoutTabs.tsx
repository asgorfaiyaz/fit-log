"use client";

import { useContext, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FitLogContext } from "@/contexts/FitLogContext";
import { usePlan } from "@/contexts/PlanContext";
import PlanWorkoutList from "./PlanWorkoutList";
import SortWorkouts, { type SortOption } from "./SortWorkouts";

export default function WorkoutTabs() {
  const { plannedWorkouts, savedWorkouts } = useContext(FitLogContext)!;
  const { activeTab, setActiveTab } = usePlan();

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  function sortWorkouts(workouts: typeof plannedWorkouts) {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }

  const sortedPlannedWorkouts = sortWorkouts(plannedWorkouts);
  const sortedSavedWorkouts = sortWorkouts(savedWorkouts);

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as "planned" | "saved")}
      className="mt-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <TabsList className="mb-4">
          <TabsTrigger
            value="planned"
            className="
      text-muted-foreground
      data-[state=active]:bg-primary
      data-[state=active]:text-primary-foreground
      data-[state=active]:font-bold
    "
          >
            Today&apos;s Plan
          </TabsTrigger>

          <TabsTrigger
            value="saved"
            className="
      text-muted-foreground
      data-[state=active]:bg-primary
      data-[state=active]:text-primary-foreground
      data-[state=active]:font-bold
    "
          >
            Saved
          </TabsTrigger>
        </TabsList>

        <SortWorkouts value={sortBy} onChange={setSortBy} />
      </div>

      <TabsContent value="planned">
        <PlanWorkoutList workouts={sortedPlannedWorkouts} />
      </TabsContent>

      <TabsContent value="saved">
        <PlanWorkoutList workouts={sortedSavedWorkouts} />
      </TabsContent>
    </Tabs>
  );
}
