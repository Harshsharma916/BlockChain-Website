import Scene from "../CubeAnimate/cubeRender";
import style from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={style.header}></div>
      <div className={style.logodiv}>
        <Scene />
        <p className={style.logotext}>learnBlocks.io</p>
        <p className={style.currencyCalc}>Currency Calculator</p>
      </div>
    </>
  );
};

export default Header;
