import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-2">Welcome Back</h3>
            <p className="text-center text-muted mb-4">
              Sign in to your KrishiConnect account
            </p>

            <form>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="prashant@gmail.com"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••"
                />
              </div>

              {/* Button */}
              <button type="submit" className="btn btn-success w-100">
                Sign In
              </button>

              {/* Signup */}
              <p className="text-center mt-3">
                Don't have an account? <a href="/create-account">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
