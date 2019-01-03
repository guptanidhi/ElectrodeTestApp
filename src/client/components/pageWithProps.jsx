
import React from "react";
// import { connect } from "react-redux";
import "../styles/raleway.css";
import { Link } from "react-router-dom";
import custom from "../styles/custom.css"; // eslint-disable-line no-unused-vars
import Notifications from "react-notify-toast";


export default class PageWithProps extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div styleName={"custom.container"}>
				<Notifications />
				<h1 styleName={"custom.mainHeading"}>Page With Props</h1>
				<section styleName={"custom.header"}>
					<h2>
						<a href="https://github.com/electrode-io">
							{"Prop means Properties"}
						</a>
					</h2>
				</section>
				<p>
					React controls the data flow in the components with state and props.
					The data in states and props are used to render the Component with dynamic data.
					By Anjaneyulu. in javascript , reactjs , state and props. ReactJS is component based.
        </p>
				<Link to={"/"}>Back</Link>
			</div>
		);
	}
}

PageWithProps.propTypes = {};
