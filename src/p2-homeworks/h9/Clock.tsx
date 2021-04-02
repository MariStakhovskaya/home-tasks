import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId)
        // stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
        // close
    };

    let month1 = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]
  /*  let month = date.toLocaleString('ru', {month: "long"});*/

    const stringTime = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds(); // fix with date
    const stringDate = date.getDate() + ' ' + (month1[date.getMonth()]) + ' ' + date.getFullYear() ; // fix with date

    return (
        <div className={s.container}>
            <div className={s.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.showDate}>
                    {stringDate}
                </div>
            )}
            <div>
                <SuperButton green onClick={start}>start</SuperButton>
                <SuperButton green onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
