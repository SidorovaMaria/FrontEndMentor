import React from "react";

import { statusDescription, StatusType } from "@/data";
import RoadMapItem from "@/components/RoadMapItem";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { getProductRequestByTagsAndStatus } from "@/lib/data/api";

const RoadMapRequests = async ({ status }: { status: StatusType }) => {
  const statusRequests = await getProductRequestByTagsAndStatus(
    undefined,
    status
  );
  // Sort by Upvotes
  const sorted = statusRequests.sort((a, b) => {
    return b.upvotes - a.upvotes;
  });
  return (
    <section
      aria-labelledby={`roadmap-${status}`}
      aria-describedby={`Roadmap status: ${status}`}
      className="m-6 md:mx-0"
    >
      <div className="flex gap-1 flex-col">
        <h3 id={`roadmap-${status}`} className="capitalize">
          {status}
          <span className="sr-only"> status</span>{" "}
          <span aria-live="polite">({statusRequests.length})</span>
        </h3>
        <p className="text-[13px] text-[#647196]">
          {statusDescription[status] ?? "No description available."}
        </p>
      </div>
      {sorted.length === 0 && (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 flex flex-col items-center justify-center min-h-[200px] w-full bg-white rounded-[10px]"
          aria-label="No feedback requests found"
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
          <p className="text-[13px] text-[#647196]">
            No requests with status &quot;{status}&quot; found.
          </p>
          <Button variant="pink" type="button" aria-label="Add Feedback">
            <Link href="/feedback/new">+ Add Feedback</Link>
          </Button>
        </div>
      )}
      <ul className="flex flex-col gap-4 mt-6">
        {sorted.map((request) => (
          <RoadMapItem key={request.id} request={request} />
        ))}
      </ul>
    </section>
  );
};

export default RoadMapRequests;
