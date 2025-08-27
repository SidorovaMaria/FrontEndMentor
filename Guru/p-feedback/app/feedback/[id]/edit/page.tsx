import BackButton from "@/components/BackButton";
import Image from "next/image";
import React from "react";
import data from "../../../../data/data.json";
import FeedbackForm from "@/components/forms/FeedbackForm";
const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const requestToEdit = data.productRequests.find(
    (req) => req.id.toString() === id
  ) as ProductRequest;
  if (!requestToEdit) {
    throw new Error("Request not found");
  }

  return (
    <main className="mx-6 my-8  md:max-w-xl md:mx-auto flex flex-col gap-9">
      <header className="">
        <BackButton variant="arrow" />
      </header>
      <section className="px-6 flex flex-col gap-6">
        <Image
          src="/assets/shared/icon-edit-feedback.svg"
          alt="New Feedback"
          width={40}
          height={40}
        />
        <h2>Editing ‘{requestToEdit.title}’</h2>
        <FeedbackForm request={requestToEdit} />
      </section>
    </main>
  );
};

export default EditPage;
