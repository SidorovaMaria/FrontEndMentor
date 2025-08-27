import React from "react";

import data from "../../../data/data.json";
import RequestItem from "@/components/RequestItem";
import { Button } from "@/components/ui/Button";

import Comment from "@/components/Comment";

import BackButton from "@/components/BackButton";
import AddCommentForm from "@/components/forms/AddCommentForm";
import Link from "next/link";

const RequestPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const request = data.productRequests.find(
    (req) => req.id.toString() === id
  ) as ProductRequest;
  if (!request) {
    throw new Error("Request not found");
  }

  return (
    <main className="max-w-2xl mx-auto mt-6 px-4">
      <header className="flex items-center justify-between my-6">
        <BackButton variant="arrow" />
        <Button variant="blue">
          <Link href={`/feedback/${id}/edit`}>Edit Feedback</Link>
        </Button>
      </header>
      <RequestItem request={request} />
      <section className="my-6 bg-white rounded-[10px] p-6">
        <h3>{request.comments ? request.comments.length : 0} Comments</h3>
        <div className="flex flex-col w-full gap-6 mt-6">
          {request.comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
      <section className="bg-white rounded-[10px] p-6 flex flex-col gap-6">
        <h3>Add Comment</h3>
        <AddCommentForm />
      </section>
    </main>
  );
};

export default RequestPage;
