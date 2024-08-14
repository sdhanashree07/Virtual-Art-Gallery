// components/LoginComp.js

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginComp() {
  const navigate = useNavigate();

  const init = {
    uid: "",
    pwd: "",
    uidError: "",
    pwdError: "",
    serverError: "",
    loading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "setUidError":
        return { ...state, uidError: action.val };
      case "setPwdError":
        return { ...state, pwdError: action.val };
      case "setServerError":
        return { ...state, serverError: action.val };
      case "setLoading":
        return { ...state, loading: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  const validateUsername = (username) => {
    if (username.trim() === "") {
      return "Username cannot be empty.";
    }
    if (/\s/.test(username)) {
      return "Username cannot contain spaces.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uidError = validateUsername(info.uid);
    const pwdError = validatePassword(info.pwd);

    dispatch({ type: "setUidError", val: uidError });
    dispatch({ type: "setPwdError", val: pwdError });

    if (uidError === "" && pwdError === "") {
      dispatch({ type: "setLoading", val: true });
      dispatch({ type: "setServerError", val: "" });

      try {
        const response = await axios.post(
          "http://localhost:5000/api/UserManagement/VerifyLogin",
          {
            Username: info.uid,
            Password: info.pwd,
          }
        );

        if (response.status === 200 && response.data) {
          console.log("Login successful:", response.data);

          localStorage.setItem("user", JSON.stringify(response.data));

          const userRole = response.data.roleId;

          switch (userRole) {
            case 2: // Artist
              navigate("/Artist");
              break;
            case 3: // Buyer
              navigate("/Buyer");
              break;
            case 1: // Admin
              navigate("/Admin");
              break;
            default:
              navigate("/");
          }

          dispatch({ type: "reset" });
          alert("Login successful!");
        } else {
          dispatch({
            type: "setServerError",
            val: "Invalid username or password",
          });
        }
      } catch (error) {
        console.error("Login failed:", error);
        dispatch({
          type: "setServerError",
          val:
            (error.response && error.response.data) ||
            "Network error. Please try again later.",
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
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="text-center text-primary mb-3">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="uid" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className={`form-control ${info.uidError ? "is-invalid" : ""}`}
              name="uid"
              value={info.uid}
              onChange={(e) => {
                dispatch({ type: "update", fld: "uid", val: e.target.value });
                dispatch({
                  type: "setUidError",
                  val: validateUsername(e.target.value),
                });
              }}
              placeholder="Enter your username"
              required
            />
            {info.uidError && (
              <div className="invalid-feedback">{info.uidError}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${info.pwdError ? "is-invalid" : ""}`}
              name="pwd"
              value={info.pwd}
              onChange={(e) => {
                dispatch({ type: "update", fld: "pwd", val: e.target.value });
                dispatch({
                  type: "setPwdError",
                  val: validatePassword(e.target.value),
                });
              }}
              placeholder="Enter your password"
              required
            />
            {info.pwdError && (
              <div className="invalid-feedback">{info.pwdError}</div>
            )}
          </div>

          {info.serverError && (
            <div className="alert alert-danger" role="alert">
              {info.serverError}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={info.loading}
          >
            {info.loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
}
