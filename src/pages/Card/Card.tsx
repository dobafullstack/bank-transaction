import React from "react";
import "./card.scss";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <main>
        <div className="top">
          <h1 className="title">Chúc mừng sinh nhật</h1>

          <p className="content">
            Một năm nữa đã qua, ngày này 22 năm trước một người tuyệt vời nhất
            trên thế giới này đã được ra đời. Vâng, chính là người đang đọc
            những dòng này. Em là điều tuyệt vời nhất mà anh từng có. Chúc mừng
            sinh nhật bà xã của anh. Chúc em tuổi mới luôn luôn hạnh phúc và vui
            vẻ nhé, Anh yêu em nhiều lắm.
          </p>

          <p className="sign">Chồng em</p>
        </div>

        {/* <p className="sub-btn">Còn đây là quà của anh</p> */}

        <button onClick={() => navigate("/home")}>
          <FaAngleRight size={20} />
        </button>
      </main>
    </div>
  );
}
