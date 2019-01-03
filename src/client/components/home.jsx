/*
 * This is a demo component the Eletrode app generator included
 * to show using Milligram CSS lib and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - styles/*.css
 *
 */

import React from "react";
// import { connect } from "react-redux";
import "../styles/raleway.css";
import { Link } from "react-router-dom";
import custom from "../styles/custom.css"; // eslint-disable-line no-unused-vars
import electrodePng from "../images/electrode.png";
import Notifications from "react-notify-toast";


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Notifications />
        <h1>Hello World</h1>
        <h2>
          <a href="https://github.com/electrode-io">
            {"Electrode"}
            <img src={electrodePng} />
          </a>
        </h2>
        <p>
          Electrode is a platform for building large scale Universal React web applications with a
          standardized structure that follows best practices and has modern technologies built in.
          Electrode focuses on performance, component reusability, and simple deployment to multiple
          cloud providers—so you can focus on what makes your app unique.
        </p>
        <Link to={"/pageWithProps"}>Page with props</Link>
      </div>
    );
  }
}

Home.propTypes = {};

// const mapStateToProps = () => {
//   return {};
// };

// export default connect(
//   mapStateToProps,
//   dispatch => ({ dispatch })
// )(Home);
