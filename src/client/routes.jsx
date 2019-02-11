import React from "react";
import PropTypes from "prop-types";
import Home from "./components/home";
import ShipmentForm from "./components/shipment-form";
import Demo2 from "./components/demo2";
import VendorList from "./components/vendors"
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
        path: "/shipment-form",
        exact: true,
        component: ShipmentForm
      },
      {
        path: "/vendors",
        exact: true,
        component: Demo2
      },
      {
        path: "/demo2",
        exact: true,
        component: Demo2
      }
    ]
  }
];

export { routes };
