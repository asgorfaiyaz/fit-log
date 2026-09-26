"use client";

import { useContext } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FitLogContext } from "@/contexts/FitLogContext";
import PlanWorkoutList from "./PlanWorkoutList";
import { usePlan } from "@/contexts/PlanContext";

export default function WorkoutTabs() {
  const { plannedWorkouts, savedWorkouts } = useContext(FitLogContext)!;
  const { activeTab, setActiveTab } = usePlan();
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as "planned" | "saved")}
      className="mt-8"
    >
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

      <TabsContent value="planned">
        <PlanWorkoutList workouts={plannedWorkouts} />
      </TabsContent>

      <TabsContent value="saved">
        <PlanWorkoutList workouts={savedWorkouts} />
      </TabsContent>
    </Tabs>
  );
}
