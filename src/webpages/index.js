import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home";
import MyBooks from "./mybooks";
import Favourites from "./favourites";
import FilteredPapers from "./fiilteredPapers";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

const Webpages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fsst" element={<MyBooks />} />
            <Route path="/febe" element={<Favourites />} />
            <Route path="/paper/:id" element={<FilteredPapers />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default Webpages;
