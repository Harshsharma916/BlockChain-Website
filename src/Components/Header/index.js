import Scene from "../CubeAnimate/cubeRender";
import style from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={style.header}></div>
      <div className={style.logodiv}>
        <Scene />
        <p className={style.logotext}>learnBlocks.io</p>
      </div>
    </>
  );
};

export default Header;
