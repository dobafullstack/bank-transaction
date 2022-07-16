import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";
import HomeHeader from "../../components/HomeHeader";
import styles from "../../styles/complete.module.scss";

export default function Complete() {
  //   const { state } = useLocation();
  //   const { asset, content, time } = state as any;
  const {
    query: { time, asset, content },
  } = useRouter();

  return (
    <div className={styles["complete-container"]}>
      <HomeHeader title="Kết quả" />
      <div className={styles.body}>
        <div className={styles["success-container"]}>
          <FaCheckCircle color="green" size={70} />
          <p className={styles.p}>Chuyển tiền thành công</p>
        </div>
        <Input title="Ngày giao dịch" value={`${time}`} />
        <Input title="Số tham chiếu giao dịch" value="22072000" />
        <Input title="Tài khoản trích nợ" value="6666411208888" />
        <Input title="Tài khoản thụ hưởng" value="070120026754" />
        <Input title="Tên tài khoản" value="TRINH HONG BAO THY" />
        <Input title="Số tiền trích nợ" value={`${asset} VND`} />
        <Input title="Nội dung chuyển tiền" value={`${content}`} />

        <p className={styles.note}>
          Ghi chú: Quý khách v ui long ghi nhớ số tham chiếu giao dịch để liên
          hệ với ngân hàng khi cần thiết
        </p>

        <div className={styles["btn-wrapper"]}>
          <div className={`${styles.btn} ${styles["btn-save"]}`}>
            Lưu tài khoản
          </div>
          <div className={`${styles.btn} ${styles["btn-new"]}`}>
            Tạo giao dịch mới
          </div>
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
    <div className={styles.input}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};
