import React from "react";
import { blogPosts } from "../data/data";
import { formatDate } from "../app/helperFunctions";
import { Link } from "react-router";

const Blog = () => {
	return (
		<main className="px-[10px]">
			<section className="my-8">
				<div className="flx flex-col gap-[6px] pb-6">
					<h1 className="text-preset-2 text-decor-after text-neural-700 dark:text-neural-0">
						My Articles
					</h1>
					<p className="text-preset-7 text-neural-600 dark:text-neural-400">
						Below are all my recent blog posts. Click on any title
						to read the full article.
					</p>
				</div>
				<div>
					{blogPosts.map((post) => (
						<Link key={post.slug} to={`/blog/${post.slug}`}>
							<div
								key={post.slug}
								className="py-5 flex flex-col gap-2"
							>
								<h4 className="text-preset-5 text-neural-700 dark:text-neural-0 hover:opacity-70 hover:underline">
									{post.title}
								</h4>
								<p className="text-preset-8 italic text-neural-600 dark:text-neural-400">
									{formatDate(post.publishedAt)}
								</p>
								<p className="text-preset-7 text-neural-600  dark:text-neural-400">
									{post.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default Blog;
