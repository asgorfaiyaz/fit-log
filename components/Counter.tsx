import Link from "next/link";
import { cn } from "@/lib/utils";

type CounterProps = {
  label: string;
  count: number;
  variant?: "primary" | "outline";
};

export default function Counter({
  label,
  count,
  variant = "outline",
}: CounterProps) {
  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:text-base"
    >
      <span>{label}</span>

      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-full text-[10px]",
          variant === "primary"
            ? "bg-primary font-bold text-primary-foreground"
            : "border border-border font-medium text-muted-foreground",
        )}
      >
        {count}
      </span>
    </Link>
  );
}
