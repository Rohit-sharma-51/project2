import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboardfarmer() {
  return (
    <div className="container">

      {/* TOP NAV */}
      <div className="row dashboard-nav text-center">

        <div className="col">
          <NavLink to="farmoverview" className="nav-item">
            Farm Overview
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="myproducts" className="nav-item">
            My products
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="notifications" className="nav-item">
            Notifications
          </NavLink>
        </div>

      </div>

      <Outlet />

    </div>
  );
}

export default Dashboardfarmer;