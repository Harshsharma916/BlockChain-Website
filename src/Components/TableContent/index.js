import {PauseOutlined} from '@ant-design/icons';
import style from './tablecontent.module.scss';

const TableContent = () => {
  return (
    <div className={style.table}>
      <div className={style.handler}>
        <PauseOutlined className={style.hamburger}/>
        <p className={style.text}>TableContent</p>
      </div>
    </div>
  );
};

export default TableContent;