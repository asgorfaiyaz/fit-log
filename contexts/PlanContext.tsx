"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type PlanTab = "planned" | "saved";

type PlanContextType = {
  activeTab: PlanTab;
  setActiveTab: (tab: PlanTab) => void;
};

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<PlanTab>("planned");

  return (
    <PlanContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
}
