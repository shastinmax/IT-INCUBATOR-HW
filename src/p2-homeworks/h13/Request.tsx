import React, {ChangeEvent, useState} from 'react';
import {RequestApi} from "./RequestApi";

const Request = () => {
    const [value, setValue] = useState<boolean>(true)
    const [text, setText] = useState<string>('')
    const onClickHandler = () => {
        RequestApi.createBody(value)
            .then(resolve => {
                setValue(resolve.data.yourBody.success)
                setText(resolve.data.info)
            })
            .catch(err => setText(err.response.data.info)
            )
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (
        <div>
            <button onClick={onClickHandler}>Click</button>
            <input onChange={onChangeHandler} checked={value} type="checkbox"/>
            <h6>{text}</h6>
        </div>
    )
}
export default Request;