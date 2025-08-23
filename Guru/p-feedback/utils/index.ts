// lib/utils.ts
import { type ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn: smart className combiner
 * - clsx: conditional classes + arrays/objects
 * - tailwind-merge: dedupe conflicting Tailwind classes (e.g. "p-2 p-4" -> "p-4")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
