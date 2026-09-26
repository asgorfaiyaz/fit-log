"use client";

import { FitLogContext } from "@/contexts/FitLogContext";
import { useContext } from "react";
import WorkoutTabs from "./WorkoutTabs";
import MetricsSummary from "./MetricsSummary";
import { usePlan } from "@/contexts/PlanContext";

function PlanDashboard() {
  const { activeTab } = usePlan();
  const { plannedWorkouts, savedWorkouts } = useContext(FitLogContext)!;
  return (
    <div className="mt-7">
      <MetricsSummary
        workouts={activeTab === "planned" ? plannedWorkouts : savedWorkouts}
      />

      <WorkoutTabs />
    </div>
  );
}

export default PlanDashboard;
