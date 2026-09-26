import { PlanProvider } from "@/contexts/PlanContext";

export default function MyPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlanProvider>{children}</PlanProvider>;
}
