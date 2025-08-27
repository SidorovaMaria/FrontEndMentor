"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import data from "../data/data.json";
import Image from "next/image";
import { Button } from "./ui/Button";
import { sortRequests } from "@/lib/utils";
import RequestItem from "./RequestItem";

const Requests = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategories = useMemo(() => {
    const tags = searchParams.get("tags");
    return tags ? tags.split(",").filter(Boolean) : [];
  }, [searchParams]);
  const shownRequests = useMemo(() => {
    const sort = searchParams.get("sort") || "most-upvotes";
    const sorted = sortRequests(data.productRequests as ProductRequest[], sort);
    return sorted.filter((request) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(request.category);
    });
  }, [selectedCategories, searchParams]);

  return (
    <section>
      {shownRequests.length === 0 ? (
        <section
          className="flex flex-col items-center justify-center min-h-[460px] w-full bg-white rounded-[10px]"
          role="status"
          aria-label="No feedbacks available"
        >
          <Image
            src="/assets/suggestions/illustration-empty.svg"
            alt="No suggestions"
            aria-hidden="true"
            width={100}
            height={100}
            className="mb-10"
            priority
          />
          <h3 className="mb-3.5">There is no feedback yet.</h3>
          <p className="small text-[#647196] font-normal max-w-[410px] text-center mb-6 px-6">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <Button
            variant="pink"
            type="button"
            aria-label="Add Feedback"
            onClick={() => router.push("/feedback/new")}
          >
            + Add Feedback
          </Button>
        </section>
      ) : (
        <ul
          className="flex flex-col gap-4"
          role="list"
          aria-label="Product Requests List"
        >
          {shownRequests.map((request) => (
            <RequestItem request={request} key={request.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Requests;
