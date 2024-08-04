import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock } from "react-icons/fa"; // Icons for aesthetics

export default function RegistrationComp() {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your registration logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-light p-4 mt-5 rounded shadow-lg border" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center text-primary mb-3">Registration Form</h1>
        <p className="text-center text-muted mb-4">
          Fill out the form to create an account.
        </p>

        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-3">
            <label htmlFor="fname" className="form-label fw-bold">
              First Name <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control border-0"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="lname" className="form-label fw-bold">
              Last Name <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control border-0"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="emailid" className="form-label fw-bold">
              Email Id <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control border-0"
                name="emailid"
                value={formData.emailid}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label fw-bold">
              Contact Number <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaPhone />
              </span>
              <input
                type="tel"
                className="form-control border-0"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                pattern="[0-9]{10}"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label fw-bold">
              Select City <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaMapMarkerAlt />
              </span>
              <select
                className="form-select border-0"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              >
                <option value="">Select City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="area" className="form-label fw-bold">
              Select Area <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaMapMarkerAlt />
              </span>
              <select
                className="form-select border-0"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              >
                <option value="">Select Area</option>
                <option value="Deccan">Deccan</option>
                <option value="Hadapsar">Hadapsar</option>
                <option value="Hinjewadi">Hinjewadi</option>
                <option value="Wakad">Wakad</option>
                <option value="Baner">Baner</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">
              User Name <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control border-0"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label fw-bold">
              Password <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control border-0"
                name="pwd"
                value={formData.pwd}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label fw-bold">
              Role <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0">
                <FaUser />
              </span>
              <select
                className="form-select border-0"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Artist">Artist</option>
                <option value="Buyer">Buyer</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>
            <textarea
              className="form-control border-primary"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your description"
              style={{ borderRadius: '0.25rem' }}
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary py-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
