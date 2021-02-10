import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback:  (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ===""? s.error : s.someClass; // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <span>Введите имя </span>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} />
            <span>{error}</span>
            <SuperButton green onClick={addUser} className={s.add}>Добавить user</SuperButton>
            <div className={s.total}>Введено {totalUsers} users</div>
        </div>
    );
}

export default Greeting;
