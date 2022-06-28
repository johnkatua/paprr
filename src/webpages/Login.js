import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="register--wrapper">
      <div className="login--container">
        <form>
          <div className="register--container__details">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" autoComplete="email" />
          </div>
          <div className="register--container__details">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
      <div className="register--wrapper__links">
        <button onClick={() => navigate("/")}>Back to Homepage</button>
        <button onClick={() => navigate("/register")}>I do not have an account</button>
      </div>
    </div>
  );
};

export default Login;
