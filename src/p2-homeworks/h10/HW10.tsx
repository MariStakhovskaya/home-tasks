import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from "./img/preloader.gif"
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "./HW10.module.css"

function HW10() {
    // useSelector, useDispatch

    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType, LoadingStateType>(state => state.loading)

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)

        console.log("loading...");
    };

    return (
        <div>
            homeworks 10
            <hr/>


            {/*should work (должно работать)*/}
            <div className={s.container}>
                {loading.isLoading
                    ? (
                        <div className={s.preloader}><img src={preloader}/></div>
                    ) : (
                        <div>
                            <SuperButton green onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default HW10;
