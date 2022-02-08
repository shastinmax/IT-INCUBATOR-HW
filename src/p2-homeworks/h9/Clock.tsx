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