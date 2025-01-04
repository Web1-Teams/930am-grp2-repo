import React, { useState } from "react";
import "./Signin.css";
import s from "./Signin.jpg"
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const validateCredentials = (username, password) => {
    
    const validUsername = "user123";
    const validPassword = "password123";

    return username === validUsername && password === validPassword;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateCredentials(username, password)) {
      navigate("/")
      
    } else {
      setErrorMessage(true);
    }
  };

  const handleInputChange = () => {
    if (errorMessage) {
      setErrorMessage(false);
    }
  };

  return (
    <div id="signin-body">
      <div id="signin-image">
        <img src={s} alt="Top Image" />
      </div>
      <div id="signin-container">
        <h2 id="signin-title">SIGN IN</h2>
        <form onSubmit={handleSubmit}id="signin-form">
          <label htmlFor="username"className="signin-label">Username</label>
          <input
            type="text"
            id="username"
            className="signin-input"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleInputChange();
            }}
            required
          />
          <label htmlFor="password"className="signin-label">Password</label>
          <input
            type="password"
            id="password"
            className="signin-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            required
          />
          <div id="signin-checkbox">
            <label>
              <input
               type="checkbox" 
               
               />
               Remember me
            </label>
            <a href="#"id="forgotpassword-anchor" >Forgot Password?</a>
          </div>
          
          <button type="submit"id="signin-button" href="/">Login</button>
        </form>
        {errorMessage && <p id="error-message">Invalid username or password</p>}
      </div>
    </div>
  );
};

export default Signin;
