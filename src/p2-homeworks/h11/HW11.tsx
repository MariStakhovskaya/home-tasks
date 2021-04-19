import React, {ChangeEvent, useCallback, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const handleSliderChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.currentTarget.value);
    };

    const onChangeRange = (value: number[]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange value={value1} onChange={handleSliderChange}/>
                <span>{value1}</span>
            </div>

            <div>

                <SuperDoubleRange  valueRange={[value1, value2]} onChangeRange={onChangeRange}/>
              {/*  <span>{value1}</span>
                <span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
