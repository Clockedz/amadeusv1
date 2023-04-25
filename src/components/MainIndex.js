import React from "react";
import Load from "./Load";
import Slot from "./Slot";
import Header from "./Header";
import "./MainIndex.css";
import "./Title.css";
import values from "./values";

function MainIndex() {
	React.useEffect(() => {
		if (typeof Storage !== "undefined") {
			if (!sessionStorage.getItem("values")) {
				sessionStorage.setItem("values", JSON.stringify(values));
			}
		}
	}, []);
	const title = {
		img: (
			<svg
				id="logo"
				viewBox="0 0 496 152"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M81.7641 82.5738C82.3271 82.062 82.9334 81.755 83.6327 81.4448C87.4571 79.7488 91.0763 77.8194 94.6306 75.6053C97.2117 73.9974 99.7596 72.3297 102.307 70.661M102.307 70.661C105.535 68.5465 108.761 66.4303 112.052 64.4322C122.531 58.0701 135.078 49.3808 138.291 36.6749C139.02 33.7928 138.962 30.1269 135.507 29.2002C131.292 28.0692 126.284 31.9838 123.42 34.5726C118.666 38.8695 116.249 44.9453 113.376 50.5146C109.827 57.3939 106.181 64.064 102.307 70.661ZM102.307 70.661C100.509 73.7218 98.662 76.7668 96.7523 79.8098C92.6262 86.3843 88.7532 93.0983 84.6839 99.7032C84.1613 100.551 83.638 101.398 83.1206 102.248M83.1206 102.248C82.195 103.768 81.2886 105.299 80.4404 106.866C79.899 107.867 79 111.099 79 109.961C79 107.603 81.1005 104.695 83.1206 102.248ZM83.1206 102.248C84.2262 100.908 85.3077 99.7063 86.0075 98.8078C90.0107 93.6674 95.1676 88.9575 101.19 86.2917C102.592 85.6712 107.015 83.7311 107.614 86.4279C108.401 89.9678 106.799 94.6439 105.765 97.9708C105.093 100.131 102.675 105.832 106.018 107.139C108.454 108.091 112.464 106.328 114.66 105.445C118.522 103.894 122.016 101.537 125.561 99.3917M124.994 99.7876C124.994 99.445 125.225 99.194 125.42 98.9244C126.166 97.8921 126.921 96.8507 127.82 95.9447C129.921 93.8287 132.02 91.7103 134.122 89.5951C138.312 85.3784 142.988 80.7533 148.512 78.3148C151.75 76.8859 155.562 76.0999 159.107 76.4584C162.014 76.7524 162.326 79.1438 161.383 81.596C160.597 83.6402 158.948 85.6259 157.463 87.2066C155.692 89.0922 153.818 90.9083 151.764 92.4861C149.975 93.8602 148.35 95.4108 146.609 96.8434C144.733 98.3866 142.601 99.5082 140.608 100.87C137.123 103.249 133.63 105.093 129.304 104.299C127.876 104.036 126.462 103.486 126.129 101.91C125.899 100.822 125.844 99.2612 126.165 98.1913M162.027 79.5682C162.027 79.5009 161.97 79.2343 161.921 79.444C161.522 81.1405 160.791 82.7702 159.976 84.3097C158.159 87.7417 155.68 90.7439 154.584 94.5258C153.925 96.798 153.513 99.1467 153.006 101.455C152.686 102.907 152.071 105.22 152.769 106.658C153.3 107.75 155.105 108.115 156.204 108.023C158.763 107.81 160.794 107.29 163.109 106.161C165.897 104.801 168.568 103.226 171.392 101.94C173.692 100.892 176.018 99.9658 178.097 98.5106M176.125 99.6912C176.959 99.6295 177.682 98.6927 178.226 98.1491C179.289 97.0855 180.141 95.8689 180.898 94.5761C183.038 90.9192 184.65 87.0357 186.597 83.2795C187.504 81.5291 188.44 79.6514 189.605 78.0565C189.781 77.8151 189.983 77.5812 190.191 77.3483M190.191 77.3483C190.664 76.8196 191.172 76.2959 191.496 75.702C191.844 75.0644 190.774 76.4888 190.191 77.3483ZM190.191 77.3483C190.1 77.4832 190.02 77.6042 189.96 77.7011C188.99 79.2669 188.258 81.0231 187.434 82.6703C185.26 87.0191 183.428 91.2588 182.408 96.0104C181.646 99.5619 180.156 102.924 179.171 106.418C178.738 107.955 178.991 109.658 180.796 108.386C184.534 105.751 187.264 101.599 190.062 98.0412C195.78 90.7691 202.283 83.45 210.434 78.8561C211.953 77.9996 213.966 77.3859 215.638 78.2215C217.877 79.3411 216.786 83.4601 216.374 85.2913C215.819 87.7544 214.943 90.1206 214.394 92.5833C213.791 95.284 213.608 98.0198 213.366 100.77C213.186 102.807 212.938 104.932 213.137 106.977C213.212 107.749 213.035 109.746 214.019 110.01C215.538 110.418 217.289 109.19 218.481 108.449C221.249 106.729 223.988 104.886 226.604 102.941C228.617 101.444 230.704 99.9395 232.62 98.3204C233.227 97.8077 234.333 97.093 234.499 96.2642M234.311 96.7839C234.685 96.5968 234.954 95.5865 235.1 95.2703C235.808 93.7375 236.466 92.1814 237.48 90.8204C239.502 88.1072 241.893 85.7234 244.478 83.5439C246.915 81.4904 249.666 79.5779 252.525 78.1561C254.069 77.3878 255.704 76.8141 257.324 76.2286C258.613 75.7628 259.912 75.1131 261.263 74.851C264.686 74.1868 268.796 73.8005 271.359 76.6943C272.08 77.5084 273.024 78.589 273.248 79.6761C273.602 81.3941 272.723 83.259 271.825 84.6629C268.873 89.2758 263.98 92.3858 259.523 95.3932C255.581 98.0532 251.58 100.249 246.872 101.033C244.401 101.445 241.394 101.988 238.968 101.208C237.065 100.596 235.47 100.261 234.776 98.1809M358.587 81.3843C357.437 80.2344 351.202 89.4205 350.636 90.9167C349.746 93.2685 348.877 95.6755 348.09 98.0696L348.087 98.0788C347.418 100.116 346.778 102.064 347.459 104.178C347.871 105.458 348.786 106.668 350.07 107.181C351.739 107.849 355.062 105.289 356.331 104.533C359.309 102.76 362.072 100.738 364.913 98.7588C367.061 97.2628 369.395 96.1471 371.645 94.8341M367.728 64.1475C365.419 66.6873 363.703 70.0036 361.852 72.8965M382.679 92.7448C384.767 92.1024 387.273 92.0773 389.448 91.896C392.118 91.6735 394.759 91.3969 397.435 91.5696M402.926 83.2848C406.272 81.0925 410.338 80.0148 413.978 78.4206C416.632 77.2579 419.153 75.929 421.581 74.4498M421.581 74.4498C424.23 72.836 426.768 71.0434 429.248 69.0925C438.868 61.5239 446.357 51.9486 451.844 41.0157C453.239 38.2362 456.465 29.229 450.09 30.2098C441.566 31.5211 435.632 42.9601 432.018 49.6358C427.719 57.5769 424.628 65.982 421.581 74.4498ZM421.581 74.4498C421.232 75.4187 420.884 76.3885 420.535 77.3585C418.756 82.3011 417.443 87.3814 415.517 92.2743C413.803 96.6285 412.081 100.917 410.991 105.481C410.125 109.111 408.186 118.896 413.901 120.059C417.053 120.7 420.107 117.704 422.321 115.964C430.484 109.546 438.494 102.951 446.703 96.5843M445.258 97.8849C445.303 97.4762 446.075 96.8152 446.274 96.5727C448.536 93.8131 450.887 91.2493 453.495 88.8053C456.592 85.9036 459.99 83.4369 463.553 81.1366C465.626 79.7984 467.833 78.5318 470.27 78.0076C471.099 77.8293 472.425 77.6219 472.997 78.4741C473.909 79.8318 473.225 81.8279 472.701 83.1846C471.042 87.4851 467.955 91.4086 464.885 94.7711C461.687 98.273 457.888 101.834 453.306 103.38C451.978 103.828 450.272 104.461 448.868 104.052C446.795 103.447 445.713 99.9371 446.282 98.0897M473.603 78.7675C473.533 79.6752 473.175 80.6195 472.943 81.4877C472.261 84.0481 471.469 86.5513 470.503 89.018C468.677 93.6859 466.222 98.2982 465.816 103.355C465.696 104.849 465.648 106.552 467.182 107.33C468.974 108.238 471.041 107.97 472.902 107.476C480.415 105.482 487.028 100.287 493.357 95.9995M272.971 83.4465C275.099 81.3191 277.67 79.371 280.55 78.3937C283.804 77.2898 283.995 82.6188 283.995 84.6459C283.995 91.8212 281.539 99.7985 278.564 106.432M278.564 106.432C278.303 107.015 278.037 107.588 277.769 108.149C273.701 116.655 269.092 124.43 262.687 131.397C256.151 138.507 247.733 144.921 238.469 147.882C234.951 149.007 230.353 149.582 226.858 148.112C225.03 147.343 222.834 145.337 223.183 143.11C223.942 138.274 228.528 133.884 232.013 130.861C237.817 125.826 244.263 121.474 250.974 117.744C257.407 114.169 264.539 111.076 271.491 108.659C273.83 107.847 276.194 107.126 278.564 106.432ZM278.564 106.432C283.074 105.11 287.607 103.881 292.034 102.28M284.462 104.379C284.565 104.105 287.204 103.966 287.287 103.949C291.304 103.127 294.316 99.8763 296.85 96.8259C301.225 91.5582 304.377 85.4047 308.135 79.7175C309.421 77.7706 310.731 75.822 312.161 73.9769C312.761 73.2027 313.538 72.0082 314.525 71.6882C316.029 71.2004 314.034 77.5182 313.815 78.0633C310.326 86.7309 305.38 94.7742 301.08 103.05C299.921 105.28 298.808 107.528 297.756 109.81C297.462 110.448 296.378 112.183 296.933 111.751C297.834 111.051 298.446 109.641 299.003 108.707C301.685 104.212 304.348 99.6675 307.598 95.5494C311.57 90.5171 316.606 86.1885 322.003 82.7464C324.584 81.0998 327.285 79.0415 330.334 78.3805C331.185 78.1961 332.934 77.667 333.386 78.8186C333.792 79.8554 333.582 81.0294 333.393 82.0813C333.001 84.2698 332.533 86.4374 332.321 88.6531C332.145 90.4869 332.015 92.5761 333.001 94.2275C334.985 97.5521 339.552 97.1692 342.843 96.8334C344.904 96.6231 346.831 96.4607 348.772 95.8137M71.1325 37.8034C72.0877 37.6124 73.2635 36.6211 74.131 36.218C78.0151 34.4131 81.5225 32.4183 84.8839 29.7387C89.6542 25.9359 95.1346 21.4296 97.4635 15.6426C105.317 -3.8722 72.3227 4.44158 63.2401 6.66458C43.969 11.3813 27.3193 23.1872 14.2658 37.8723C9.70908 42.9987 4.24974 49.1924 3.20265 56.1731C2.2758 62.3521 4.49513 68.6402 10.5436 71.1308C18.5526 74.4285 28.6844 74.1941 37.1676 74.4049C45.6274 74.6151 53.3899 75.2918 61.5686 77.6446C66.4944 79.0616 70.6006 80.7459 73.8552 84.7788C77.5792 89.3933 76.0794 94.4304 73.614 99.2539C70.8272 104.706 66.2801 108.742 61.6203 112.592C54.7004 118.309 47.6426 123.651 39.6663 127.791L39.4071 127.925C34.4729 130.486 29.4138 133.112 24.0538 134.649C20.9608 135.536 15.4128 137.316 12.1979 135.752C6.7576 133.105 19.5963 120.641 21.2449 119.088C31.6775 109.265 43.1715 102.189 55.9336 95.8074"
					stroke="white"
					strokeWidth="5"
					strokeLinecap="round"
				/>
			</svg>
		),
		show: true,
	};

	const [loading, setLoading] = React.useState(false);
	const [isTitle, setTitle] = React.useState(title);
	const [showTitle, setShowTitle] = React.useState(true);
	const [isHeader, setHeader] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	function handleClick() {
		setTitle((oV) => ({
			...oV,
			show: false,
		}));
		document.getElementById("logo").setAttribute("id", "begone");
		const x = document.getElementById("begone");
		const y = document.getElementById("mainbody");
		x.addEventListener("animationend", () => {
			setShowTitle(false);
			y.setAttribute("id", "final");
		});
	}

	return (
		<div className="container">
			{loading ? (
				<div id="load">
					<Load />
				</div>
			) : showTitle ? (
				<div id="title--animation" onClick={handleClick}>
					{isTitle.img}
				</div>
			) : isHeader ? (
				<React.Fragment>
					<Header />
					<Slot />
				</React.Fragment>
			) : (
				<React.Fragment>
					<Header />
					<Slot />
				</React.Fragment>
			)}
		</div>
	);
}

export default MainIndex;
