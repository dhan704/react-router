import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogedIn } from "../utils/common";

function LogedInOutlet() {
  if (isLogedIn()) return <Outlet />;
  else return <Navigate to="/login"></Navigate>;
}

export default LogedInOutlet;
