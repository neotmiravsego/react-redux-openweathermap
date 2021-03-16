import { useState, useEffect } from "react";

export const FilterIcon = (props) => {
	const [activeState, setActiveState] = useState("disable");
	useEffect(() => {
		if (props.active) {
			setActiveState("active");
		} else {
			setActiveState("disable");
		}
	});
	return (
		<svg
			className={activeState}
			width="7"
			height="5"
			viewBox="0 0 7 5"
			fill="inherit"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M7 5H0L3.5 0.9L7 5Z" fill="inherit" />
		</svg>
	);
};
