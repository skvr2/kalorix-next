"use client";

import React from "react";
import { Wheat, Drumstick, Egg, Fish, Salad, CakeSlice, Utensils } from "lucide-react";

interface RecipeIconProps {
  iconType: string;
  className?: string;
}

export function RecipeIcon({ iconType, className = "h-6 w-6" }: RecipeIconProps) {
  switch (iconType) {
    case "oats":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Wheat className={className} strokeWidth={2} />
        </div>
      );
    case "chicken":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
          <Drumstick className={className} strokeWidth={2} />
        </div>
      );
    case "egg":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Egg className={className} strokeWidth={2} />
        </div>
      );
    case "fish":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Fish className={className} strokeWidth={2} />
        </div>
      );
    case "salad":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Salad className={className} strokeWidth={2} />
        </div>
      );
    case "dessert":
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <CakeSlice className={className} strokeWidth={2} />
        </div>
      );
    default:
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Utensils className={className} strokeWidth={2} />
        </div>
      );
  }
}
