import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptyPlan() {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-border bg-card px-6 py-12 text-center">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Browse the library and add a lift to get today moving.
      </p>

      <Button
        asChild
        className="mt-6 bg-primary font-bold text-primary-foreground hover:bg-primary/90"
      >
        <Link href="/">Go to workouts</Link>
      </Button>
    </div>
  );
}
