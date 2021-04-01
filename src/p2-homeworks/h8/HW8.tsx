import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css"

export type UsersType ={
    _id: number,
    name: string,
    age: number
}

const initialPeople:Array<UsersType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <ul >
                <li className={s.peopleList}> <span className={s.name}>{p.name}</span><span className={s.age}>{p.age}</span></li>
            </ul>

        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: "18"}))

    return (
        <div>
            <hr/>
            homeworks 8

        <div className={s.finalPeople}>

            {finalPeople}
        </div>
            <div className={s.sortButton}>
            <div><SuperButton green onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton green onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton green onClick={checkAge}>check age > 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    );
}

export default HW8;
