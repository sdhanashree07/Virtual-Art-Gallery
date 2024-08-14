// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import './App.css';
import RegistrationComp from './components/RegistrationComp'; // Import RegistrationComp
import HomePage from './components/HomePage'; // Import HomePage
import LoginComp from './components/LoginPage';
import axios from 'axios';
import ArtistPage from './components/ArtistPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/register" element={<RegistrationComp />} /> 
          <Route path="/login" element={<LoginComp/>}/>
          <Route path="/login/Artist" element={<ArtistPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
