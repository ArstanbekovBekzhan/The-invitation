import React from "react";
import Img from "../../image/flower.png"
import First from "./first.module.css"
import logo from "../../image/Logo2.png"
import phon from "../../image/phon.png"


export const FirstContent = () => {
 return (
  <div>
    <div className={First.wrap}>
        <img className={First.flower} src={Img} alt="" />
    </div>
    <div className={First.text}>
            <p>В нашей жизни вот-вот случится счастливое событие, которое хочется разделить с дорогими людьми.
                Мы приглашаем Вас открыть вместе с нами новую страницу книги нашей жизни, которая состоится: </p>
        <h2>20 августа 2023</h2>
        <p>Сбор гостей в 16:00</p>
        <img className={First.logo} src={logo} alt="" />
        <img className={First.phon} src={phon} alt="" />
    </div>
    
  </div>
   
 )
}
export default FirstContent