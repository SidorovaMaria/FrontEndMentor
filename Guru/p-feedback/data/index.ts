import z from "zod";
export const statusTypes = [
  "planned",
  "in-progress",
  "live",
  "suggestion",
] as const;
export type StatusType = (typeof statusTypes)[number];
// Category (lower case to match json)
export const CategoryFilter = [
  "ui",
  "ux",
  "enhancement",
  "bug",
  "feature",
] as const;
export type CategoryType = (typeof CategoryFilter)[number];

export const UI_CategoryFilter = [
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
] as const;
export type UICategory = (typeof UI_CategoryFilter)[number];

export const UIstatusTypes = [
  "Planned",
  "In Progress",
  "Live",
  "Suggestion",
] as const;
export type UIStatusType = (typeof UIstatusTypes)[number];

export const Filters = [
  { label: "Most Upvotes", value: "most-upvotes" },
  { label: "Least Upvotes", value: "least-upvotes" },
  { label: "Most Comments", value: "most-comments" },
  { label: "Least Comments", value: "least-comments" },
] as const;
export type SortValue = (typeof Filters)[number]["value"];
export const SortValueEnum = z.enum([
  "most-upvotes",
  "least-upvotes",
  "most-comments",
  "least-comments",
]);

export const statusDescription = {
  planned: "Ideas prioritized for research",
  "in-progress": "Currently being developed",
  live: "Released features",
  suggestion: "Ideas that are being considered",
} as const;
