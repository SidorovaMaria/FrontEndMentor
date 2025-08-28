"use client";
import { getStatusColor } from "@/lib/data-utils";
import React from "react";
import { Badge } from "./ui/Badge";

import Image from "next/image";
import Link from "next/link";
import { storageToUIStatus, uiToStorageCategory } from "@/lib/utils";
import { upvoteRequest } from "@/lib/data/api";

const RoadMapItem = ({ request }: { request: ProductRequest }) => {
  const commentsCount = request.comments?.length || 0;
  const statusLabel = storageToUIStatus(request.status);
  const statusColor = getStatusColor(request.status);
  const upvoteItem = () => upvoteRequest({ requestId: request.id });
  return (
    <li
      className="bg-white rounded-[5px] p-5 relative overflow-hidden group cursor-pointer"
      aria-labelledby={`request-${request.id}-title`}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[6px] w-full "
        style={{ backgroundColor: statusColor }}
      />
      <p
        id={`request-${request.id}-status`}
        className="capitalize text-[13px] text-[#647196]"
      >
        <span
          aria-hidden="true"
          className="w-2 h-2 rounded-full inline-flex mr-4"
          style={{ backgroundColor: statusColor }}
        />
        {statusLabel}
      </p>
      <p className="small font-bold text-[13px] text-[#3a4374] mt-4 mb-[9px] md:mt-[14px] md:mb-[11px] lg:mb-[4px] lg:mt-2 group-hover:text-[#4661E6]">
        <Link
          id={`request-${request.id}-title`}
          href={`/feedback/${request.id}`}
          aria-label={`View details for ${request.title}`}
        >
          {request.title}
        </Link>
      </p>

      <p className="small font-normal text-[#647196]">{request.description}</p>

      <Badge
        className="bg-transparent capitalize mt-2 mb-4"
        aria-label={`Category: ${request.category}`}
      >
        {request.category}
      </Badge>

      <div className="flex items-center justify-between">
        <Badge
          aria-pressed={request.upvotedByCurrentUser}
          onClick={upvoteItem}
          icon
          variant={request.upvotedByCurrentUser ? "active" : "default"}
          aria-label={`Upvote request ${request.title}`}
          iconPosition="left"
          className={`${
            !request.upvotedByCurrentUser && "bg-transparent"
          } gap-2.5`}
        >
          {request.upvotes}
        </Badge>

        <div className="flex items-center gap-2 md:ml-auto ">
          <Image
            src="/assets/shared/icon-comments.svg"
            alt="Comments"
            width={16}
            height={18}
            aria-hidden="true"
          />
          <p
            className={`small md:text-base font-bold ${
              !request.comments && "opacity-50"
            }`}
          >
            {commentsCount}
            <span className="sr-only">comments for {request.title}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default RoadMapItem;
