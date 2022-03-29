import style from "./infopage-2.module.scss";
import transactionImg from "../../../Assets/Images/transaction.png";

const InfoPage2 = () => {
  return (
    <div className={style.mainContStyle}>
      <div className={style.container}>
        <p className={style.heading}>Transaction Process</p>
        <img src={transactionImg} className={style.img} />
      </div>
    </div>
  );
};

export default InfoPage2;
