import React from "react";
import s from "./Error404.module.css"
import { NavLink } from "react-router-dom";
import {PATH} from "../Routes";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import image404 from "../assets/404.png"
function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.image}><img src={image404}
                                          alt="cat"/></div>
            <div className={s.errorText}>Oops, This page does not exist</div>
         <SuperButton green >  <NavLink to={PATH.PRE_JUNIOR} className={s.back}>go to homepage</NavLink></SuperButton>
        </div>
    );
}

export default Error404;

