import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import {
	checkMatch,
	incrementMove,
	pushToCheckingCards,
} from "../features/cardsSlice";
import { nextPlayer } from "../features/gameSlice";

const MemoryCard = ({ type, icon, iconStyle }) => {
	const [card, setCard] = useState({
		flipped: false,
		foundPair: false,
		highlited: false,
	});
	const cards = useSelector((state) => state.cards);
	const dispatch = useDispatch();

	const flipCard = () => {
		if (!card.foundPair && !card.flipped && !cards.isChecking) {
			setCard((prev) => ({
				...prev,
				flipped: true,
			}));
			if (type === "icons") {
				dispatch(pushToCheckingCards(icon.iconName));
			} else {
				dispatch(pushToCheckingCards(icon));
			}
		}
	};

	useEffect(() => {
		const checkValue = type === "icons" ? icon.iconName : icon;

		if (cards.matchedCards.includes(checkValue) && !card.foundPair) {
			setCard((prev) => ({
				...prev,
				flipped: true,
				foundPair: true,
				highlited: true,
			}));

			const timer = setTimeout(() => {
				setCard((prev) => ({
					...prev,
					highlited: false,
				}));
			}, 100);
		} else if (
			!cards.checkingCards.includes(checkValue) &&
			!card.foundPair
		) {
			setCard((prev) => ({
				...prev,
				flipped: false,
			}));
		}
	}, [cards.checkingCards]);

	useEffect(() => {
		if (cards.allCardsFound) {
			setCard((prev) => ({
				...prev,
				foundPair: false,
			}));
		}
	}, [cards.allCardsFound]);

	return (
		<motion.div
			transition={{ duration: 0.7 }}
			animate={{ rotateY: card.flipped ? 0 : 180 }}
			onClick={flipCard}
			className={
				cards.isChecking ? "cursor-not-allowed" : "cursor-pointer"
			}
		>
			<motion.div
				transition={{ duration: 0.7 }}
				animate={{
					rotateY: card.flipped ? 0 : 180,
					backgroundColor: card.flipped
						? card.highlited
							? "#FDA214"
							: "#BCCED9"
						: "#304859",
				}}
				className={`w-full h-full rounded-full aspect-square text-white flex items-center justify-center  ${
					!card.flipped ? "hover:bg-blue-500!" : ""
				}`}
			>
				{/* FrontSide */}
				<motion.div
					initial={{ rotateY: 180 }}
					animate={{ rotateY: card.flipped ? 180 : 0 }}
					transition={{ duration: 0.7 }}
					className="backface-hidden"
				>
					<h1></h1>
				</motion.div>
				{/* Back Side */}
				<motion.div
					transition={{ duration: 0.7 }}
					animate={{ rotateY: card.flipped ? 0 : 180 }}
					className="backface-hidden"
				>
					{type === "icons" ? (
						<FontAwesomeIcon icon={icon} className={iconStyle} />
					) : (
						<p className={iconStyle}>{icon}</p>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default MemoryCard;
