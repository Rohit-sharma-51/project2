import React from "react";
import "./BuyingOverview.css";

import { FaWallet, FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

function Farmoverview() {
  return (
    <div className="container mt-4">

        <div className="rounded-2 mb-4 p-4" style={{ backgroundColor: "#22c55e", height: "120px" }}>
         <h2 className="text-white">Welcome back, Farmer</h2>
        <p className="text-white mt-2">Manage your farm, track your products, and grow your business</p>
</div>

      {/* Stats */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon blue"><FaWallet /></div>
            <div>
              <p>Total Earnings</p>
              <h5>₹0</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon green"><FaShoppingCart /></div>
            <div>
              <p>Orders Received</p>
              <h5>0</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon purple"><i class="fa-brands fa-product-hunt"></i></div>
            <div>
              <p>Active Products</p>
              <h5>2</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon orange"><MdShowChart /></div>
            <div>
              <p>Average Order Value</p>
              <h5>₹0</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Best Deals + Wishlist */}
      <div className="row g-3 mb-4">

        <div className="col-md-6">
          <div className="box">
            <h4>Weather Forecast</h4>
            <br/>
            <p>Temperature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25°C</p>
            <p>Humidity    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;65%</p>
            <p>Wind Speed  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5km/h</p>
            <p>Condition  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Partly cloudy</p>

          </div>
        </div>

        <div className="col-md-6">
          <div className="box">
            <h4>Crop Recommendations</h4>

            <div className="item">
              <div>
                <h6>Tomatoes</h6>
                <p>Summer • High demand in local markets</p>
              </div>
              <button className="btn btn-success btn-sm">High profit</button>
            </div>

            <div className="item">
              <div>
                <h6>Cucumber</h6>
                <p>Summer • Good for summer cultivation</p>
              </div>
              <button className="btn btn-success btn-sm">Medium Profit</button>
            </div>

          </div>
        </div>

      </div>

      {/* Price Trends + Recent Orders */}
      <div className="row g-3">

        <div className="col-md-6">
          <div className="extra-card" style={{height:"300px"}}>
            <h4>Recent Orders</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Farmoverview;