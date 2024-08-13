// components/LoginComp.js

import {useState,useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

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

  const [user, dispatch] = useReducer(reducer, init);
  const[msg , setMsg] =useState("");
  const navigate =useNavigate();

  const reduxAction = useDispatch();

  const submitHandle =(e)=>{
    e.preventDefault();
    const reqData ={
        method:'POST',
        headers :{'content-type' : 'application/json'},
        body :JSON.stringify(
            {
                username : user.uid,
                password : user.pwd

            }
        )
    }
    fetch("http://localhost:5077/api/UserManagement/VerifyLogin" ,reqData)
    .then (resp =>{ if(resp.ok){
      return resp.json();
    }
    else
    {
      throw new Error("Server error");
    }
    })
    .then(obj =>{
                  if(obj === null)
                  {
                    setMsg("wrong UID/Password");
                  }
                  else
                  {
                    reduxAction(login())
                    if(obj.status === false)
                    {
                      alert("request has not approved");
                      navigate("/login");
                    }
                    else
                    {
                      if(obj.roleId === 1){
                        navigate("/admin_home");
                      }
                      else if(obj.roleId === 2){
                        navigate("/artist_home");
                      }
                      else if(obj.roleId === 3){
                        navigate("/buyer_home");
                      }
                      
                    }
                  }

    })                   
    .catch(error => setMsg("Server error. Try after some time"));
    
}

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
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{3,}$/.test(password)) {
      return "Password must contain at least one letter.";
    }
   
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uidError = validateUsername(user.uid);
    const pwdError = validatePassword(user.pwd);

    dispatch({ type: 'setUidError', val: uidError });
    dispatch({ type: 'setPwdError', val: pwdError });

    if (uidError === "" && pwdError === "") {
      console.log("User user:", user);
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
              className={`form-control ${user.uidError ? "is-invalid" : ""}`}
              name="uid"
              value={user.uid}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'uid', val: e.target.value });
                dispatch({ type: 'setUidError', val: validateUsername(e.target.value) });
              }}
              placeholder="Enter your username"
              required
            />
            {user.uidError && <div className="invalid-feedback">{user.uidError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password: </label>
            <input
              type="password"
              className={`form-control ${user.pwdError ? "is-invalid" : ""}`}
              name="pwd"
              value={user.pwd}
              onChange={(e) => {
                dispatch({ type: 'update', fld: 'pwd', val: e.target.value });
                dispatch({ type: 'setPwdError', val: validatePassword(e.target.value) });
              }}
              placeholder="Enter your password"
              required
            />
            {user.pwdError && <div className="invalid-feedback">{user.pwdError}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={(e) => submitHandle(e)}>LOGIN</button>
        </form>
        <span>{msg}</span>
      </div>
      
    </div>
  );
}
