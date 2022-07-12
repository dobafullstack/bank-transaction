import React, { useState } from "react";
import { TextField, InputLabel } from "@mui/material";
import TextInput from "../../../shared/TextInput";
import { useNavigate } from "react-router-dom";
import NumberToString from "../../../helpers/NumberToString";
import { default as VNnum2words } from "vn-num2words";
import GetNow from "../../../helpers/GetNow";

export default function ToContainer() {
  const [asset, setAsset] = useState("");
  const [assetString, setAssetString] = useState("");
  const [errorAsset, setErrorAsset] = useState(false);
  const [errorContent, setErrorContent] = useState(false);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    if (asset.length === 0 || content.length === 0) {
      return setErrorAsset(() => {
        if (content.length === 0) {
          setErrorContent(true);
        }

        if (asset.length > 0) {
          return false;
        }

        return true;
      });
    }

    navigate("/complete", {
      state: {
        asset,
        content,
        time: GetNow()
      },
      replace: true,
    });
  };

  const onChangeAsset = (value: string) => {
    //First character not allow value 0
    if (value.length === 1 && value === "0") return;

    if (value.length === 0) {
      setAsset(value);
      setAssetString("");
      return;
    }

    const result = VNnum2words(parseInt(value));
    setAsset(value);
    setErrorAsset(false);
    setAssetString(result.charAt(0).toUpperCase() + result.slice(1));
  };

  const onChangeContent = (value: string) => {
    setContent(value);
    setErrorContent(false);
  };

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
        type="tel"
        error={errorAsset}
        value={asset}
        margin={assetString.length === 0}
        onChange={(e) => onChangeAsset(e.target.value)}
      />
      {assetString.length !== 0 ? (
        <p className="count">{assetString} đồng</p>
      ) : null}
      <TextInput
        error={errorContent}
        title="Nội dung chuyển tiền"
        placeholder="Nhập nội dung chuyển tiền"
        value={content}
        onChange={(e) => onChangeContent(e.target.value)}
      />
      <button className="btn-submit" onClick={onSubmit}>
        Tiếp tục
      </button>
    </div>
  );
}
