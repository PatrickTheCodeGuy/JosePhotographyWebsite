import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBarContainer";
import PageHeader from "../components/Page Header/PageHeaderContainer";

function AboutMe() {
	return (
		<div className="App">
			<PageHeader />
			<NavBar />
			<h1>Hi there!</h1>
		</div>
	);
}

export default AboutMe;
