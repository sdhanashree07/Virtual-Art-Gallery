import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCogs } from 'react-icons/fa';

const initialState = {
  fname: "",
  lname: "",
  emailid: "",
  contact: "",
  city: "",
  area: "",
  username: "",
  pwd: "",
  role: "",
  description: "",
  fnameError: "",
  lnameError: "",
  emailidError: "",
  contactError: "",
  cityError: "",
  areaError: "",
  usernameError: "",
  pwdError: "",
  roleError: "",
  descriptionError: ""
};

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

export default function RegistrationComp() {
  const [info, dispatch] = useReducer(reducer, initialState);

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
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
    return regex.test(password) ? "" : "Password must contain at least one digit and one letter.";
  };

  // Additional Validation Functions
  const validateCity = (city) => {
    return city ? "" : "City selection is required.";
  };

  const validateArea = (area) => {
    return area ? "" : "Area selection is required.";
  };

  const validateRole = (role) => {
    return role ? "" : "Role selection is required.";
  };

  const validateForm = () => {
    const errors = {};
    errors.fname = info.fname ? "" : "First Name is required.";
    errors.lname = info.lname ? "" : "Last Name is required.";
    errors.emailid = info.emailid ? validateEmail(info.emailid) : "Email Id is required.";
    errors.contact = info.contact ? validateContactNumber(info.contact) : "Contact Number is required.";
    errors.city = validateCity(info.city);
    errors.area = validateArea(info.area);
    errors.username = info.username ? validateUsername(info.username) : "Username is required.";
    errors.pwd = info.pwd ? validatePassword(info.pwd) : "Password is required.";
    errors.role = validateRole(info.role);
    errors.description = info.description ? "" : "Description is required.";

    Object.keys(errors).forEach(key => {
      dispatch({ type: 'setError', fld: key, val: errors[key] });
    });

    return Object.values(errors).every(error => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Registration Info:", info);
      // Add registration logic here
      dispatch({ type: 'reset' });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-light p-4 mt-5 rounded shadow-lg border" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center text-primary mb-3">Registration Form</h1>
        <form onSubmit={handleSubmit} className="p-3">
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${info.fnameError ? "is-invalid" : ""}`}
                name="fname"
                value={info.fname}
                onChange={(e) => dispatch({ type: 'update', fld: 'fname', val: e.target.value })}
                placeholder="Enter your first name"
                required
              />
              {info.fnameError && <div className="invalid-feedback">{info.fnameError}</div>}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${info.lnameError ? "is-invalid" : ""}`}
                name="lname"
                value={info.lname}
                onChange={(e) => dispatch({ type: 'update', fld: 'lname', val: e.target.value })}
                placeholder="Enter your last name"
                required
              />
              {info.lnameError && <div className="invalid-feedback">{info.lnameError}</div>}
            </div>
          </div>

          {/* Email Id */}
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">Email Id <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaEnvelope /></span>
              <input
                type="email"
                className={`form-control ${info.emailidError ? "is-invalid" : ""}`}
                name="emailid"
                value={info.emailid}
                onChange={(e) => dispatch({ type: 'update', fld: 'emailid', val: e.target.value })}
                placeholder="Enter your email"
                required
              />
              {info.emailidError && <div className="invalid-feedback">{info.emailidError}</div>}
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact Number <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaPhone /></span>
              <input
                type="tel"
                className={`form-control ${info.contactError ? "is-invalid" : ""}`}
                name="contact"
                value={info.contact}
                onChange={(e) => dispatch({ type: 'update', fld: 'contact', val: e.target.value })}
                placeholder="Enter your contact number"
                required
              />
              {info.contactError && <div className="invalid-feedback">{info.contactError}</div>}
            </div>
          </div>

          {/* City */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label">Select City <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${info.cityError ? "is-invalid" : ""}`}
                name="city"
                value={info.city}
                onChange={(e) => dispatch({ type: 'update', fld: 'city', val: e.target.value })}
                required
              >
                <option value="">Select City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
              {info.cityError && <div className="invalid-feedback">{info.cityError}</div>}
            </div>
          </div>

          {/* Area */}
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Select Area <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${info.areaError ? "is-invalid" : ""}`}
                name="area"
                value={info.area}
                onChange={(e) => dispatch({ type: 'update', fld: 'area', val: e.target.value })}
                required
              >
                <option value="">Select Area</option>
                <option value="Area1">Area1</option>
                <option value="Area2">Area2</option>
                <option value="Area3">Area3</option>
                <option value="Area4">Area4</option>
              </select>
              {info.areaError && <div className="invalid-feedback">{info.areaError}</div>}
            </div>
          </div>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${info.usernameError ? "is-invalid" : ""}`}
                name="username"
                value={info.username}
                onChange={(e) => dispatch({ type: 'update', fld: 'username', val: e.target.value })}
                placeholder="Enter your username"
                required
              />
              {info.usernameError && <div className="invalid-feedback">{info.usernameError}</div>}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaLock /></span>
              <input
                type="password"
                className={`form-control ${info.pwdError ? "is-invalid" : ""}`}
                name="pwd"
                value={info.pwd}
                onChange={(e) => dispatch({ type: 'update', fld: 'pwd', val: e.target.value })}
                placeholder="Enter your password"
                required
              />
              {info.pwdError && <div className="invalid-feedback">{info.pwdError}</div>}
            </div>
          </div>

          {/* Role */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Role <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaCogs /></span>
              <select
                className={`form-select ${info.roleError ? "is-invalid" : ""}`}
                name="role"
                value={info.role}
                onChange={(e) => dispatch({ type: 'update', fld: 'role', val: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Artist">Artist</option>
                <option value="Buyer">Buyer</option>
              </select>
              {info.roleError && <div className="invalid-feedback">{info.roleError}</div>}
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <div className="input-group">
              <textarea
                className={`form-control ${info.descriptionError ? "is-invalid" : ""}`}
                name="description"
                value={info.description}
                onChange={(e) => dispatch({ type: 'update', fld: 'description', val: e.target.value })}
                placeholder="Enter a brief description"
                rows="3"
              />
              {info.descriptionError && <div className="invalid-feedback">{info.descriptionError}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">REGISTER</button>
        </form>
      </div>
    </div>
  );
}
