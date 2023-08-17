import React from 'react'
import Cstyle from './Contacts.module.css'
import Logo2 from "../../image/Logo2.png"
import Whatsapp from "../../image/whatsapp.png"

export default function Contacts() {
  return (
    <div className={Cstyle.section}>
        <div className={Cstyle.image}>
            <img src={Logo2} alt="" />
        </div>
            <h2  className={Cstyle.data}>20.06.2023</h2>
            <h4  className={Cstyle.text}>ЕСЛИ У МЕНЯ ВОЗНИКНУТ ЛЮБЫЕ ДРУГИЕ ВОПРОСЫ ТЫ МОЖЕШЬ СВЯЗАТЬСЯ С НАМИ:</h4>
            <div className={Cstyle.links}>
                <a target='_black' href="https://wa.me/+996704080643">
                    <img src={Whatsapp} alt="" />
                    <h3>Азиз</h3>
                </a>
                <a target='_black' href="https://wa.me/+996704080643">
                    <img src={Whatsapp} alt="" />
                    <h3>Эльмира</h3>
                </a>
            </div>
            <div className={Cstyle.goodbye}>
                <h4>До встречи!</h4>
                <h3>Азиз Эльмира</h3>
            </div>
    </div>
  )
}
