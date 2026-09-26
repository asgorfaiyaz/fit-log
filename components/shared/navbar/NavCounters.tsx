"use client";

import { useContext } from "react";

import Counter from "@/components/Counter";
import { FitLogContext } from "@/contexts/FitLogContext";

export function NavCounters() {
  const { plannedWorkouts, savedWorkouts } = useContext(FitLogContext)!;

  return (
    <>
      <Counter label="Plan" count={plannedWorkouts.length} variant="primary" />
      <Counter label="Saved" count={savedWorkouts.length} />
    </>
  );
}
