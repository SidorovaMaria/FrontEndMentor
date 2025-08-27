"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import React from "react";
import AddReplyForm from "./forms/AddReplyForm";

const Reply = ({
  reply,
  comment,
  requestId,
}: {
  reply: Reply;
  comment: AppComment;
  requestId: string;
}) => {
  const [addReply, setAddReply] = React.useState(false);
  return (
    <div className="flex flex-col gap-4 border-b border-b-[#8C92B3]/25  pb-6 last:border-none">
      <aside className="flex items-center gap-4">
        <Image
          src={`/${reply.user.image}`}
          alt={reply.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <p className="small font-bold">{reply.user.name}</p>
          <p className="text-[13px] font-normal text-[#647196]">
            @{reply.user.username}
          </p>
        </div>
        <button
          className="ml-auto text-[13px] font-bold text-[#4661E6] hover:underline cursor-pointer"
          onClick={() => setAddReply(!addReply)}
        >
          Reply
        </button>
      </aside>
      <p className="text-[13px] text-[#647196]">
        <span className="font-bold text-[#AD1FEA] mr-1">
          @{reply.replyingTo}
        </span>
        {reply.content}
      </p>
      {addReply && (
        <AnimatePresence mode="wait">
          <AddReplyForm
            requestId={requestId}
            commentId={comment.id.toString()}
            replyTo={reply.user.username}
            close={() => setAddReply(false)}
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default Reply;
