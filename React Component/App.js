// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import './App.css';
import RegistrationComp from './components/RegistrationComp'; // Import RegistrationComp
import HomePage from './components/HomePage'; // Import HomePage
import LoginComp from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} /> {/* Updated Route syntax */}
          <Route path="/register" element={<RegistrationComp />} /> {/* Updated Route syntax */}
          <Route path="/login" element={<LoginComp/>}/> {  }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
