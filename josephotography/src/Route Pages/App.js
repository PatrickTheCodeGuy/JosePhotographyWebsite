import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBarContainer";
import PageHeader from "../components/Page Header/PageHeaderContainer";
import "../App.css";
import ImageCarousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Divider from "../components/NavBar/Divider";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<NavBar />
				<Divider />
				<ImageCarousel />
				<Footer />
			</div>
		);
	}
}

export default App;
