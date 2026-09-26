import Link from "next/link";
import { Dumbbell } from "lucide-react";
import NavLink from "./NavLink";
import { MobileNav } from "./MobileNav";
import { NavCounters } from "./NavCounters";

const navLinks = [
  {
    label: "Workouts",
    href: "/",
  },
  {
    label: "My Plan",
    href: "/my-plan",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <nav className="flex h-14 items-center page-container">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="FitLog home"
        >
          <Dumbbell className="size-5 text-primary" strokeWidth={2.5} />

          <span className="font-heading text-base xl:text-xl font-bold tracking-tight text-foreground">
            FITLOG
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <NavCounters />
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
}
