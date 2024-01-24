import React, { useState } from 'react'
import './Header.css'
import '../../Responsive.css'

const Header = () => {
    const [menu, setMenu]=useState(false);
  return (
    <>
    <div className='container-header'>
       <div className="row">
        <div className="logo">
            <h3>digi<span>alpha</span></h3>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Testimonial</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
        <div className="login-btns">
            <button>Login</button>
            <button>Sign up</button>
        </div>

        <div className={menu}>
            =
        </div>
       </div>
    </div>
    </>
  )
}

export default Header