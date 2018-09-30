import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import divider from "./Evil_divider_2.png";
import instagram from "./iconmonstr-instagram-11.svg";

function NavBarContainer() {
	return (
		<div className="navbarContainer">
			<NavLink activeClassName="selected" className="nav-links" exact to="/">
				Home
			</NavLink>
			<NavLink activeClassName="selected" className="nav-links" to="/photos">
				Photos
			</NavLink>
			<NavLink activeClassName="selected" className="nav-links" to="/aboutme">
				About Me
			</NavLink>
			<NavLink activeClassName="selected" className="nav-links" to="/contact">
				Contact
			</NavLink>
			<a
				className="nav-links instagram"
				href="https://www.instagram.com/alostnightphotography/"
			>
				<img src={instagram} />
			</a>
		</div>
	);
}

export default NavBarContainer;
