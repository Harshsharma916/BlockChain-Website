import { useEffect } from "react";
import { horizontalScroll } from "../Components/Animate";
import { content } from "../Components/Content";
import style from "./infopage-1.module.scss";

const InfoPage1 = () => {
  
  useEffect(()=>{
    horizontalScroll();
  },[])

  return (
    <div className={style.mainContStyle}>
      <p className={style.mainHeading}>How does a Blockchain work?</p>
      <div className={style.container} id="infoContainer_1">
        <div className={style.subContainer}>
          <div className={style.content}>
            <p className={style.heading}>{content[2].heading}</p>
            <p className={style.info}>{content[2].info}</p>
          </div>
          <div className={style.content}>
            <p className={style.heading}>{content[3].heading}</p>
            <p className={style.info}>{content[3].info}</p>
          </div>
        </div>
        <div className={style.content}>
          <p className={style.heading}>{content[4].heading}</p>
          <p className={style.info}>{content[4].info}</p>
        </div>
        <div className={style.content}>
          <p className={style.heading}>{content[5].heading}</p>
          <p className={style.info}>{content[5].info}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage1;
