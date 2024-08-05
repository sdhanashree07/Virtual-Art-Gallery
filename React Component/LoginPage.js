// components/LoginComp.js

import { useReducer } from "react";

export default function LoginComp() {
  const init = {
    uid: "",
    pwd: "",
    uidError: "",
    pwdError: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'setUidError':
        return { ...state, uidError: action.val };
      case 'setPwdError':
        return { ...state, pwdError: action.val };
      case 'reset':
        return init;
      default:
        return state; // Ensure the reducer returns a state in default case
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  // Validation function for username
  const validateUsername = (username) => {
    if (username.trim() === "") {
      return "Username cannot be empty.";
    }
    if (/\s/.test(username)) {
      return "Username cannot contain spaces.";
    }
    return "";
  };

  // Validation function for password
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uidError = validateUsername(info.uid);
    const pwdError = validatePassword(info.pwd);

    dispatch({ type: 'setUidError', val: uidError });
    dispatch({ type: 'setPwdError', val: pwdError });

    if (uidError === "" && pwdError === "") {
      console.log("User Info:", info);
      // Add login logic here
      dispatch({ type: 'reset' });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-light p-4 mt-5 rounded shadow-lg border" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center text-primary mb-3">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="uid" className="form-label">Username: </label>
            <input
              type="text"
              className={`form-control ${info.uidError ? "is-invalid" : ""}`}
              name="uid"
              value={info.uid}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'uid', val: e.target.value });
                dispatch({ type: 'setUidError', val: validateUsername(e.target.value) });
              }}
              placeholder="Enter your username"
              required
            />
            {info.uidError && <div className="invalid-feedback">{info.uidError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password: </label>
            <input
              type="password"
              className={`form-control ${info.pwdError ? "is-invalid" : ""}`}
              name="pwd"
              value={info.pwd}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'pwd', val: e.target.value });
                dispatch({ type: 'setPwdError', val: validatePassword(e.target.value) });
              }}
              placeholder="Enter your password"
              required
            />
            {info.pwdError && <div className="invalid-feedback">{info.pwdError}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
