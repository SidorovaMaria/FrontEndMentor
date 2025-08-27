"use client";
import { CategoryFilter } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/Select";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "../ui/Button";
const FeedbackForm = ({ request }: { request?: ProductRequest }) => {
  const categoryOption =
    request?.category && !["ux", "ui"].includes(request.category)
      ? request.category.charAt(0).toUpperCase() + request.category.slice(1)
      : request?.category.toUpperCase();

  const feedbackSchema = z.object({
    feedback: z.string().min(1, "Title is required"),
    category: z.enum(CategoryFilter),
    details: z
      .string()
      .min(1, "Can't be empty")
      .max(500, "Details should not exceed 500 characters"),
  });
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedback: request?.title || "",
      category: categoryOption || "Feature",
      details: request?.description || "",
    },
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;
  const onSubmit = (data: z.infer<typeof feedbackSchema>) => {
    console.log(data);
  };
  const clearForm = () => {
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Feedback Title */}
      <div className="flex flex-col gap-4 w-full">
        <div className="space-y-0.5">
          <label htmlFor="title" className="font-bold">
            Feedback Title
          </label>
          <p id="title-help" className="text-[13px] text-[#647196]">
            Add a short, descriptive headline
          </p>
        </div>
        <div className="space-y-2 w-full">
          <Input
            {...register("feedback")}
            id="title"
            name="feedback"
            aria-describedby={`title-help ${
              errors.feedback ? "title-error" : ""
            }`}
            aria-invalid={!!errors.feedback}
            type="text"
            className="w-full"
            placeholder="e.g. Add a dark mode option"
          />
          {errors.feedback && (
            <p
              id="title-error"
              role="alert"
              className="text-[13px] text-[#D73737] font-semibold"
            >
              {errors.feedback.message}!
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="space-y-0.5 w-full">
          <label htmlFor="category" className="font-bold">
            Category
          </label>
          <p id="category-help" className="text-[13px] text-[#647196]">
            Choose a category for your feedback
          </p>
        </div>
        <Select
          onValueChange={(value) => form.setValue("category", value)}
          value={form.watch("category")}
          aria-labelledby="category "
          aria-describedby="category-help"
        >
          <SelectTrigger className="font-normal text-[15px] text-[#3A4374] ">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent id="category">
            {Object.values(CategoryFilter).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 w-full">
        <div className="space-y-0.5">
          <label htmlFor="details" className="font-bold">
            Feedback Detail
          </label>
          <p id="details-help" className="text-[13px] text-[#647196]">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
        </div>
        <div className="space-y-2 w-full">
          <textarea
            {...register("details")}
            id="details"
            name="details"
            rows={3}
            aria-describedby={`details-help ${
              errors.details ? "details-error" : ""
            }`}
            aria-invalid={!!errors.details}
            className="w-full bg-[#f7f8fd] rounded-[5px]  px-6 py-3 text-[15px] border outline-none ring-0 border-transparent active:border-[#4661e6] focus:border-[#4661e6] invalid:border-[#D73737]"
            placeholder="e.g. Describe the issue in detail"
          />
          {errors.details && (
            <p
              id="details-error"
              role="alert"
              className="text-[13px] text-[#D73737] font-semibold"
            >
              {errors.details.message}!
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        {request && (
          <Button
            variant="orange"
            type="button"
            aria-label={`Delete ${request.title}`}
          >
            Delete
          </Button>
        )}
        <div className="ml-auto flex justify-end gap-4 items-center">
          <Button
            type="button"
            variant="darkblue"
            onClick={clearForm}
            aria-label="Cancel adding feedback"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="pink"
            loading={isSubmitting}
            aria-label="Add feedback"
            aria-busy={isSubmitting}
          >
            Add Feedback
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
