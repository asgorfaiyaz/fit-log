"use client";

import { Dumbbell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLink from "./NavLink";

type MobileNavProps = {
  navLinks: {
    label: string;
    href: string;
  }[];
};

export function MobileNav({ navLinks }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-70 border-border bg-background/95 backdrop-blur-xl"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-heading">
            <Dumbbell className="size-5 text-primary" />
            FITLOG
          </SheetTitle>

          <SheetDescription className="sr-only">
            Main navigation
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                className="py-3 text-sm"
              />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
