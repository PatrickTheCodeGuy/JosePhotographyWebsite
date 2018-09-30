import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route Pages/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Photos from "./Route Pages/Photos";
import Aboutme from "./Route Pages/Aboutme";

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/photos" component={Photos} />
			<Route path="/aboutme" component={Aboutme} />
		</div>
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
