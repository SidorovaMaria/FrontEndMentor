import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { CategoryType, StatusType, UICategory, UIStatusType } from "@/data";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formUrlQuery = ({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string;
}) => {
  const queryString = qs.parse(params);
  queryString[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      encode: false,
    }
  );
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: {
  params: string;
  keysToRemove: string[];
}) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};

export const sortRequests = (
  requests: ProductRequest[],
  sort: string = "most-upvotes"
) => {
  switch (sort) {
    case "least-upvotes":
      return [...requests].sort((a, b) => a.upvotes - b.upvotes);

    case "most-comments":
      return [...requests].sort((a, b) => {
        const aComments = a.comments?.length || 0;
        const bComments = b.comments?.length || 0;
        return bComments - aComments;
      });

    case "least-comments":
      return [...requests].sort((a, b) => {
        const aComments = a.comments?.length || 0;
        const bComments = b.comments?.length || 0;
        return aComments - bComments;
      });
    case "most-upvotes":
    default:
      return [...requests].sort((a, b) => b.upvotes - a.upvotes);
  }
};

export function uiToStorageCategory(ui: UICategory): CategoryType {
  switch (ui) {
    case "Feature":
      return "feature";
    case "Enhancement":
      return "enhancement";
    case "Bug":
      return "bug";
    case "UX":
      return "ux";
    case "UI":
      return "ui";
  }
}
export function storageToUiCategory(cat: CategoryType): UICategory {
  switch (cat) {
    case "feature":
      return "Feature";
    case "enhancement":
      return "Enhancement";
    case "bug":
      return "Bug";
    case "ux":
      return "UX";
    case "ui":
      return "UI"; // you could also return "UI" here if you prefer
  }
}

export function UIStatusToStorage(status: UIStatusType): StatusType {
  switch (status) {
    case "Planned":
      return "planned";
    case "In Progress":
      return "in-progress";
    case "Live":
      return "live";
    case "Suggestion":
      return "suggestion";
  }
}
export function storageToUIStatus(status: StatusType): UIStatusType {
  switch (status) {
    case "planned":
      return "Planned";
    case "in-progress":
      return "In Progress";
    case "live":
      return "Live";
    case "suggestion":
      return "Suggestion";
  }
}
