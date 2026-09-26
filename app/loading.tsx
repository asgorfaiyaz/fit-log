import Link from "next/link";
import { Dumbbell, Home, Library } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <section
        aria-labelledby="not-found-title"
        className="w-full max-w-xl text-center"
      >
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
          <Dumbbell className="size-8 text-primary" />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          404 — NOT FOUND
        </p>

        <h1
          id="not-found-title"
          className="mt-3 font-heading text-5xl font-bold uppercase leading-none tracking-tight sm:text-6xl"
        >
          WRONG LIFT.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          Looks like this workout went missing. Head back to the library and
          find something worth lifting.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="bg-primary font-bold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/">
              <Home />
              Back Home
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/#library">
              <Library />
              Workout Library
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
