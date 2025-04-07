import React from "react";
import { useLocation, useNavigate } from "react-router";
import SectioninView from "./motion/SectioninView";
import AnimatedText from "./motion/AnimatedText";
import AnimatedBtn from "./motion/AnimatedBtn";
const FooterContact = () => {
	let navigate = useNavigate();
	const location = useLocation();

	if (location.pathname === "/contact") {
		return null; // If we're already on the "/contact" page, return nothing.
	}

	return (
		<section className="mx-6 md:mx-0">
			<SectioninView
				className={`bg-peach text-white rounded-15 py-16 px-6 md:px-16 text-center flex flex-col gap-8 items-center relative overflow-hidden z-10`}
			>
				<div className="flex flex-col gap-3 items-center relative z-20">
					<AnimatedText
						className="text-[32px] md:text-[40px] leading-[41px] md:leading-[40px] font-medium md:max-w-[335px]"
						wordGap={2}
					>
						Let’s talk about your project
					</AnimatedText>
					<AnimatedText
						className={`text-body font-medium md:max-w-[480px]`}
						wordGap={1.5}
					>
						Ready to take it to the next level? Contact us today and
						find out how our expertise can help your business grow.
					</AnimatedText>
				</div>
				<AnimatedBtn
					className="btn-light uppercase text-[15px] leading-[22px] tracking-[1px] font-medium mt-6 md:mt-5 lg:mt-10 z-10"
					onClick={() => navigate("/contact")}
					delayBtn={1.3}
				>
					Get in touch
				</AnimatedBtn>
				<img
					src="/assets/shared/desktop/circle.svg"
					className="absolute object-cover top-0 min-h-full min-w-full lg:min-w-auto lg:right-0 z-0 "
				/>
			</SectioninView>
		</section>
	);
};

export default FooterContact;
