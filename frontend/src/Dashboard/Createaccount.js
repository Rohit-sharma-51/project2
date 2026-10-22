
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateAccount() {

  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    preferredLanguage: "english",
    phoneNumber: "",
    email: "",
    password: "",
    country: "",
    state: "",
    city: "",
    address: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 201) {
        alert("Account Created Successfully");
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
  console.log("FRONTEND ERROR:", error);
  alert(error.message);
}
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">

            <h3 className="text-center mb-2">Create Your Account</h3>
            <p className="text-center text-muted mb-4">
              Join KrishiConnect as a farmer or buyer
            </p>

            <form onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Role */}
              <div className="mb-3">
                <label className="form-label">I am a *</label>
                <select name="role" onChange={handleChange} className="form-select">
                  <option value="">Select</option>
                  <option value="buyer">Buyer</option>
                  <option value="farmer">Farmer</option>
                </select>
              </div>

              {/* Language */}
              <div className="mb-3">
                <label className="form-label">Preferred Language</label>
                <select name="preferredLanguage" onChange={handleChange} className="form-select">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone Number *</label>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email Address *</label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  placeholder="prashant@gmail.com"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password *</label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  placeholder="••••"
                />
              </div>

              {/* Country */}
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  name="country"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter your country"
                />
              </div>

              {/* State */}
              <div className="mb-3">
                <label className="form-label">State</label>
                <select name="state" onChange={handleChange} className="form-select">
                  <option value="">Select your state</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>

              {/* City */}
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  name="city"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter your city"
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  onChange={handleChange}
                  className="form-control"
                  rows="2"
                  placeholder="Enter your address"
                ></textarea>
              </div>

              {/* Button */}
              <button type="submit" className="btn btn-success w-100">
                Create Account
              </button>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Sign In</a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}