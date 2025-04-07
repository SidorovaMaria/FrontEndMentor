import { motion } from "motion/react";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const ThankYou = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="flex size-full flex-col items-center justify-center"
		>
			<motion.div
				animate={{
					scale: [2, 0.5, 1],
				}}
				variants={item}
				className="flex justify-center"
			>
				<img
					src="../../public/assets/images/icon-thank-you.svg"
					alt="thank you icon"
				/>
			</motion.div>

			<motion.div variants={item} className="mt-8 flex flex-col gap-3.5">
				<h1 className="text-form-denim text-center text-[32px] font-bold">
					Thank you!
				</h1>
				<p className="text-regular text-form-grey text-center">
					Thanks for confirming your subscription! We hope you have
					fun using our platform. If you ever need support, please
					feel free to email us at support@loremgaming.com.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default ThankYou;
