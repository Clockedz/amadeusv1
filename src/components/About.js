import React from "react";
import {motion} from "framer-motion";
import "./About.css";

function About() {
	const [isOpen, setOpen] = React.useState(false);
	const [style, setStyle] = React.useState(false);

	let styling = style ? "about--open" : "about";

	function handleClick() {
		setOpen((oV) => !oV);
		setStyle((oV) => !oV);
	}

	return (
		<div className={styling}>
			<motion.div
				layout
				transition={{
					layout: {
						duration: 1,
						type: "spring",
						damping: 18,
						stiffness: 120,
					},
				}}
				animate={{scale: isOpen ? 1 : 1}}
				onClick={handleClick}
				className="card"
			>
				<motion.p className="title">About</motion.p>
				{isOpen && (
					<motion.div>
						<p className="description">
							Experience the pinnacle of aperture apparatus
							technology with our latest creation. Our
							cutting-edge aperture apparatus boasts the world's
							most sophisticated artificial intelligence system,
							Amadeus Systems. Through the application of ClosedAI
							technology from Amadeus Systems, we have achieved a
							remarkable feat: the world's first slot machine
							powered by artificial intelligence and seamlessly
							integrated with Blockchain Technology™.
						</p>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}

export default About;
