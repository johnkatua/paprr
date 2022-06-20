import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Intro from "./Intro";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="layout--container">
      <Header />
      <div className="wrapper">
        <Intro />
        <Navigation />
        <main className="wrapper--content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
