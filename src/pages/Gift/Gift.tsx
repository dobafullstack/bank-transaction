import React from "react";
import "./gift.scss";
import GiftImage from "../../../assets/gift.png";
import { useNavigate } from "react-router-dom";

export default function Gift() {
  const navigate = useNavigate();

  return (
    <div className="gift-container">
      <main>
        <img src={GiftImage} alt="" />
        <h1 className="title">Chúc mừng sinh nhật</h1>
        <p className="sub">Chúc em yêu sinh nhật vui vẻ</p>
        <button onClick={() => navigate("/card")}>Mở thiệp</button>
        <p className="description">Nhấn vào nút trên để mở thiệp</p>
      </main>
    </div>
  );
}
