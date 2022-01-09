import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='wrapper'>
            // add NavLinks
            <NavLink to={'/pre-junior'}>{'pre-junior'}</NavLink>
            <NavLink to={'/junior'}>{'junior'}</NavLink>
            <NavLink to={'/junior-plus'}>{'junior-plus'}</NavLink>
        </div>
    )
}

export default Header
