import React from "react";
import Img from "../../image/headerImg.png"
import Name from "../../image/logo.png"
import Style from "./header.module.css"

const Header = () => {
 return (
  <div>
    <img className={Style.pic} src={Img} alt="" /> 
    <img className={Style.name} src={Name} alt="" />

  </div>
 )
}
export default Header