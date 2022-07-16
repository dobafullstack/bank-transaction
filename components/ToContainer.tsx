import { useState } from "react";
import GetNow from "../helpers/GetNow";
import TextInput from "./TextInput";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/home.module.scss";

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

export default function ToContainer() {
  const [asset, setAsset] = useState("");
  const [assetString, setAssetString] = useState("");
  const [errorAsset, setErrorAsset] = useState(false);
  const [errorContent, setErrorContent] = useState(false);
  const [content, setContent] = useState("");

  var accountSid = "AC17bc4654122bd09b233cfccb2d094eec"; // Your Account SID from www.twilio.com/console
  var authToken = "d64a9527497e467c7d38229356fa015e"; // Your Auth Token from www.twilio.com/console

  const router = useRouter();

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

    const num = Intl.NumberFormat("vi-VN")
      .format(parseInt(asset.replaceAll(",", "")))
      .replaceAll(".", ",");

    const numAfterSum = Intl.NumberFormat("vi-VN")
      .format(
        generateRandom(1000000, 2000000) + parseInt(asset.replaceAll(",", ""))
      )
      .replaceAll(".", ",");

    const time = GetNow();

    axios.post("/api/sendSms", {
      body: `- \nSacombank ${time} \nTK 070120026754 \nPS: +${num}VND \nSo du kha dung: ${numAfterSum} \n${content}`,
    });

    router.push(`/complete?asset=${asset}&content=${content}&time=${time}`, {
      // query: {
      //   time, asset, content
      // }
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

    const num = Intl.NumberFormat("vi-VN")
      .format(parseInt(value))
      .replaceAll(".", ",");

    setAsset(num);
    setErrorAsset(false);
  };

  const onChangeContent = (value: string) => {
    setContent(value);
    setErrorContent(false);
  };

  return (
    <div className={styles["to-container"]}>
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
        onChange={(e) => onChangeAsset(e.target.value.replaceAll(",", ""))}
      />
      {assetString.length !== 0 ? (
        <p className={styles.count}>{assetString} đồng</p>
      ) : null}
      <TextInput
        error={errorContent}
        title="Nội dung chuyển tiền"
        placeholder="Nhập nội dung chuyển tiền"
        value={content}
        onChange={(e) => onChangeContent(e.target.value)}
      />
      <button className={styles["btn-submit"]} onClick={onSubmit}>
        Tiếp tục
      </button>
    </div>
  );
}
