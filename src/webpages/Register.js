import React from "react";

const Register = () => {
  return (
    <div className="register--wrapper">
      <div className="register--container">
        <form>
          <div className="register--container__details">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" autoComplete="name" />
          </div>
          <div className="register--container__details">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" autoComplete="email" />
          </div>
          <div className="register--container__details">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" autoComplete="on" />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
