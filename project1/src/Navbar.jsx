import React from 'react'
import './App.css'
import logo from './assets/Nike-Logo-Transparent-Background-1.png'

function Navbar() {
  return (
    <div>
      <nav >
        <div className="logo">
        <img src={logo} alt="image" width={'100px'}/>

        </div>
        <div className="links" >
        <a href="#">MENU</a>
        <a href="#">Location</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        </div>
        <div className="login">
          <button className='btn' style={{ }}>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar