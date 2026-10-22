import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_Page/Home/HomePage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from './Landing_Page/Marketplace/Marketplace.js';
import Aboutpage from './Landing_Page/AboutUs/Aboutpage.js';
import Contact from './Landing_Page/ContactUs/Contact.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navigate } from "react-router-dom";


// Dashboard imports
import BuyingOverview from './Dashboard/Buyingoverview.js';
import Browseproduct from './Dashboard/Browseproduct.js';
import Purchaseanalytics from './Dashboard/Purchaseanalytics.js';
import Notifications from './Dashboard/Notifications.js';
import Wishlist from './Dashboard/Wishlist.js';
import AIInsight from './Dashboard/AIInsight.js';
import DashboardLayout from './Dashboard/DashboardLayout.js'; // ✅ NEW
import CreateAccount from './Dashboard/Createaccount.js';
import Login from './Dashboard/Login.js';
import Dashboardfarmer from "./Dashboard/Dashboardfarmer";

import Farmoverview from './Dashboard/Farmoverview.js';
import Myproduct from './Dashboard/Myproduct.js';
import Notificationfarmer from './Dashboard/Notificationfarmer.js';
// import FarmerLayout from './Dashboard/Farmerlayout.js';
// import MyProducts from "./Dashboard/MyProducts";
// import MyProducts from './Dashboard/Myproduct1.js';

import Addproduct from './Dashboard/Addproduct.js';
import MyProducts1 from './Dashboard/Myproduct1.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      {/* Main pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/marketPlace" element={<Marketplace />} />
      <Route path="/aboutUs" element={<Aboutpage />} />
      <Route path="/contactUs" element={<Contact />} />

      {/* ✅ Dashboard with Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
       <Route index element={<BuyingOverview />} />
        <Route path="overview" element={<BuyingOverview />} />
        <Route path="browseproduct" element={<Browseproduct />} />
        <Route path="purchaseanalytics" element={<Purchaseanalytics />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="aiinsight" element={<AIInsight />} />
        
      </Route>

      <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />



        <Route path="/dashboard/farmer" element={<Dashboardfarmer />}>
         <Route index element={<Navigate to="farmoverview" />} />
          <Route path="farmoverview" element={<Farmoverview />} />
          <Route path="myproducts" element={<Myproduct />} />
          <Route path="notifications" element={<Notificationfarmer />} />
        </Route>
      
        <Route path="/addproduct" element={<Addproduct/>}/>
<Route path="/my-products" element={<MyProducts1 />} />

    </Routes>

    <Footer />
  </BrowserRouter>
);











