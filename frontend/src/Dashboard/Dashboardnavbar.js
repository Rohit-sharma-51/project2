import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboardnavbar() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="row dashboard-nav text-center">

        <div className="col">
          <NavLink
            to="/dashboard/overview"
            className={
              location.pathname === "/dashboard" || location.pathname === "/dashboard/overview"
                ? "nav-item active-link"
                : "nav-item"
            }
          >
            Buying Overview
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="/dashboard/browseproduct" className="nav-item">
            Browse Products
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="/dashboard/purchaseanalytics" className="nav-item">
            Purchase Analytics
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="/dashboard/notifications" className="nav-item">
            Notifications
          </NavLink>
        </div>

        <div className="col">
          <NavLink to="/dashboard/wishlist" className="nav-item">
            Wishlist
          </NavLink>
        </div>

        {/* <div className="col"> */}
          {/* <NavLink to="/dashboard/aiinsight" className="nav-item"> */}
            {/* AI Insights */}
          {/* </NavLink> */}
        {/* </div> */}

      </div>
    </div>
  );
}

export default Dashboardnavbar;