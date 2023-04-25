import React from "react";
import {motion} from "framer-motion";
import "./MarketGraph.css";

function MarketGraph(props) {
	const letterValue = () => {
		if (props.value.updated === 0) {
			return null;
		}

		if (props.value.original > props.value.updated) {
			return true;
		}
		if (props.value.original < props.value.updated) {
			return false;
		}
		if (props.value.original === props.value.updated) {
			return null;
		}
	};

	let arrow =
		letterValue() === null ? (
			<p></p>
		) : letterValue() ? (
			<img src={require("./images/lose.png")}></img>
		) : (
			<img src={require("./images/up.png")}></img>
		);

	return (
		<div className="letter-market">
			<h1 className="letter-title">{props.character}</h1>
			<p className="company">Amadeus Systems</p>
			<motion.p
				className="letter-original"
				animate={{
					x: "25px",
					y: "-3px",
					transition: {duration: 0.2, ease: "easeInOut"},
				}}
			>
				{props.value.original}
			</motion.p>
			<motion.div
				className="letter-updated"
				animate={{
					x: "-45px",
					y: "-15px",
					transition: {duration: 0.2, ease: "easeInOut"},
				}}
				style={{
					color:
						letterValue() === null
							? "#888888"
							: letterValue()
							? "#F23813"
							: "#238859",
				}}
			>
				{arrow}
				<motion.p>
					{props.value.updated
						? props.value.updated
						: props.value.original}
				</motion.p>
			</motion.div>
		</div>
	);
}

export default MarketGraph;
