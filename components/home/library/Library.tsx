import { Suspense } from "react";
import WorkoutList from "./WorkoutList";

async function Library() {
  return (
    <section id="library" className="py-16 sm:py-20">
      <div className="mb-8">
        <h2
          id="library-title"
          className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl"
        >
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <Suspense fallback={<p>Loading workouts...</p>}>
        <WorkoutList />
      </Suspense>
    </section>
  );
}

export default Library;
