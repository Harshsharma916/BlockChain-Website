import { PauseOutlined } from "@ant-design/icons";
import { useState } from "react";
import style from "./tablecontent.module.scss";
import close from "../../Assets/Images/close.png";

const TableContent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={style.table} onClick={() => setShow((prev) => !prev)}>
        <div className={style.handler}>
          <PauseOutlined className={style.hamburger} />
          <p className={style.text}>TableContent</p>
        </div>
      </div>
      {show && (
        <div className={style.container}>
          <img src={close} onClick={() => setShow(false)}/>
          <div className={style.content}>
            <p>What is Blockchain?</p>
            <p>How does Blockchain work?</p>
            <p>Bitcoin vs Blockchain</p>
            <p>How are Blockchains Used?</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TableContent;
