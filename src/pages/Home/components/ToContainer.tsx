import React, { useState } from "react";
import { TextField, InputLabel } from "@mui/material";
import TextInput from "../../../shared/TextInput";

export default function ToContainer() {
  const [asset, setAsset] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="to-container">
      <TextInput
        title="Ngân hàng"
        value="Sài Gòn Thương Tín (SACOMBANK, STB)"
      />
      <TextInput title="Số tài khoản" value="070120026754" />
      <TextInput title="Tên tài khoản" value="TRINH HONG BAO THY" />
      <TextInput
        title="Số tiền"
        placeholder="Nhập số tiền"
        value={asset}
        onChange={(e) => setAsset(e.target.value)}
      />
      <TextInput
        title="Nội dung chuyển tiền"
        placeholder="Nhập nội dung chuyển tiền"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn-submit">Tiếp tục</button>
    </div>
  );
}
