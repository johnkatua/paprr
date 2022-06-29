import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home";
import FilteredPapers from "./fiilteredPapers";
import "./index.css";
import Login from "./Login";
import Register from "./Register";

const LayoutRoute = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Webpages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <LayoutRoute>
                <Home />
              </LayoutRoute>
            }
            exact
          />
          <Route
            path="paper/:id"
            element={
              <LayoutRoute>
                <FilteredPapers />
              </LayoutRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Webpages;
