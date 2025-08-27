"use client";
import Image from "next/image";
import React from "react";

import { AnimatePresence } from "motion/react";
import AddCommentForm from "./forms/AddCommentForm";

const Comment = ({ comment }: { comment: Comment | Reply }) => {
  const [addReply, setAddReply] = React.useState(false);
  return (
    <div className="flex flex-col gap-4 border-b border-b-[#8C92B3]/25  pb-6 last:border-none">
      <aside className="flex items-center gap-4">
        <Image
          src={`/${comment.user.image}`}
          alt={comment.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <p className="small font-bold">{comment.user.name}</p>
          <p className="text-[13px] font-normal text-[#647196]">
            @{comment.user.username}
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
        {"replyingTo" in comment && comment.replyingTo && (
          <span className="font-bold text-[#AD1FEA] mr-1">
            @{comment.replyingTo}
          </span>
        )}
        {comment.content}
      </p>
      {addReply && (
        <AnimatePresence mode="wait">
          <AddCommentForm variant="reply" close={() => setAddReply(false)} />
        </AnimatePresence>
      )}
      {"replies" in comment && comment.replies && (
        <div className=" pl-6 md:pl-11 flex flex-col w-full gap-6 mt-6">
          {comment.replies.map((reply) => (
            <Comment
              key={`comment-${comment.id}-reply-${reply.user.username}`}
              comment={reply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
