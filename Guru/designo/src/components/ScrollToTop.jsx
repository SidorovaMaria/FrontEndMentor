import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);

		const timeout = setTimeout(() => {
			window.scrollTo({ top: 10, behavior: "smooth" });
			setIsTransitioning(false);
		}, 400);

		return () => clearTimeout(timeout);
	}, [pathname]);

	return (
		<AnimatePresence>
			{isTransitioning && (
				<motion.div
					key={pathname}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					exit={{ scaleX: 0 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-[9999]"
				/>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
