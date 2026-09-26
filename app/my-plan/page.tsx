import PlanDashboard from "./_components/PlanDashboard";

export default function MyPlanPage() {
  return (
    <section className="page-container py-10 sm:py-12">
      <h1 className="font-heading text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
        MY PLAN
      </h1>

      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <PlanDashboard />
    </section>
  );
}
