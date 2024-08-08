// App.js

import React from 'react';
import {  Router, Route, Routes } from 'react-router-dom'; // Updated import
import './App.css';
import RegistrationComp from './components/RegistrationComp'; // Import RegistrationComp
import HomePage from './components/HomePage'; // Import HomePage
import LoginComp from './components/LoginPage';
import DummyLogin from './components/DummyLogin';
import DummyRegistrationComp from './components/dummyRegistration';
import AdminPage from './components/AdminPage';
import ArtistPage from './components/ArtistPage';
import BuyerPage from './components/BuyerPage';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoutComp from './components/LogoutComp';
import RegistrationBuyerComp from './components/RegistrationBuyer';

function App() {
 const mystate = useSelector((state) => state.logged);
  return (
    <div className="App">
      <div style={{display: mystate.loggedIn?"none":"block"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3" >
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
              <Link to="/register_artist" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Register Artist
              </Link>
              <Link to="/register_buyer" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Register Buyer
              </Link>
            </div>
          </div>
        </div>
      </nav>
     </div>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} /> {/* Updated Route syntax */}
          <Route path="/register_artist" element={<RegistrationComp/>} />
          <Route path="/register_buyer" element={<RegistrationBuyerComp/>} /> {/* Updated Route syntax */}
          <Route path="/login" element={  <LoginComp/>}/> 
          <Route path ="/admin_home" element={<AdminPage/>}/>
          <Route path ="/artist_home" element={<ArtistPage/>}/>
          <Route path ="/buyer_home" element={<BuyerPage/>}/>
          <Route path ="/logout" element={<LogoutComp/>}/>
        </Routes>
 
    </div>
  );

  
  
}

export default App;
