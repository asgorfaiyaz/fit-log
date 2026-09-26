"use client";

import { createContext, useState, type ReactNode } from "react";
import type { Workout } from "@/types";

type FitLogContextType = {
  plannedWorkouts: Workout[];
  setPlannedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
  savedWorkouts: Workout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
};
export const FitLogContext = createContext<FitLogContextType | null>(null);

type FitLogProviderProps = {
  children: ReactNode;
};

export function FitLogProvider({ children }: FitLogProviderProps) {
  const [plannedWorkouts, setPlannedWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        setPlannedWorkouts,
        savedWorkouts,
        setSavedWorkouts,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}
