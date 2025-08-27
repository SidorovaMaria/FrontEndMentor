"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { motion } from "motion/react";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "../ui/Button";

const AddCommentForm = ({
  variant = "comment",
  close,
}: {
  variant?: "comment" | "reply";
  close?: () => void;
}) => {
  const commentSchema = z.object({
    comment: z
      .string()
      .max(250, "Comment should not exceed 250 characters")
      .min(1, "Comment is required"),
  });
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  //   Comment characters
  const comment = watch("comment");
  const debouncedComment = useDebounce(comment, 400);
  const remainingCharacters = 250 - (debouncedComment?.length ?? 0);

  const onSubmit = (data: z.infer<typeof commentSchema>) => {
    reset();
    if (variant === "reply") {
      close?.();
    }
  };
  return (
    <motion.form
      initial={{ opacity: 0, scaleY: 0, originY: 0 }} // 0 = top, 0.5 = center, 1 = bottom
      animate={{ opacity: 1, scaleY: 1, originY: 0 }}
      exit={{ opacity: 0, scaleY: 0, originY: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        variant === "reply" ? "flex gap-4 items-start " : "flex-col"
      }`}
      aria-labelledby="add-comment-form"
    >
      <textarea
        id={"text-area"}
        maxLength={250}
        aria-invalid={!!errors.comment}
        spellCheck="true"
        className="w-full flex-1 px-6 py-4 placeholder:text-[#8C92B3] text-[15px]
        focus:bg-[#F7F8FD] focus:outline-[#4661E6] text-[#3A4374]"
        placeholder="Type your comment here"
        {...form.register("comment")}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            if (!isSubmitting) {
              (e.currentTarget.form as HTMLFormElement | null)?.requestSubmit();
            }
          }
          if (e.key === "Escape" && variant === "reply") {
            close?.();
          }
        }}
      />
      {errors.comment && (
        <p
          id="error"
          role="alert"
          aria-live="assertive"
          className="text-red-500 small"
        >
          {errors.comment.message}!
        </p>
      )}
      <div
        className={`flex items-center justify-between ${
          variant === "comment" && "mt-6"
        } `}
      >
        {variant === "comment" && (
          <p
            id={"remaining-characters"}
            aria-live={remainingCharacters === 0 ? "assertive" : "polite"}
            className="text-[15px] text-[#647196]"
          >
            {remainingCharacters}{" "}
            {remainingCharacters === 1 ? "character" : "characters"} left
          </p>
        )}
        <Button variant="pink" className="shrink-0" loading={isSubmitting}>
          Post {variant == "comment" ? "Comment" : "Reply"}{" "}
        </Button>
      </div>
    </motion.form>
  );
};

export default AddCommentForm;
