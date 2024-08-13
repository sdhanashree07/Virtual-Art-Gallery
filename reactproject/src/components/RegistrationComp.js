// components/RegistrationComp.js

import React, { useReducer } from "react";
import axios from "axios";

export default function RegistrationComp() {
  const init = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    areaId: "",
    username: "",
    password: "",
    confirmPassword: "",
    roleId: "1", // Default role ID for buyer
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      areaId: "",
      username: "",
      password: "",
      confirmPassword: "",
      server: "",
    },
    loading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "setErrors":
        return { ...state, errors: { ...state.errors, ...action.val } };
      case "setLoading":
        return { ...state, loading: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      return "Email cannot be empty.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

  const validateContact = (contact) => {
    const phoneRegex = /^\d{10}$/;
    if (contact.trim() === "") {
      return "Contact cannot be empty.";
    }
    if (!phoneRegex.test(contact)) {
      return "Contact must be a 10-digit number.";
    }
    return "";
  };

  const validateField = (field, value) => {
    if (value.trim() === "") {
      return `${field} cannot be empty.`;
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.trim() === "") {
      return "Password cannot be empty.";
    }
    if (!/[a-zA-Z]/.test(password)) {
      return "Password must contain at least one letter.";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number.";
    }
    return "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword !== password) {
      return "Passwords do not match.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstNameError = validateField("First Name", info.firstName);
    const lastNameError = validateField("Last Name", info.lastName);
    const emailError = validateEmail(info.email);
    const contactError = validateContact(info.contact);
    const areaIdError = validateField("Area", info.areaId);
    const usernameError = validateField("Username", info.username);
    const passwordError = validatePassword(info.password);
    const confirmPasswordError = validateConfirmPassword(
      info.password,
      info.confirmPassword
    );

    const newErrors = {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      contact: contactError,
      areaId: areaIdError,
      username: usernameError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      server: "",
    };

    dispatch({ type: "setErrors", val: newErrors });

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      dispatch({ type: "setLoading", val: true });
      try {
        const response = await axios.post(
          "http://localhost:5000/api/UserManagement/SaveUser", // Endpoint for saving user
          {
            FirstName: info.firstName,
            LastName: info.lastName,
            EmailId: info.email,
            Contact: info.contact,
            AreaId: parseInt(info.areaId),
            Username: info.username,
            Password: info.password,
            RoleId: parseInt(info.roleId),
          }
        );

        if (response.status === 200 && response.data) {
          console.log("Registration successful:", response.data);
          dispatch({ type: "reset" });
          alert("Registration successful!"); // Notify the user
        } else {
          dispatch({
            type: "setErrors",
            val: { server: "Registration failed. Please try again." },
          });
        }
      } catch (error) {
        console.error("Registration failed:", error);
        dispatch({
          type: "setErrors",
          val: {
            server:
              (error.response && error.response.data.message) ||
              "Network error. Please try again later.",
          },
        });
      } finally {
        dispatch({ type: "setLoading", val: false });
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="bg-light p-4 mt-5 rounded shadow-lg border"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="text-center text-primary mb-3">Registration Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className={`form-control ${
                  info.errors.firstName ? "is-invalid" : ""
                }`}
                name="firstName"
                value={info.firstName}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "firstName",
                    val: e.target.value,
                  });
                  dispatch({
                    type: "setErrors",
                    val: { firstName: validateField("First Name", e.target.value) },
                  });
                }}
                placeholder="Enter your first name"
                required
              />
              {info.errors.firstName && (
                <div className="invalid-feedback">{info.errors.firstName}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className={`form-control ${
                  info.errors.lastName ? "is-invalid" : ""
                }`}
                name="lastName"
                value={info.lastName}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "lastName",
                    val: e.target.value,
                  });
                  dispatch({
                    type: "setErrors",
                    val: { lastName: validateField("Last Name", e.target.value) },
                  });
                }}
                placeholder="Enter your last name"
                required
              />
              {info.errors.lastName && (
                <div className="invalid-feedback">{info.errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className={`form-control ${
                  info.errors.email ? "is-invalid" : ""
                }`}
                name="email"
                value={info.email}
                onChange={(e) => {
                  dispatch({ type: "update", fld: "email", val: e.target.value });
                  dispatch({
                    type: "setErrors",
                    val: { email: validateEmail(e.target.value) },
                  });
                }}
                placeholder="Enter your email"
                required
              />
              {info.errors.email && (
                <div className="invalid-feedback">{info.errors.email}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="contact" className="form-label">
                Contact:
              </label>
              <input
                type="text"
                className={`form-control ${
                  info.errors.contact ? "is-invalid" : ""
                }`}
                name="contact"
                value={info.contact}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "contact",
                    val: e.target.value,
                  });
                  dispatch({
                    type: "setErrors",
                    val: { contact: validateContact(e.target.value) },
                  });
                }}
                placeholder="Enter your contact number"
                required
              />
              {info.errors.contact && (
                <div className="invalid-feedback">{info.errors.contact}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="areaId" className="form-label">
              Area:
            </label>
            <input
              type="text"
              className={`form-control ${
                info.errors.areaId ? "is-invalid" : ""
              }`}
              name="areaId"
              value={info.areaId}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "areaId",
                  val: e.target.value,
                });
                dispatch({
                  type: "setErrors",
                  val: { areaId: validateField("Area", e.target.value) },
                });
              }}
              placeholder="Enter your area ID"
              required
            />
            {info.errors.areaId && (
              <div className="invalid-feedback">{info.errors.areaId}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className={`form-control ${
                info.errors.username ? "is-invalid" : ""
              }`}
              name="username"
              value={info.username}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "username",
                  val: e.target.value,
                });
                dispatch({
                  type: "setErrors",
                  val: { username: validateField("Username", e.target.value) },
                });
              }}
              placeholder="Choose a username"
              required
            />
            {info.errors.username && (
              <div className="invalid-feedback">{info.errors.username}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${
                info.errors.password ? "is-invalid" : ""
              }`}
              name="password"
              value={info.password}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "password",
                  val: e.target.value,
                });
                dispatch({
                  type: "setErrors",
                  val: { password: validatePassword(e.target.value) },
                });
              }}
              placeholder="Choose a password"
              required
            />
            {info.errors.password && (
              <div className="invalid-feedback">{info.errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className={`form-control ${
                info.errors.confirmPassword ? "is-invalid" : ""
              }`}
              name="confirmPassword"
              value={info.confirmPassword}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "confirmPassword",
                  val: e.target.value,
                });
                dispatch({
                  type: "setErrors",
                  val: {
                    confirmPassword: validateConfirmPassword(
                      info.password,
                      e.target.value
                    ),
                  },
                });
              }}
              placeholder="Confirm your password"
              required
            />
            {info.errors.confirmPassword && (
              <div className="invalid-feedback">
                {info.errors.confirmPassword}
              </div>
            )}
          </div>

          {info.errors.server && (
            <div className="alert alert-danger" role="alert">
              {info.errors.server}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={info.loading}
          >
            {info.loading ? "Registering..." : "REGISTER"}
          </button>
        </form>
      </div>
    </div>
  );
}
