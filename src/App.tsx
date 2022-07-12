import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Card from "./pages/Card/Card";
import Complete from "./pages/Complete/Complete";
import Gift from "./pages/Gift/Gift";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gift />} />
        <Route path="/card" element={<Card />} />
        <Route path="home" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}
