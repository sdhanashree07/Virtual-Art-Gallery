// App.js

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import RegistrationComp from './components/RegistrationComp';
import HomePage from './components/HomePage';
import LoginComp from './components/LoginPage';
import AdminPage from './components/AdminPage';
import ArtistPage from './components/ArtistPage';
import BuyerPage from './components/BuyerPage';
import LogoutComp from './components/LogoutComp';
import RegistrationBuyerComp from './components/RegistrationBuyer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons

function App() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div className="App">
      <div style={{ display: mystate.loggedIn ? 'none' : 'block' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-primary fw-bold">
              Our Website
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-secondary me-2 mb-2 mb-lg-0">
                    <FaSignInAlt className="me-1" />
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register_artist" className="btn btn-primary me-2 mb-2 mb-lg-0">
                    <FaUserPlus className="me-1" />
                    Register Artist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register_buyer" className="btn btn-primary mb-2 mb-lg-0">
                    <FaUserPlus className="me-1" />
                    Register Buyer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register_artist" element={<RegistrationComp />} />
        <Route path="/register_buyer" element={<RegistrationBuyerComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/admin_home" element={<AdminPage />} />
        <Route path="/artist_home" element={<ArtistPage />} />
        <Route path="/buyer_home" element={<BuyerPage />} />
        <Route path="/logout" element={<LogoutComp />} />
      </Routes>

      {/* Inline CSS for responsive styling */}
      <style jsx="true">{`
        .navbar-nav .btn {
          margin: 0 5px;
          transition: background-color 0.3s ease;
          display: inline-block;
        }

        .navbar-nav .btn:hover {
          background-color: #0056b3; /* Darken on hover */
        }

        .navbar-toggler {
          border: none; /* Remove border from toggler button */
        }

        /* Custom styles for the page */
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .container-fluid {
          padding: 15px;
        }

        @media (max-width: 767.98px) {
          .navbar-nav .btn {
            display: block;
            width: 100%;
            margin: 5px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
