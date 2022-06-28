import React from "react";

const Header = () => {
  return (
    <header className="header--wrapper">
      <h1 className="header--wrapper__title">TUK-repo</h1>
      <div className="header--wrapper__auth">
        <button>
          Register
        </button>
        <button>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
