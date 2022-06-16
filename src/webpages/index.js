import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home";
import MyBooks from "./mybooks";
import Favourites from "./favourites";
import "./index.css";

const Webpages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fsst" element={<MyBooks />} />
            <Route path="/febe" element={<Favourites />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default Webpages;
