import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
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
