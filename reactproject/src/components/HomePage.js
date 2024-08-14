// components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import both icons

export default function HomePage() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-primary fw-bold">
            Our Website
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav">
              <Link to="/login" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1 className="text-primary mb-4">Welcome to Our Website!</h1>
        <p className="text-muted mb-4">
          Explore our features and register or login to get started.
        </p>
      </div>
    </div>
  );
}
