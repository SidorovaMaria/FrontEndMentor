import React, { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import workspaceLarge from "/assets/images/image-workspace-large.jpg";
import workspaceSmall from "/assets/images/image-workspace-small.jpg";
const About = () => {
	const [workspaceImage, setWorkSpaceImage] = useState();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setWorkSpaceImage(workspaceLarge);
			} else {
				setWorkSpaceImage(workspaceSmall);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<main className="px-[10px] pyt-8 pb-4">
			<h2 className="text-decor-full-8 text-preset-3 text-neural-700 dark:text-neural-0">
				About Me
			</h2>
			<section className="py-6 flex flex-col gap-6 text-neural-600 dark:text-neural-400 text-preset-7">
				<p>
					Hi, I’m Paulina! Ever since I can remember, I’ve had a
					passion for creativity and problem-solving. That’s what led
					me to the world of front-end web development. There’s
					something magical about seeing an idea come to life in the
					browser—whether it’s a simple layout experiment or a complex
					interface for a bigger project.
				</p>
				<p>
					When I’m not coding, I love getting lost in a good book. My
					taste is pretty eclectic: I’ll happily read everything from
					fantasy novels to biographies of tech pioneers. Reading
					helps me unwind and often sparks new ideas for my coding
					projects.
				</p>
				<p>
					Another big passion of mine is the great outdoors. Hiking
					allows me to disconnect from the digital world and reconnect
					with nature. I love challenging hikes with rewarding views
					at the top. And if I’m not on the trails, you might catch me
					rock climbing. The combination of mental focus and physical
					endurance is a perfect parallel to tackling tough coding
					challenges!
				</p>
				<p>Some of my favorite books:</p>
				<ul className="list-disc ps-4 md:ps-7 flex flex-col gap-2">
					<li>
						<span className="font-bold">
							“The Pragmatic Programmer”{" "}
						</span>
						by Andrew Hunt and David Thomas (for helpful insights
						into software development)
					</li>
					<li>
						<span className="font-bold">“Ready Player One” </span>
						by Ernest Cline (for some futuristic escapism)
					</li>
					<li>
						<span className="font-bold">“The Hobbit” </span>
						by J.R.R. Tolkien (for a bit of fantasy fun)
					</li>
					<li>
						<span className="font-bold">“Educated” </span>
						by Tara Westover (for incredible inspiration)
					</li>
				</ul>
				<p>
					I absolutely love my workspace as a place that inspires me
					to do my best work, so I thought I’d share it with you:
				</p>
				<img
					src={workspaceImage}
					alt="work space image"
					className="rounded-[12px]"
				/>
				<p>
					I hope this blog not only documents my growth but also helps
					others see that coding can be for everyone. Thanks for
					joining me on this journey!
				</p>
				<article className="flex flex-col gap-4">
					<h4 className="text-preset-4">Follow me</h4>
					<SocialLinks className={"gap-3"} />
				</article>
			</section>
		</main>
	);
};

export default About;
