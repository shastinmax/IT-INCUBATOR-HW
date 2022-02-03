import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
            <span>{p.name}</span>
            <span>{p.age}</span>

        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-UP'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-DOWN'}))
    const sortCheck18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-18'}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.innerhw8}>
                <div>{finalPeople}</div>

                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortCheck18}>check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
