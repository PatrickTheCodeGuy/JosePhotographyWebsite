import React, { Component } from "react";

import NavBar from "../components/NavBar/NavBarContainer";
import PageHeader from "../components/Page Header/PageHeaderContainer";
import "../App.css";

class Photos extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<NavBar />
			</div>
		);
	}
}

export default Photos;
