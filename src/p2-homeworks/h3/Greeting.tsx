import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.active // need to fix with (?:)
    const disabled = error ? true : false
    return (
        <div className={s.someClass}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={disabled} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div><span className={s.errorText}>{error}</span></div>
        </div>
    )
}

export default Greeting
