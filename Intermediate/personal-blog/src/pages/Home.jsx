import React from "react";
import SocialLinks from "../components/SocialLinks";
import Articles from "../components/Articles";
import { Link } from "react-router";

const Home = () => {
	return (
		<main className="px-[10px]">
			{/* HI section */}
			<section className="py-8 flex flex-col gap-6 ">
				<h1 className="text-preset-2 text-decor-full-8">
					Hi, I’m Paulina 👋
				</h1>
				<p className="text-preset-7 text-neural-600 dark:text-neural-400">
					I’m on a journey to become a front-end web developer. I love
					building little projects, trying out new coding techniques,
					and sharing what I learn along the way. When I’m not at my
					desk, you’ll find me reading, hiking through the mountains,
					or challenging myself on rock-climbing walls.<br></br>{" "}
					<br></br>I started this blog to document my progress, keep
					myself accountable, and hopefully inspire anyone else who’s
					learning to code. Welcome to my corner of the internet, and
					thanks for stopping by!
				</p>
				<SocialLinks className={"gap-3"} />
			</section>
			<section className="flex flex-col gap-8 py-8">
				<h2 className="text-decor-after w-fit text-preset-2 text-neural-700 dark:text-neural-0 ">
					Latest Articles
				</h2>
				<Articles />
				<Link to="/blog">
					<p className="text-decor-full-3 text-preset-6 text-neural-700 dark:text-neural-0 hover:opacity-70">
						View all articles
					</p>
				</Link>
			</section>
		</main>
	);
};

export default Home;
