import { useNavigate } from "react-router-dom";
import Scene from "../CubeAnimate/cubeRender";
import style from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.header}></div>
      <div className={style.logodiv}>
        <Scene />
        <p className={style.logotext}>learnBlocks.io</p>
        <p
          className={style.currencyCalc}
          onClick={() => navigate("/convertToBTC")}
        >
          Currency Calculator
        </p>
      </div>
    </>
  );
};

export default Header;
