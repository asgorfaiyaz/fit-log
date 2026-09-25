import Link from "next/link";
import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex gap-6 py-8 md:flex-row md:items-center md:justify-between page-container">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="FitLog home"
        >
          <Dumbbell className="size-5 text-primary" strokeWidth={2.5} />

          <span className="font-heading text-base lg:text-xl font-bold tracking-tight">
            FITLOG
          </span>
        </Link>

        <p className="text-xs lg:text-sm text-muted-foreground">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
