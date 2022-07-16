import { useRouter } from "next/router";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "../styles/card.module.scss";

export default function Card() {
  const router = useRouter();

  return (
    <div className={styles.cardContainer}>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Chúc mừng sinh nhật</h1>

          <p className={styles.content}>
            Một năm nữa đã qua, ngày này 22 năm trước một người tuyệt vời nhất
            trên thế giới này đã được ra đời. Vâng, chính là người đang đọc
            những dòng này. Em là điều tuyệt vời nhất mà anh từng có. Chúc mừng
            sinh nhật bà xã của anh. Chúc em tuổi mới luôn luôn hạnh phúc và vui
            vẻ nhé, Anh yêu em nhiều lắm.
          </p>

          <p className={styles.sign}>Chồng em</p>
        </div>

        {/* <p className="sub-btn">Còn đây là quà của anh</p> */}

        <button className={styles.button} onClick={() => router.push("/home")}>
          <FaAngleRight size={20} />
        </button>
      </main>
    </div>
  );
}
