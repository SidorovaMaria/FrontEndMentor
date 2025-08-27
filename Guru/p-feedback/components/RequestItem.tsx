"use client";
import React from "react";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import Link from "next/link";
import { upvoteRequest } from "@/lib/data/api";

const RequestItem = ({ request }: { request: ProductRequest }) => {
  const commentsCount = request.comments ? request.comments.length : 0;

  // Accessibility Freindly for SR Users
  const headingId = `request-title-${request.id}`;
  const upvotesId = `upvote-label-${request.id}`;
  const commentsId = `comments-label-${request.id}`;
  const upvote = async () => {
    await upvoteRequest({ requestId: request.id });
  };
  console.log(request.upvotedByCurrentUser);
  return (
    <li
      className="bg-white rounded-[10px] p-6 text-[#3A4374] flex flex-col md:flex-row md:items-center  gap-4 md:gap-10 group  cursor-pointer"
      aria-labelledby={headingId}
    >
      {/* Desktop Upvote Btn */}
      <div className="hidden md:flex">
        <button type="button" aria-describedby={upvotesId}>
          <Badge
            onClick={upvote}
            icon
            iconPosition="top"
            variant={request.upvotedByCurrentUser ? "active" : "default"}
            className="hidden md:flex  py-2 px-3"
          >
            {request.upvotes}
          </Badge>
        </button>
        <span className="sr-only">
          {request.upvotes} upvotes for {request.title}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3
          id={headingId}
          className="max-sm:text-[13px] max-sm:tracking-[-0.18px] group-hover:text-[#4661E6] cursor-pointer "
        >
          <Link
            href={`/feedback/${request.id}`}
            aria-describedby={`${headingId}-desktop`}
          >
            {request.title}
          </Link>
        </h3>

        <p
          className="body max-sm:text-[13px] max-sm:leading-[19px]"
          id={`${headingId}-desktop`}
        >
          {request.description}
        </p>
        <Badge
          className={`capitalize${
            ["ux", "ui"].includes(request.category) ? " uppercase" : ""
          }`}
          aria-label={`Category: ${request.category}`}
          role="status"
        >
          {request.category}
        </Badge>
      </div>
      <div className="flex items-center justify-between flex-1">
        <div className="flex md:hidden">
          <button type="button" aria-describedby={`${upvotesId}-mobile`}>
            <Badge
              onClick={upvote}
              icon
              variant={request.upvotedByCurrentUser ? "active" : "default"}
              iconPosition="left"
              className={`flex md:hidden gap-1 py-2 px-2.5`}
            >
              {request.upvotes}
            </Badge>
          </button>
          <span className="sr-only">
            {request.upvotes} upvotes for {request.title}
          </span>
        </div>
        <div
          className="flex items-center gap-2 md:ml-auto"
          aria-labelledby={commentsId}
        >
          <Image
            src="/assets/shared/icon-comments.svg"
            alt="Comments"
            width={16}
            height={18}
            aria-hidden="true"
          />
          <p
            id={commentsId}
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

export default RequestItem;
