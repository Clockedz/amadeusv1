import React from "react";
import "./Slot.css";
import AnimatedLetter from "./AnimatedLetter";
import About from "./About";
import Market from "./Market";
import Cookies from "js-cookie";
import {crypta, cryptb} from "./encrypt";

function Slot() {
	const alphabet = "ΑβΓΔΕΖηθιΚλμνΞΟπρΣτυφχψΩ".split("");
	const [isText, setText] = React.useState(alphabet);
	const [btnText, setBtnText] = React.useState("Spin");
	const [isNanocash, setNanocash] = React.useState(10);
	const [showLetter, setShowLetter] = React.useState(false);
	const [showAlphabet, setShowAlphabet] = React.useState(true);
	const [isFinish, setIsFinish] = React.useState(false);

	if (!isFinish) {
		const cookies = Cookies.get("nanocash");
		if (cookies) {
			setNanocash(
				Math.round(cryptb(cookies) * 100 + Number.EPSILON) / 100
			);

			setIsFinish(true);
		}
	}

	if (Array.isArray(isText)) {
		setText(isText.join(""));
	}

	function handleClick() {
		setNanocash((oV) => oV - 10);

		const nums = Array.from({length: 5}, () =>
			Math.floor(Math.random() * 24)
		);
		console.log(nums);
		const newText = [];
		let winnings = 0;

		const storedArray = JSON.parse(sessionStorage.getItem("values"));

		for (let i = 0; i < 5; i++) {
			const currentLetter = alphabet[nums[i]];
			newText.push(currentLetter);
			const index = storedArray.find(
				(item) => item.character === currentLetter
			);
			if (index.value.updated === 0) {
				index.value.updated = index.value.original;
			}
			winnings = winnings + index.value.updated;
			index.showed++;
			winnings = Number(winnings.toFixed(2));
			console.log(index);
		}

		setText(newText.join("  |  "));
		setNanocash(
			(oV) =>
				(Math.floor(oV) + Math.round(winnings * 100 + Number.EPSILON)) /
				100
		);

		setShowAlphabet(false);
		setShowLetter(false);
		setTimeout(() => setShowLetter(true), 100);
		const totalValue = storedArray.reduce(
			(letter, obj) => letter + obj.showed,
			0
		);

		function evaluate() {
			const staticValues = ["Ξ", "π"];
			const mean = totalValue / storedArray.length;
			let totalSum = 0;

			for (let i = 0; i < storedArray.length; i++) {
				const currentLetter = alphabet[i];
				const index = storedArray.find(
					(item) => item.character === currentLetter
				);
				totalSum = totalSum + Math.pow(index.showed - mean, 2);
			}

			const stadev = Math.sqrt(totalSum / storedArray.length);
			console.log(`standard deviation: ${stadev}\nmean: ${mean}`);

			for (let i = 0; i < storedArray.length - 2; i++) {
				const currentLetter = alphabet[i];
				const index = storedArray.find(
					(item) => item.character === currentLetter
				);
				if (!staticValues.includes(currentLetter)) {
					if (index.showed >= mean) {
						if (index.showed >= mean + stadev * 3) {
							index.value.updated =
								Math.round(index.value.original * 0.5 * 100) /
								100;
						} else if (index.showed >= mean + stadev * 2) {
							index.value.updated =
								Math.round(index.value.original * 0.75 * 100) /
								100;
						} else if (index.showed >= mean + stadev) {
							index.value.updated =
								Math.round(index.value.original * 0.85 * 100) /
								100;
						} else if (mean + stadev > index.showed > mean) {
							index.value.updated =
								Math.round(index.value.original * 0.9 * 100) /
								100;
						}
					} else if (index.showed <= mean) {
						if (mean - stadev < index.showed < mean) {
						} else if (mean - stadev * 2 < index < mean - stadev) {
							index.value.updated =
								Math.round(index.value.original * 1.25 * 100) /
								100;
						} else if (
							mean - stadev * 3 <
							index.showed <
							mean - stadev * 2
						) {
							index.value.updated =
								Math.round(index.value.original * 1.5 * 100) /
								100;
						}
					}
				}
			}
		}

		evaluate();
		sessionStorage.setItem("values", JSON.stringify(storedArray));
	}

	function mouseEnter() {
		setBtnText("Γνέθω");
	}
	function mouseLeave() {
		setBtnText("₣10");
	}

	React.useEffect(() => {
		Cookies.set("nanocash", crypta(isNanocash));
	}, [isNanocash]);

	return (
		<div>
			<nav className="navbar">
				<div className="wallet">
					<img
						className="wallet-png"
						src={require("./images/wallet1.png")}
					></img>
					<p>₣{isNanocash}</p>
				</div>
				<span>v1.1.0</span>
			</nav>
			<div className="slot">
				<div className="results" style={{whiteSpace: "pre-wrap"}}>
					{showAlphabet && <p className="alphabet">{alphabet}</p>}
					{showLetter && <AnimatedLetter text={isText} />}
				</div>

				<button
					className="roll--button"
					id="roll"
					onClick={handleClick}
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				>
					{btnText}
				</button>
			</div>
			<div className="about-card">
				<About />
			</div>

			<div className="market">
				<Market />
			</div>
		</div>
	);
}

export default Slot;
