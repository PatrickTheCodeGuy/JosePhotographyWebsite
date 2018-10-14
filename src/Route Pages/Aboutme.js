import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBarContainer";
import PageHeader from "../components/Page Header/PageHeaderContainer";
import profilePhoto from "../media/Jose Photo.jpg";
import Footer from "../components/Footer/Footer";

function AboutMe() {
	return (
		<div className="App">
			<PageHeader />
			<NavBar />
			<div className="AboutmeContainer">
				<div className="image-container">
					<img className="img" src={profilePhoto} />
				</div>
				<div className="aboutme-description">
					<p className="paragraph">
						Hello there! My name is Jose Paquian, and welcome to my page! I have
						been taking photos for over 10+ years. The type of photos I have
						experience in taking are:{" "}
					</p>
					<ul className="list">
						<li>Cars</li>
						<li>Nature</li>
						<li>Band Events</li>
					</ul>
					<p className="paragraph">
						If you are interested in contacting me for work, head on over to my
						contact page.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AboutMe;
