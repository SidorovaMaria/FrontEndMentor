import React from "react";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const extractText = (children) => {
	const childArray = React.Children.toArray(children);
	return childArray
		.map((child) => {
			if (React.isValidElement(child)) {
				return extractText(child.props.children);
			}
			return typeof child === "string" ? child.trim() : "";
		})
		.filter(Boolean)
		.join(" ");
};

const MarkDownTheme = ({ content }) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
			components={{
				h1: ({ children }) => (
					<h1 className="text-preset-1 text-neural-700 dark:text-neural-0">
						{children}
					</h1>
				),
				h2: ({ children }) => (
					<h2 className="text-preset-3 text-neural-700 dark:text-neural-0">
						{children}
					</h2>
				),
				h3: ({ children }) => (
					<h3 className="text-preset-4 text-neural-700 dark:text-neural-0">
						{children}
					</h3>
				),
				p: ({ children }) => (
					<p className="text-preset-7 text-neural-600 dark:text-neural-400  ">
						{children}
					</p>
				),
				a: ({ children }) => {
					<a className="text-decor-full-3 bg-red-800">{children}</a>;
				},
				code: ({ children }) => (
					<code className="font-fira text-[#4B4D65] dark:text-neural-300 inline-block p-1 m-1 code">
						{children}
					</code>
				),
				pre: ({ children }) => (
					<pre className="border border-neural-200 dark:border-neural-700 bg-neural-200 dark:bg-neural-800 rounded-12 overflow-x-auto p-3 text-neural-0">
						{children}
					</pre>
				),
				table: ({ children }) => (
					<div className="overflow-x-auto rounded-[8px]  border border-neural-200 dark:border-neural-700 ">
						<table className=" border-collapse ">{children}</table>
					</div>
				),

				blockquote: ({ children }) => {
					const text = extractText(children);
					let className = "";
					let icon = null;

					if (text.includes("Warning")) {
						className =
							" bg-yellow-200 dark:bg-yellow-900 border-[1px] border-yellow-500 dark:border-yellow-700 rounded-12 group";
						icon = (
							<img
								src="../../public/assets/images/icon-warning.svg"
								alt="Warning Icon"
								className="w-[21px] h-[26px] icon"
							/>
						);
					} else if (text.includes("Tip")) {
						className =
							"bg-green-200 dark:bg-green-900 border-[1px] border-green-500 dark:border-green-700 rounded-12 group";
						icon = (
							<img
								src="../../public/assets/images/icon-tip.svg"
								alt="Tip Icon"
								className="w-5 h-[26px] icon"
							/>
						);
					} else if (text.includes("Information")) {
						className =
							"bg-blue-200 dark:bg-blue-900 border-[1px] border-blue-500 dark:border-blue-700  rounded-12 group";
						icon = (
							<img
								src="../../public/assets/images/icon-info.svg"
								alt="Info Icon"
								className="w-5 h-[26px] icon"
							/>
						);
					}

					return (
						<blockquote
							className={`${className} text-neural-700 dark:text-neural-0 flex items-start gap-2 w-full p-3 md:py-3 md:px-10`}
						>
							{icon}
							<div className="">{children}</div>
						</blockquote>
					);
				},

				strong: ({ children }) => (
					<strong className="inline-block group-has-[.icon]:pb-[6px]">
						{children}
					</strong>
				),
				ol: ({ children }) => (
					<ol className="flex flex-col gap-[12px] list-decimal ps-7 marker:font-bold">
						{children}
					</ol>
				),
				ul: ({ children }) => (
					<ul className="flex flex-col gap-[12px] list-disc ps-7 ">
						{children}
					</ul>
				),
			}}
		>
			{content}
		</ReactMarkdown>
	);
};

export default MarkDownTheme;
