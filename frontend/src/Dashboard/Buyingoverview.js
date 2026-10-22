import React from "react";
import "./BuyingOverview.css";

import { FaWallet, FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

function BuyingOverview() {
  return (
    <div className="container mt-4">

      {/* Banner */}
      <div className="banner mb-4">
        <h2>Welcome back, Buyer</h2>
        <p>Discover fresh produce, track your orders, and get the best deals</p>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon blue"><FaWallet /></div>
            <div>
              <p>Total Spent</p>
              <h5>₹0</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon green"><FaShoppingCart /></div>
            <div>
              <p>Orders Placed</p>
              <h5>0</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <div className="icon purple"><FaHeart /></div>
            <div>
              <p>Favorite Products</p>
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
            <h4>⭐ Best Deals</h4>
          </div>
        </div>

        <div className="col-md-6">
          <div className="box">
            <h4>❤️ Wishlist</h4>

            <div className="item">
              <div>
                <h6>Organic Rice</h6>
                <p>₹2500 • Rajesh Kumar</p>
              </div>
              <button className="btn btn-success btn-sm">Buy Now</button>
            </div>

            <div className="item">
              <div>
                <h6>Fresh Tomatoes</h6>
                <p>₹800 • Priya Singh</p>
              </div>
              <button className="btn btn-success btn-sm">Buy Now</button>
            </div>

          </div>
        </div>

      </div>

      {/* Price Trends + Recent Orders */}
      <div className="row g-3">

        {/* LEFT */}
        <div className="col-md-6">
          <div className="extra-card">
            <h4 className="mb-3">Price Trends</h4>

            <div className="chart-box"></div>

            <p className="chart-label">⚬ avgPrice</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          <div className="extra-card">
            <h4>Recent Orders</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default BuyingOverview;