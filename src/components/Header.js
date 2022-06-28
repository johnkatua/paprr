import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header--wrapper">
      <h1 className="header--wrapper__title">TUK-repo</h1>
      <div className="header--wrapper__auth">
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </header>
  );
};

export default Header;
