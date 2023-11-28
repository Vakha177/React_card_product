import { useState } from "react";
import style from "./Goods.module.css";
function Goods(props) {
  const [displayText, setDisplayText] = useState("");
  const [text, setText] = useState("Добавить");
  // const [infa , setInfa] = useState('')
  const [infa, setInfa] = useState(true);

  const handleClickInfa = () => {
    //  setInfa('lorem ipsum')
    setInfa(true);
  };

  const handleClickInfaDelete = () => {
    setInfa(false);
  };

  const handleClickDelete = () => {
    setDisplayText("");
    setText("Добавить в корзину");
  };

  const handleClick = () => {
    setDisplayText("Удалить из корзины");
    setText("Уже в корзине");
  };

  return (
    <div className="block">
      <img src={props.image} alt="" className={style.image}></img>
      <div className={style.card}>
        <h3 className={style.price}>{props.cost}</h3>
        <button onClick={handleClickInfa} className={style.button2}>
          {props.button2}
        </button>
       { infa ?  <div onClick={handleClickInfaDelete} className={style.infor}>
          "lores"
        </div>:null}
        <h2 className={style.name}>{props.title}</h2>
      </div>
      <hr />
      <button onClick={handleClick} className={style.button}>
        {text}
      </button>
      <p onClick={handleClickDelete} className={style.p}>
        {displayText}
      </p>
    </div>
  );
}
export default Goods;
