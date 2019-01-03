import React from "react";
import PropTypes from "prop-types";
import Home from "./components/home";
import PagewithProps from "./components/pageWithProps";
// import Demo1 from "./components/demo1";
// import Demo2 from "./components/demo2";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Root = ({ route, children }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
      {children}
    </div>
  );
};

Root.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object
};

const routes = [
  {
    path: "/",
    component: withRouter(Root),
    init: "./init-top",
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/pageWithProps",
        exact: true,
        component: PagewithProps
      }
    ]
  }
];

export { routes };
