"use client";
import { Filters } from "@/data";
import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import data from "../../data/data.json";
import { Button } from "./Button";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { formUrlQuery, sortRequests } from "@/lib/utils";

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState(Filters[0]);
  const selectedCategories = useMemo(() => {
    const tags = searchParams.get("tags");
    return tags ? tags.split(",").filter(Boolean) : [];
  }, [searchParams]);
  const shownRequests = useMemo(() => {
    return data.productRequests.filter((request) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(request.category);
    });
  }, [selectedCategories]);
  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (sortParam) {
      const found = Filters.find((f) => f.value === sortParam);
      if (found) {
        setSortBy(found);
      }
    }
  }, [searchParams]);
  const updateUrl = useCallback(
    (sort: string) => {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "sort",
        value: sort,
      });
      router.replace(newUrl);
    },

    [searchParams, router]
  );
  return (
    <div className="h-[56px] md:h-[72px] bg-[#373F68] w-full px-6 text-[#F2F4FE] py-4.5 flex items-center justify-between md:rounded-[10px] ">
      <div className="flex items-center  ">
        <div className=" hidden md:flex items-center gap-4">
          <Image
            alt="Suggestions Icon"
            src="/assets/suggestions/icon-suggestions.svg"
            width={20}
            height={20}
          />
          <h3>{shownRequests.length} Suggestions</h3>
        </div>
        <Select
          value={sortBy.value}
          onValueChange={(value) => {
            setSortBy(Filters.find((f) => f.value === value) || Filters[0]);
            updateUrl(value);
          }}
        >
          <SelectTrigger variant="dark">
            <SelectValue
              placeholder="Sort By"
              className="placeholder:font-bold"
            >
              <span className="text-[#F2F4FE]! font-normal">Sort by:</span>{" "}
              {sortBy.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Filters.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button variant="pink" onClick={() => router.push("/feedback/new")}>
        + Add Feedback
      </Button>
    </div>
  );
};

export default FilterBar;
