import style from "./infopage-2.module.scss";
import transactionImg from "../../../Assets/Images/transaction.png";
import { RectAnimate1 } from "../../../Components/RectAnimate";
import btcVector from "../../../Assets/Images/btcVector.png";
import { content } from "../Components/Content";
import { useEffect } from "react";
import { horizontalScroll } from "../Components/Animate";

const InfoPage2 = () => {
  useEffect(()=>{
    horizontalScroll()
  },[]);

  return (
    <div className={style.mainContStyle}>
      <div className={style.container} id="infoContainer_2">
        <div className={style.subContainer}>
          <div className={style.rectContainer}>
            <img src={btcVector} className={style.btcVector}/>
            <RectAnimate1 />
          </div>
          <div className={style.data}>
            <p className={style.heading}>{content[6].heading}</p>
            <p>{content[6].info1}</p>
            <p>{content[6].info2}</p>
          </div>
        </div>
        <div className={style.transactionCont}>
          <p className={style.heading}>Transaction Process</p>
          <img src={transactionImg} className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default InfoPage2;
