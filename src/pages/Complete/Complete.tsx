import React from "react";
import { useLocation } from "react-router-dom";
import HomeHeader from "../Home/components/HomeHeader";
import { FaCheckCircle } from "react-icons/fa";
import "./complete.scss";
import { TextField } from "@mui/material";
import TextInput from "../../shared/TextInput";
import GetNow from "../../helpers/GetNow";

export default function Complete() {
  const { state } = useLocation();
  const { asset, content, time } = state as any;

  return (
    <div className="home-wrapper complete-container">
      <HomeHeader title="Kết quả" />
      <div className="body">
        <div className="success-container">
          <FaCheckCircle color="green" size={70} />
          <p>Chuyển tiền thành công</p>
        </div>
        <Input title="Ngày giao dịch" value={time} />
        <Input title="Số tham chiếu giao dịch" value="22072000" />
        <Input title="Tài khoản trích nợ" value="6666411208888" />
        <Input title="Tài khoản thụ hưởng" value="070120026754" />
        <Input title="Tên tài khoản" value="TRINH HONG BAO THY" />
        <Input
          title="Số tiền trích nợ"
          value={parseInt(asset).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
            // currencyDisplay: "đ",
          })}
        />
        <Input title="Nội dung chuyển tiền" value={content} />

        <p className="note">
          Ghi chú: Quý khách v ui long ghi nhớ số tham chiếu giao dịch để liên
          hệ với ngân hàng khi cần thiết
        </p>

        <div className="btn-wrapper">
          <div className="btn btn-save">Lưu tài khoản</div>
          <div className="btn btn-new">Tạo giao dịch mới</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  value: string;
};

const Input = ({ title, value }: Props) => {
  return (
    <div className="input">
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};
