import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Intro from "./Intro";
import "./index.css";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout--container">
      <Header />
      <div className="wrapper">
        <Intro />
        <Navigation onClick={() => setOpen((prev) => !prev)} />
        {open ? <div>Open</div> : null}
        <main className="wrapper--content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
