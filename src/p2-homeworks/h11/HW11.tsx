import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [values, setValues] =React.useState<number[]>([0, 100])
    // const [value2, setValue2] = useState(100)
    const onChangeRange=(newValue:number)=>{
        setValues([newValue,100])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{`${values[0]}`}</span>
                <SuperRange onChangeRange={onChangeRange} value={values[0]}
                    // сделать так чтоб value1 изменялось
                />
                <span>{`${values[1]}`}</span>
            </div>

            <div>
                <span>{`${values[0]}`}</span>
                <SuperRange onChangeRange={onChangeRange} value={values[0]}
                    // сделать так чтоб value1 изменялось
                />
                <span>{`${values[1]}`}</span>
            </div>

            {/*<div>*/}
            {/*    <span>{values}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        // сделать так чтоб value1 и value2 изменялось*/}
            {/*    />*/}
            {/*    /!*<span>{value2}</span>*!/*/}
            {/*</div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
