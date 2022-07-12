import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";

type Props = {
  title: string;
}

export default function HomeHeader({title}: Props) {
  return (
    <div className="home-header">
      <FaAngleLeft />
      <h1>{title}</h1>
      <AiFillHome />
    </div>
  );
}
