import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Complete from "./pages/Complete/Complete";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}
