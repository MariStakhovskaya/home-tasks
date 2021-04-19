import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    valueRange?: number | number[]

   /* min: number
    max: number
    step: number*/

    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, valueRange,
       /* min, max, step*/
    }
) => {

    const marks = [
        {
            value: 0.,
            label: '0',
        },

        {
            value: 100,
            label: '100',
        },
    ];

    const onChangeCallback = (event: ChangeEvent<{}>, value:  any ) => {

        onChangeRange && onChangeRange(value);
    }
    // сделать самому, можно подключать библиотеки



    return (
        <>
            <h4>DoubleRange</h4>
            <Slider
                value={valueRange}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                marks={marks}

            />
        </>
    );
}

export default SuperDoubleRange;
