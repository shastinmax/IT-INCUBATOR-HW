import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserPropsType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserPropsType> // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        e.currentTarget.value.length>0?setName(e.currentTarget.value):setError('Шляпа')
         // need to fix
    }
    const addUser = () => {
        if(name){
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
        }

        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
