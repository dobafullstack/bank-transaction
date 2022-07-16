import React from "react";
import FromContainer from "../components/FromContainer";
import HomeHeader from "../components/HomeHeader";
import ToContainer from "../components/ToContainer";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <HomeHeader title="Chuyển tiền" />
      <div className={styles["home-body"]}>
        <p className={styles["title"]}>Từ tài khoản nguồn</p>
        <FromContainer />
        <p className={styles["title"]} style={{ marginBottom: 20 }}>
          Đến
        </p>
        <ToContainer />
      </div>
    </div>
  );
}
