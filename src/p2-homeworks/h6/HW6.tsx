import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {

       //  setValue("");
        setValue(restoreState<string>("editable-span-value", value))
    };

    return (
        <div>
            <hr/>
            homeworks 6
<div className={s.column}>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <SuperButton green onClick={save}>save</SuperButton>
            <SuperButton green onClick={restore}>restore</SuperButton>
</div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    );
}

export default HW6;
