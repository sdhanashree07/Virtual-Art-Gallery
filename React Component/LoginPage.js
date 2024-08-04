// components/LoginComp.js

import { useReducer } from "react";

export default function LoginComp() {
  const init = {
    uid: "",
    pwd: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
      default:
        return state; // Ensure the reducer returns a state in default case
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", info);
    // Add login logic here
    dispatch({ type: 'reset' });
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
              className="form-control"
              name="uid"
              value={info.uid}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'uid', val: e.target.value })
              }}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password: </label>
            <input
              type="password"
              className="form-control"
              name="pwd"
              value={info.pwd}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'pwd', val: e.target.value })
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
