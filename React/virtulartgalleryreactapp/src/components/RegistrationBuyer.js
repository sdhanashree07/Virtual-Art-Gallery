import React, { useState, useReducer, startTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCogs } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

// Initial state for the form
const initialState = {
  FirstName: "",
  LastName: "",
  EmailId: "",
  Contact: "",
  cityId: "",
  areaId: "",
  UserName: "",
  Password: "",
  roleId: "",
  address: "",
  fnameError: "",
  lnameError: "",
  emailidError: "",
  contactError: "",
  cityError: "",
  areaError: "",
  usernameError: "",
  pwdError: "",
  roleError: "",
  addressError: "",
 
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'setError':
      return { ...state, [`${action.fld}Error`]: action.val };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// Validation functions
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? "" : "Invalid email format.";
};

const validateContactNumber = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number) ? "" : "Contact Number must be 10 digits and contain only numbers.";
};

const validateUsername = (username) => {
  return !/\s/.test(username) ? "" : "Username must not contain spaces.";
};

const validatePassword = (password) => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-z0-9!@#$%^&*]{6,}$/;
  return regex.test(password) ? "" : "Password must contain at least one digit, one letter, and be at least 6 characters long.";
};

const validateCity = (city) => {
  return city ? "" : "City selection is required.";
};

const validateArea = (area) => {
  return area ? "" : "Area selection is required.";
};

const validateRole = (role) => {
  return role ? "" : "Role selection is required.";
};

