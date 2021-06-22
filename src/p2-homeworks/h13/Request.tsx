import React, {useState} from "react";

import s from "./HW13.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./api/RequestsAPI";

function Request() {

    let [requestText, setRequestText] = useState<string>('')
    let [checked, setChecked] = useState<boolean>(false)

    const onClickRequest = (checked: boolean) => {
        requestsAPI.requestPost(checked)
            .then(res => {
                setRequestText(res.data.errorText)
            })
             .catch(error => {
            setRequestText(error.response.data.errorText)
             })
    }

    const onChangeChecked = () => {
        setChecked(!checked)
    }


    return (
        <div className={s.container}>
            <SuperButton green onClick={ ()=> {onClickRequest(checked)} }>Request</SuperButton>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={onChangeChecked}>
                {requestText}
            </SuperCheckbox>

        </div>
    );
}

export default Request;
