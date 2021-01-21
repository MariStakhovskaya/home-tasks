import React from "react";
import s from './Message.module.css'

type messageType = {
    name: string
    message: string
    time: string
    avatar: string
}

const Message = (props: messageType) => {
    return (
        <div className={s.posts}>

            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <p className={s.messageBlock}>

                <p>{props.name}</p>
                <p> {props.message}</p>
                <p> {props.time}</p>

            </p>
        </div>
    );
}

export default Message;
