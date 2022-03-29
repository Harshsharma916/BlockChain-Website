import style from "./rect.module.css";
import rect1 from "../../Assets/Images/rect1.png"

export const RectAnimate = () => {
  return(
    <div className={style.container}>
      <img className={style.rect1} src={rect1}/>
      <img className={style.rect2} src={rect1}/>
      <img className={style.rect3} src={rect1}/>
    </div>
  )
}

