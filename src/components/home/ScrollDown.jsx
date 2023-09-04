import React from "react";

const ScrollDown = () => {
	return (
		<div className="home__scroll">
			<a
				href="#about"
				className="home__scroll-button button--flex"
			>
				<svg
					width="38px"
					height="38px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 15C5 16.8565 5.73748 18.6371 7.05023 19.9498C8.36299 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9497 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9497 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36299 2.73754 7.05023 4.05029C5.73748 5.36305 5 7.14348 5 9V15Z"
						stroke="#000000"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						style={{
							stroke: "var(--title-color)",
							fill: "none",
						}}
					/>
					<path
						className="wheel"
						d="M12 6V10"
						stroke="#000000"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						style={{
							stroke: "var(--title-color)",
							fill: "none",
						}}
					/>
				</svg>
				<span className="home__scroll-name">Scroll Down</span>
				<i className="uil uil-arrow-down home__scroll-arrow"></i>
			</a>
		</div>
	);
};

export default ScrollDown;
