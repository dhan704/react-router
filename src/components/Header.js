import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LogedInOutlet from "./LogedInOutlet";
import { clearUserInfo } from "../utils/common";
function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="usage">
            <span>Usage</span>
          </NavLink>
          <NavLink to="users">
            <span>Users</span>
          </NavLink>
          <NavLink to="settings">
            <span>Settings</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="login" onClick={() => clearUserInfo()}>
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
      <div>
        <LogedInOutlet />
      </div>
    </div>
  );
}

export default Header;
