import React from "react";
import MBBankIcon from "../public/mbbank.png";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/home.module.scss";

export default function FromContainer() {
  return (
    <div className={styles["from-container"]}>
      <div className={styles.icon}>
        <Image src={MBBankIcon} width="80" height="80" />
      </div>
      <div className={styles.info}>
        <p className={styles.account}>6666411208888 - NGUYEN DUY ANH</p>
        <p className={styles.asset}>
          <strong>10,000,000,000</strong> VND
        </p>
      </div>
      <FaAngleDown />
    </div>
  );
}
