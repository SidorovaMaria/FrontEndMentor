import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { createReplyForComment } from "@/lib/data/api";
const AddReplyForm = ({
  close,
  commentId,
  replyTo,
  requestId,
}: {
  close: () => void;
  commentId: string;
  replyTo: string;
  requestId: string;
}) => {
  const commentSchema = z.object({
    reply: z
      .string()
      .max(250, "Comment should not exceed 250 characters")
      .min(1, "Comment is required"),
  });
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      reply: "",
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
  const onSubmit = async (data: z.infer<typeof commentSchema>) => {
    const result = await createReplyForComment({
      commentId,
      replyingTo: replyTo,
      requestId,
      content: data.reply,
    });
    close();
    reset();
  };
  return (
    <motion.form
      initial={{ opacity: 0, scaleY: 0, originY: 0 }} // 0 = top, 0.5 = center, 1 = bottom
      animate={{ opacity: 1, scaleY: 1, originY: 0 }}
      exit={{ opacity: 0, scaleY: 0, originY: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="add-comment-form"
    >
      <textarea
        id={"text-area"}
        maxLength={250}
        aria-invalid={!!errors.reply}
        spellCheck="true"
        className="w-full flex-1 px-6 py-4 placeholder:text-[#8C92B3] text-[15px]
        focus:bg-[#F7F8FD] focus:outline-[#4661E6] text-[#3A4374]"
        placeholder="Type your reply here"
        {...form.register("reply")}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            if (!isSubmitting) {
              (e.currentTarget.form as HTMLFormElement | null)?.requestSubmit();
            }
          }
        }}
      />
      {errors.reply && (
        <p
          id="error"
          role="alert"
          aria-live="assertive"
          className="text-red-500 small"
        >
          {errors.reply.message}!
        </p>
      )}
      <div className={`flex items-center justify-end w-full `}>
        <Button variant="pink" className="shrink-0" loading={isSubmitting}>
          Post Reply
        </Button>
      </div>
    </motion.form>
  );
};

export default AddReplyForm;
