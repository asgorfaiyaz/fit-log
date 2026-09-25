"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function NavLink({ href, label, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors",
        className,
        isActive(href)
          ? "bg-card text-primary"
          : "text-muted-foreground hover:bg-card hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}
