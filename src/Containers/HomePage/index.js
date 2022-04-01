import { useEffect } from "react";
import Header from "../../Components/Header";
import style from "./homepage.module.scss";
import bgImg from "../../Assets/Images/bgImg.png";
import bgImg1 from "../../Assets/Images/bgImg1.png";
import blocksImg from "../../Assets/Images/blocks.png";
import TableContent from "../../Components/TableContent";
import blocksBg from "../../Assets/Images/blocksBg.png";
import styled from "styled-components";
import { horizontalScroll } from "./Components/Animate";
import { content } from "./Components/Content";
import InfoPage1 from "./InfoPage-1";
import InfoPage2 from "./InfoPage-2";
import { RectAnimate } from "../../Components/RectAnimate";
import InfoPage3 from "./InfoPage-3";

const Homepage = () => {
  useEffect(() => {
    horizontalScroll();
  }, []);

  // const scrollRef = useHorizontalScroll();
  return (
    <div className={style.wrapper}>
      <Header />
      <TableContent />
      <div className={style.bgImgdiv} id="bgImgdiv">
        <img src={bgImg} className={style.bgImg} />
        <img src={bgImg1} className={style.bgImg1} />
        <img className={style.blocksImgbg} src={blocksBg} />
      </div>
      <div className={style.rectAnimation1}>
        <RectAnimate />
      </div>
      {/* <div className={style.rectAnimation2}>
        <RectAnimate />
      </div> */}
      <div className={style.container1} id="container">
        <div className={style.content1}>
          <p className={style.heading}>{content[0].heading}</p>
          <p className={style.info}>{content[0].info}</p>
        </div>
        <img className={style.blocksImg} src={blocksImg} />
        <div className={style.content2}>
          <p className={style.heading}>{content[1].heading}</p>
          <p className={style.info}>{content[1].info}</p>
        </div>
      </div>
      {/* <div className={style.container2}> */}
      <InfoPage1 />
      <InfoPage2 />
      <InfoPage3 />
      {/* </div> */}
    </div>
  );
};

export default Homepage;
