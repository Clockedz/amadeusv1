import React, {useState} from "react";
import {motion} from "framer-motion";
import AnimatedLetter from "./AnimatedLetter";

const App = () => {
	const [showLetter, setShowLetter] = useState(false);

	const handleClick = () => {
		setShowLetter(false);
		setTimeout(() => setShowLetter(true), 100); // delay for a short time to allow the component to unmount and mount again
	};

	return (
		<div>
			<button onClick={handleClick}>Animate Text</button>
			{showLetter && <AnimatedLetter text="Hello World" />}
		</div>
	);
};

export default App;
