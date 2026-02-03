"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FilterGroup {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterSidebarProps {
  title: string;
  filterGroups: FilterGroup[];
  onReset?: () => void;
}

export function FilterSidebar({ title, filterGroups, onReset }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          {onReset && (
            <button
              onClick={onReset}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        <div className="space-y-6">
          {filterGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium text-foreground mb-3">{group.label}</h3>
              <RadioGroup value={group.value} onValueChange={group.onChange}>
                {group.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${group.label}-${option}`} />
                    <Label
                      htmlFor={`${group.label}-${option}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
