import { getStatusColor } from "@/lib/data-utils";
import React from "react";
import { Badge } from "./ui/Badge";

import Image from "next/image";
import Link from "next/link";

const RoadMapItem = ({ request }: { request: ProductRequest }) => {
  const commentsCount = request.comments?.length || 0;
  return (
    <div className="bg-white rounded-[5px] p-5 relative overflow-hidden group cursor-pointer">
      <div
        className="absolute top-0 left-0 right-0 h-[6px] w-full "
        style={{ backgroundColor: getStatusColor(request.status) }}
      />
      <p className="capitalize text-[13px] text-[#647196]">
        <span
          className="w-2 h-2 rounded-full inline-flex mr-4"
          style={{ backgroundColor: getStatusColor(request.status) }}
        />
        {request.status === "in-progress" ? "In Progress" : request.status}
      </p>
      <Link
        href={`/request/${request.id}`}
        aria-label={`View details for ${request.title}`}
      >
        <p className="small font-bold text-[13px] text-[#3a4374] mt-4 mb-[9px] md:mt-[14px] md:mb-[11px] lg:mb-[4px] lg:mt-2 group-hover:text-[#4661E6]">
          {request.title}
        </p>
      </Link>
      <p className="small font-normal text-[#647196]">{request.description}</p>
      <Badge className="bg-transparent capitalize mt-2 mb-4">
        {request.category}
      </Badge>
      <div className="flex items-center justify-between">
        <Badge icon iconPosition="left" className="bg-transparent gap-2.5">
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
    </div>
  );
};

export default RoadMapItem;