// Main registration component
export default function RegistrationBuyerComp() {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [msg, setmsg] = useState("");

  const navigate =useNavigate();

  // Function to validate the form
  const validateForm = () => {
    const errors = {
      fnameError: user.FirstName ? "" : "First Name is required.",
      lnameError: user.LastName ? "" : "Last Name is required.",
      emailidError: user.EmailId ? validateEmail(user.EmailId) : "Email Id is required.",
      contactError: user.Contact ? validateContactNumber(user.Contact) : "Contact Number is required.",
      cityError: validateCity(user.cityId),
      areaError: validateArea(user.areaId),
      usernameError: user.UserName ? validateUsername(user.UserName) : "Username is required.",
      pwdError: user.Password ? validatePassword(user.Password) : "Password is required.",
      roleError: validateRole(user.roleId),
      addressError: user.address ? "" : "Address is required.",
     
    };

    Object.keys(errors).forEach(key => {
      dispatch({ type: 'setError', fld: key, val: errors[key] });
    });

    return Object.values(errors).every(error => error === "");
  };

  // Function to handle form submission
  const submitHandle = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const sendData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: user.FirstName,
          lastName: user.LastName,
          emailId: user.EmailId,
          contact: user.Contact,
          areaId: user.areaId,
          username: user.UserName,
          password: user.Password,
          roleId: user.roleId,
          address: user.address,
         
        })
      };

      fetch("https://localhost:44375/api/UserManagement/Savebuyer", sendData)
        .then(resp => resp.json())
        .then(obj => setmsg(navigate("/login")))
        .catch(error => setmsg(error.message));
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-light p-4 mt-5 rounded shadow-lg border" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center text-primary mb-3">Registration Form</h1>
        <form onSubmit={submitHandle} className="p-3">
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.fnameError ? "is-invalid" : ""}`}
                name="fname"
                value={user.FirstName}
                onChange={(e) => dispatch({ type: 'update', fld: 'FirstName', val: e.target.value })}
                placeholder="Enter your first name"
                required
              />
              {user.fnameError && <div className="invalid-feedback">{user.fnameError}</div>}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.lnameError ? "is-invalid" : ""}`}
                name="lname"
                value={user.LastName}
                onChange={(e) => dispatch({ type: 'update', fld: 'LastName', val: e.target.value })}
                placeholder="Enter your last name"
                required
              />
              {user.lnameError && <div className="invalid-feedback">{user.lnameError}</div>}
            </div>
          </div>

          {/* Email Id */}
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">Email Id <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaEnvelope /></span>
              <input
                type="email"
                className={`form-control ${user.emailidError ? "is-invalid" : ""}`}
                name="emailid"
                value={user.EmailId}
                onChange={(e) => dispatch({ type: 'update', fld: 'EmailId', val: e.target.value })}
                placeholder="Enter your email"
                required
              />
              {user.emailidError && <div className="invalid-feedback">{user.emailidError}</div>}
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact Number <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaPhone /></span>
              <input
                type="tel"
                className={`form-control ${user.contactError ? "is-invalid" : ""}`}
                name="contact"
                value={user.Contact}
                onChange={(e) => dispatch({ type: 'update', fld: 'Contact', val: e.target.value })}
                placeholder="Enter your contact number"
                required
              />
              {user.contactError && <div className="invalid-feedback">{user.contactError}</div>}
            </div>
          </div>

          {/* City */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label">Select City <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${user.cityError ? "is-invalid" : ""}`}
                name="city"
                value={user.cityId}
                onChange={(e) => dispatch({ type: 'update', fld: 'cityId', val: e.target.value })}
                required
              >
                <option value="">Select City</option>
                <option value="1">Agra</option>
                <option value="2">Mumbai</option>
                <option value="3">Delhi</option>
                <option value="4">Bangalore</option>
                <option value="5">Chennai</option>
              </select>
              {user.cityError && <div className="invalid-feedback">{user.cityError}</div>}
            </div>
          </div>

          {/* Area */}
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Select Area <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${user.areaError ? "is-invalid" : ""}`}
                name="area"
                value={user.areaId}
                onChange={(e) => dispatch({ type: 'update', fld: 'areaId', val: e.target.value })}
                required
              >
                <option value="">Select Area</option>
                
                <option value="1">Civil Lines</option>
                <option value="2">Khandari</option>
                <option value="3">Ellisbridge</option>
                <option value="4">Vastrapur</option>
              </select>
              {user.areaError && <div className="invalid-feedback">{user.areaError}</div>}
            </div>
          </div>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.usernameError ? "is-invalid" : ""}`}
                name="username"
                value={user.UserName}
                onChange={(e) => dispatch({ type: 'update', fld: 'UserName', val: e.target.value })}
                placeholder="Enter your username"
                required
              />
              {user.usernameError && <div className="invalid-feedback">{user.usernameError}</div>}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaLock /></span>
              <input
                type="password"
                className={`form-control ${user.pwdError ? "is-invalid" : ""}`}
                name="pwd"
                value={user.Password}
                onChange={(e) => dispatch({ type: 'update', fld: 'Password', val: e.target.value })}
                placeholder="Enter your password"
                required
              />
              {user.pwdError && <div className="invalid-feedback">{user.pwdError}</div>}
            </div>
          </div>

          {/* Role */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Role <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaCogs /></span>
              <select
                className={`form-select ${user.roleError ? "is-invalid" : ""}`}
                name="role"
                value={user.roleId}
                onChange={(e) => dispatch({ type: 'update', fld: 'roleId', val: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                
                <option value="3">Buyer</option>
              </select>
              {user.roleError && <div className="invalid-feedback">{user.roleError}</div>}
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <div className="input-group">
              <textarea
                className={`form-control ${user.addressError ? "is-invalid" : ""}`}
                name="address"
                value={user.address}
                onChange={(e) => dispatch({ type: 'update', fld: 'address', val: e.target.value })}
                placeholder="Enter a brief address"
                rows="3"
              />
              {user.addressError && <div className="invalid-feedback">{user.addressError}</div>}
            </div>
          </div>


          <button type="submit" className="btn btn-primary w-100">REGISTER</button>
        </form>
        <span>{msg}</span>
        <span>{JSON.stringify(user)}</span>
      </div>
    </div>
  );
}
