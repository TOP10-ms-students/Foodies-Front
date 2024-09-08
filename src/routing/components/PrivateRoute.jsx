import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getIsAuthenticated } from "../../store/selectors";
import { ROUTE_PATHS } from "../constants";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return isAuthenticated ? children : <Navigate to={ROUTE_PATHS.HOME} />;
};
