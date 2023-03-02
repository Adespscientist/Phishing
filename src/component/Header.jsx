import React from 'react'
import logo from '../assets/images/nexa-logo.png'
import HeaderButton from './Button'
function Header() {
  return (
    <div className="header hidden p-3 m-4  justify-center md:flex">
        <div className="flex-[.9]">
            <img src={logo} alt="Mainlogo" style={{width:150, height:45}}/>
            </div>
        <div className="header__Button">
            <HeaderButton title="Get Started"/>
        </div>
    </div>
  )
}

export default Header