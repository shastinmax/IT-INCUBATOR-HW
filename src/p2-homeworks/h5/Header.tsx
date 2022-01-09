import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.headerLink} to={'/pre-junior'}>{'pre-junior'}</NavLink>
            <NavLink className={s.headerLink} to={'/junior'}>{'junior'}</NavLink>
            <NavLink className={s.headerLink } to={'/junior-plus'}>{'junior-plus'}</NavLink>
            <div className={s.box}></div>
        </div>
    )
}

export default Header
