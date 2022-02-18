import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)
    const [showDate, setShowDate] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        setTimerId(id)
        setShow(true)

    }

    const onMouseEnter = () => {
        setShowDate(true)
    }
    const onMouseLeave = () => {
        setShowDate(false)
    }


    const stringTime = new Date().toLocaleTimeString() // fix with date
    const stringDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}` // fix with date


    const bar = () => {
        return false
    }

    const foo = (
        predicate: () => boolean,
        {attempts, timeout}: { attempts: number; timeout: number }
    ) => {
        return new Promise((resolve, reject) => {
            const end = +(new Date()) + timeout
            let time = setInterval(() => {
                let bool = predicate()
                if (bool) {
                    resolve(bool)
                    clearInterval(time)
                }
                if (+(new Date()) > end) {
                    reject('error')
                    clearInterval(time)
                }
            }, timeout / attempts)
        })
    }
    foo(bar, {attempts: 3, timeout: 2000})
        .then(() => console.log('success'))
        .catch((data) => console.log('reject ' + data))

    return (
        <div>

            <div>

                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <div>
                        {show && stringTime}
                        <div>
                            {showDate && stringDate}
                        </div>
                    </div>
                </div>


                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock