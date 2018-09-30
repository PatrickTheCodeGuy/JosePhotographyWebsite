import React, { Component } from "react";

import divider from "./Evil_divider_2.png";

function Divider() {
	return (
		<div className="divider-container">
			<img className="divider" src={divider} />
		</div>
	);
}

export default Divider;
