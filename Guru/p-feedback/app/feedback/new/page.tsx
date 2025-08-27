import BackButton from "@/components/BackButton";
import FeedbackForm from "@/components/forms/FeedbackForm";
import Image from "next/image";
import React from "react";

const AddFeedbackPage = () => {
  return (
    <main className="mx-6 my-8 md:max-w-xl md:mx-auto flex flex-col gap-9">
      <header className="">
        <BackButton variant="arrow" />
      </header>
      <section className="px-6 flex flex-col gap-6">
        <Image
          src="/assets/shared/icon-new-feedback.svg"
          alt="New Feedback"
          width={40}
          height={40}
        />
        <h3>Create New Feedback</h3>
        <FeedbackForm />
      </section>
    </main>
  );
};

export default AddFeedbackPage;
