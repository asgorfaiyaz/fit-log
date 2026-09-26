"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "duration" | "calories" | "rating";

type SortWorkoutsProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortWorkouts({ value, onChange }: SortWorkoutsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Sort By</span>

      <Select
        value={value}
        onValueChange={(value) => onChange(value as SortOption)}
      >
        <SelectTrigger className="w-32.5">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="duration">Duration</SelectItem>
          <SelectItem value="calories">Calories</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
