import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";

export default function HomeHeader() {
  return (
    <div className="home-header">
      <FaAngleLeft />
      <h1>Chuyển tiền</h1>
      <AiFillHome />
    </div>
  );
}
