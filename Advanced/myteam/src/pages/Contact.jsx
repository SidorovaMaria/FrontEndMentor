import React from "react";
import { contactAbout } from "../app/data";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<main className="pt-20 pb-22 xl:flex xl:items-center xl:gap-[30px] relative overflow-hidden">
			<section className="text-center md:flex md:flex-col md:gap-6 md:items-center xl:gap-4 xl:items-start xl:w-full xl:pr-0 ">
				<h2 className="md:text-[64px] md:leading-14 xl:leading-[100px]">
					Contact{" "}
				</h2>
				<h3 className="text-light-coral">Ask us about</h3>
				<div className="flex flex-col gap-6 mt-10 md:mt-0 mb-14 md:mb-16  xl:mb-0 xl:mt-4 justify-center ">
					{contactAbout.map((about, index) => (
						<div
							key={index}
							className="flex items-center gap-[23px]"
						>
							<img src={about.icon} alt={about.alt} />
							<p className="text-left text-[18px] ">
								{about.text}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="md:px-[113px] xl:w-full xl:pl-0">
				<ContactForm />
			</section>
			<img
				src="/assets/bg-pattern-about-2-contact-1.svg"
				alt="Bg pattern 1"
				className="absolute hidden md:block md:top-[70px] md:-left-[100px]"
			/>
			<img
				src="/assets/bg-pattern-contact-2.svg"
				alt="Bg pattern 2"
				className="absolute -bottom-[100px] -right-[100px] md:bottom-0"
			/>
		</main>
	);
};

export default Contact;
