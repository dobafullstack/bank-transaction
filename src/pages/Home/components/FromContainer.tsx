import React from "react";
import MBBankIcon from "../../../../assets/mbbank.png";
import { FaAngleDown } from "react-icons/fa";

export default function FromContainer() {
  return (
    <div className="from-container">
      <img src={MBBankIcon} className="icon" />
      <div className="info">
        <p className="account">6666411208888 - NGUYEN DUY ANH</p>
        <p className="asset">
          <strong>1,998,604</strong> VND
        </p>
      </div>
      <FaAngleDown />
    </div>
  );
}
