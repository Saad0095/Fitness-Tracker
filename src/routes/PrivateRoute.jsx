import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? children : <Navigate to="/register" />;
}

export default PrivateRoute;
