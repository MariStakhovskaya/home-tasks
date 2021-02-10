import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.headerMenu}>
        <div className={s.container}>


           <NavLink to={PATH.PRE_JUNIOR} className={s.navItem} activeClassName={s.active}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.navItem} activeClassName={s.active}>Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.navItem} activeClassName={s.active}>Junior-Plus</NavLink>
            <p className={s.menuHomeTask}>MENU<br/> home tasks</p>
        </div>
        </div>
    );
}

export default Header;
