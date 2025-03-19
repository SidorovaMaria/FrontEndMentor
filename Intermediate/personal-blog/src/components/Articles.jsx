import React from "react";
import { blogPosts } from "../data/data";
import { formatDate } from "../app/helperFunctions";
import { Link } from "react-router";
const Articles = () => {
	return (
		<div className="flex flex-col gap-6">
			{blogPosts.slice(0, 5).map((post) => (
				<Link key={post.slug} to={`/blog/${post.slug}`}>
					<div className="flex flex-col gap-2">
						<h2 className="text-preset-5 text-neural-700 dark:text-neural-0 hover:opacity-70 hover:underline">
							{post.title}
						</h2>
						<p className="text-preset-8 italic text-neural-600 dark:text-neural-400">
							{formatDate(post.publishedAt)}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Articles;
