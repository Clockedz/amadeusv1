import React from "react";
import {motion} from "framer-motion";
import "./Market.css";
import MarketGraph from "./MarketGraph";
import alphabet from "./alphabet";

function Market() {
	const storedArray = JSON.parse(sessionStorage.getItem("values"));

	const marketValues = storedArray.map((item) => (
		<MarketGraph key={item.id} {...item} />
	));

	const [isOpen, setOpen] = React.useState(false);
	const [isStyle, setStyle] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [queryValues, setQueryValues] = React.useState([]);
	const [filteredValues, setFilteredValues] = React.useState();

	let newSearchQuery = searchQuery ? "" : false;

	if (searchQuery) {
		for (let i = 0; i < searchQuery.length; i++) {
			alphabet.forEach((letters) => {
				if (letters.english === searchQuery[i].toLowerCase()) {
					newSearchQuery = newSearchQuery + letters.greek;
				}
			});
		}
	}

	React.useEffect(() => {
		if (newSearchQuery) {
			setQueryValues((prevValues) => {
				const uniqueValues = new Set(
					prevValues.map((v) => v.character)
				);
				const newValues = [];
				for (let i = 0; i < storedArray.length; i++) {
					for (let y = 0; y < newSearchQuery.length; y++) {
						if (
							storedArray[i].character === newSearchQuery[y] &&
							!uniqueValues.has(storedArray[i].character)
						) {
							newValues.push(storedArray[i]);
						}
					}
				}
				const updatedValues = [...prevValues, ...newValues];
				if (updatedValues.length !== 0) {
					const updatedFilteredValues = updatedValues.map((item) => (
						<MarketGraph key={item.id} {...item} />
					));
					setFilteredValues(updatedFilteredValues);
				} else {
					setFilteredValues(null);
				}
				return updatedValues;
			});
		} else {
			setQueryValues([]);
			setFilteredValues(null);
		}
	}, [newSearchQuery]);

	const line = {
		img: (
			<svg
				id="line-svg"
				width="200"
				height="2"
				viewBox="0 0 200 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 1H110H199.5" stroke="white" strokeWidth="2" />
			</svg>
		),
		show: false,
	};

	function handleClick() {
		setOpen((oV) => !oV);
		setStyle((oV) => !oV);
	}

	let styling = isStyle ? "market-page-open" : "market-page";
	let titleStyle = isStyle ? "market-title-open" : "market-title";

	return (
		<motion.div
			className={styling}
			onClick={isOpen ? () => true : handleClick}
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
		>
			{isOpen ? (
				<div className="parent-div">
					<motion.p
						className={titleStyle}
						onClick={handleClick}
						initial={{y: "250px"}}
						animate={{
							x: isOpen ? "-55px" : 0,
							y: isOpen ? "10px" : 0,
							transition: {duration: 0.8, ease: "easeOut"},
						}}
					>
						Market
					</motion.p>
					<div>{line.img}</div>
					<div className="search">
						<img
							src={require("./images/search.png")}
							className="searchbar-img"
						></img>
						<input
							className="searchbar"
							type="text"
							placeholder="Find a value"
							value={searchQuery}
							onChange={(event) =>
								setSearchQuery(event.target.value)
							}
						></input>
					</div>
					<div className="market-values">
						{filteredValues ? filteredValues : marketValues}
					</div>
				</div>
			) : (
				<p className="market-title">Market</p>
			)}
		</motion.div>
	);
}

export default Market;
