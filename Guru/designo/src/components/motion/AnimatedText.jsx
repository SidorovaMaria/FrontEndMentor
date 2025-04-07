import { motion } from "framer-motion";

const AnimatedText = ({ children, className, delay = 0, wordGap = 1 }) => {
	// Ensure children is a valid string before splitting
	const text = children ? String(children) : "";
	const words = text.split(" "); // Split text into words

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className={`inline-block overflow-hidden ${className}`}
			variants={{
				hidden: { opacity: 1 },
				visible: {
					transition: {
						staggerChildren: 0.03,
						delayChildren: delay,
					},
				},
			}}
		>
			{words.map((word, index) => (
				<motion.span
					key={index}
					className={`inline-block mr-2`}
					variants={{
						hidden: { opacity: 0, y: 10 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.8 },
						},
					}}
				>
					{word}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedText;
