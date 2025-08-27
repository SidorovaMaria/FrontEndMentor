import React from "react";
import RequestItem from "@/components/RequestItem";
import { Button } from "@/components/ui/Button";

import Comment from "@/components/Comment";

import AddCommentForm from "@/components/forms/AddCommentForm";
import Link from "next/link";
import { getProductRequestById } from "@/lib/data/api";

const RequestPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const request = await getProductRequestById(id);

  return (
    <main className="max-w-2xl mx-auto mt-6 px-4">
      <header className="flex items-center justify-between my-6">
        <Button variant="arrow">
          <Link href={`/`}>Go Back</Link>
        </Button>
        <Button variant="blue">
          <Link href={`/feedback/${id}/edit`}>Edit Feedback</Link>
        </Button>
      </header>
      <RequestItem request={request} />
      <section className="my-6 bg-white rounded-[10px] p-6">
        <h3>{request.comments ? request.comments.length : 0} Comments</h3>
        <div className="flex flex-col w-full gap-6 mt-6">
          {request.comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} requestId={id} />
          ))}
        </div>
      </section>
      <section className="bg-white rounded-[10px] p-6 flex flex-col gap-6">
        <h3>Add Comment</h3>
        <AddCommentForm requestId={id} />
      </section>
    </main>
  );
};

export default RequestPage;
