import React from "react";
import { useParams } from "react-router";
import { blogPosts } from "../data/data";
import { formatDate } from "../app/helperFunctions";

import ReactMarkdown from "react-markdown";
import MarkDownTheme from "../components/MarkDownTheme";

const SingleBlog = () => {
  const { slug } = useParams();
  const singleBlog = blogPosts.find((post) => post.slug === slug);
  if (!singleBlog) {
    return <p>Post not found.</p>;
  }

  const sections = singleBlog.content.split(/(?:\n|^)---(?:\n|$)/);

  return (
    <main className="px-[10px]">
      {/* Intro */}
      <section className="flex flex-col gap-4 my-8 ">
        <h1 className="text-preset-1 text-neural-700 dark:text-neural-0">
          {singleBlog.title}
        </h1>
        <p className="text-preset-8 italic text-neural-600 dark:text-neural-400 ">
          {formatDate(singleBlog.publishedAt)}
        </p>
        <div className="text-preset-7 ">
          <ReactMarkdown>{sections[0]}</ReactMarkdown>
        </div>
      </section>
      <section className="my-8 markdown">
        {sections.slice(1, sections.length).map((section, index) => (
          <div key={index} className="py-6 flex flex-col gap-4  ">
            <MarkDownTheme content={section} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default SingleBlog;
