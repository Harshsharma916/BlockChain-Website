import style from "./infopage-3.module.scss";
import { content } from "../Components/Content";
import groupVector from "../../../Assets/Images/groupVector.png";

const InfoPage3 = () => {
  return (
    <div className={style.mainCont}>
      <div className={style.container}>
        <p className={style.heading}>{content[7].heading}</p>
        <p>{content[7].info}</p>
        <img src={groupVector} />
      </div>
    </div>
  );
};

export default InfoPage3;
