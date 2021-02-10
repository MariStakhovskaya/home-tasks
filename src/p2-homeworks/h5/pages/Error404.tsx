import React from "react";
import s from "./Error404.module.css"
import { NavLink } from "react-router-dom";
import {PATH} from "../Routes";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.image}><img src="https://lh3.googleusercontent.com/proxy/575l6m2T3MRiy6TD5DzqIEzqIx0f3HcKk6uSFYiXoyKAkdx1zRLUh6_DgfeAGjvQjI7VkVx9ApIiVQc8sFbQWt4Mk0s12jR5ed1-4ABMEMq8uMv6tPw"
                                          alt="cat"/></div>
            <div className={s.errorText}>Oops, This page does not exist</div>
         <SuperButton green >  <NavLink to={PATH.PRE_JUNIOR} className={s.back}>go to homepage</NavLink></SuperButton>
        </div>
    );
}

export default Error404;

