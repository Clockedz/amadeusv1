import React from "react";
import {motion} from "framer-motion";

const AnimatedLetter = ({text}) => {
	const letters = text.split("");

	const container = {
		hidden: {opacity: 0},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {staggerChildren: 0.1, delayChildren: 0.04 * i},
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 75,
			},
		},
		hidden: {
			opacity: 0,
			y: -50,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 75,
			},
		},
	};

	return (
		<motion.div
			style={{overflow: "hidden", display: "flex", paddingBottom: "5vh"}}
			variants={container}
			initial="hidden"
			animate="visible"
			exit={false}
		>
			{letters.map((letter, index) => (
				<motion.span variants={child} key={index}>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedLetter;
