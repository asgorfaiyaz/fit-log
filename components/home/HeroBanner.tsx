import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroBanner() {
  return (
    <section>
      <Card className="overflow-hidden border-border bg-card">
        <div className="grid min-h-90 items-center md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold tracking-wide text-primary">
              WORKOUT LIBRARY
            </p>

            <h1
              id="hero-title"
              className="max-w-xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Button
              asChild
              className="mt-6 bg-primary font-bold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#library">BROWSE WORKOUTS</Link>
            </Button>
          </div>

          <div className="relative flex h-full min-h-65 items-center justify-center md:min-h-90">
            <Image
              src="/assets/banner.png"
              alt="Workout illustration"
              width={550}
              height={500}
              priority
              className="h-65 w-auto object-contain sm:h-75 md:h-85"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
