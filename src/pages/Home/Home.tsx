import React from "react";
import FromContainer from "./components/FromContainer";
import HomeHeader from "./components/HomeHeader";
import ToContainer from "./components/ToContainer";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <HomeHeader />
      <div className="home-body">
        <p className="from title">Từ tài khoản nguồn</p>
        <FromContainer />
        <p className="to title" style={{ marginBottom: 20 }}>
          Đến
        </p>
        <ToContainer />
      </div>
    </div>
  );
}
