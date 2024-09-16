import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="content">
        <div className="image">
            <div className="logo">
                <img src="Logo.png" alt=""/>
                <h2 className='heading'>RAINCHECK</h2>
            </div>
        </div>
        <div className="links">
            <div className="link">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Account</a></li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
