import React from "react";

const Login = () => {
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
    </div>
  );
};

export default Login;
