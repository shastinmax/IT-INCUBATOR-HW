import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import image from './../../assets/images/preloader.svg'


function HW10() {
    const load = useSelector<AppStoreType>(state => state.loading.loading)
    const dispatch = useDispatch()

    // useSelector, useDispatch
    // const loading = false


    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {load
                ? (
                    <div>
                        <img style={{width: '40px',height:'40px'}} src={image} alt="preloader"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
