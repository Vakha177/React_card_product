import Goods from "../props/Goods"
import style from '../props/Goods.module.css'
  function Main() {
    const goods = [
        {'image': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7fd9018-e0ce-4adc-9320-a05b67eef078/air-jordan-1-mid-mens-shoes-hWx1dL.png' ,'cost': 'Nike sneakers' ,'button2': 'Детали' , 'title':'120$' , 'button':'Добавить в корзину'},
]
    
    return(
        <div className={style.contayner}>
             {goods.map(item =><Goods image={item.image} cost={item.cost} title={item.title} button={item.button} button2={item.button2}/> )}
        </div>
    )
  }


  export default Main