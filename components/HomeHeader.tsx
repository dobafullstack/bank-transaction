import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import styles from "../styles/home.module.scss";

type Props = {
  title: string;
};

export default function HomeHeader({ title }: Props) {
  return (
    <div className={styles["home-header"]}>
      <FaAngleLeft />
      <h1 className={styles["home-header-h1"]}>{title}</h1>
      <AiFillHome />
    </div>
  );
}
