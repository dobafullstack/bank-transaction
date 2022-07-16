import styles from "../styles/Gift.module.scss";
import React from "react";
import GiftImage from "../public/gift.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Gift() {
  const router = useRouter();

  return (
    <div className={styles.giftContainer}>
      <main className={styles.main}>
        <Image src={GiftImage} alt="" className={styles.img} />
        <h1 className={styles.title}>Chúc mừng sinh nhật</h1>
        <p className={styles.sub}>Chúc em yêu sinh nhật vui vẻ</p>
        <button className={styles.button} onClick={() => router.push("/card")}>
          Mở thiệp
        </button>
        <p className={styles.description}>Nhấn vào nút trên để mở thiệp</p>
      </main>
    </div>
  );
}
