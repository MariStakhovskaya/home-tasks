import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themeType} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some', 'yellow'];


function HW12() {

    //const theme = 'some'; // useSelector
   let theme = useSelector<AppStoreType, themeType>(state => state.theme.themes)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: themeType) => {
        dispatch(changeThemeC(theme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
        <SuperRadio  name={"radio"}
                     options={themes}
                     value={theme}
                     onChangeOption={onChangeCallback}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
