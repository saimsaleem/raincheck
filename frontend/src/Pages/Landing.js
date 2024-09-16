import React, { useState } from 'react';
import './Landing.css'
import Login from '../Components/Login'

export const Landing = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
      };

  return (
    <div className="Home">
    <div className="content">
      <header className={`Home-header ${isClicked ? 'Home-animate' : ''}`}>
        <img src="Logo.png" className="Home-logo" alt="logo" />
        <p>Welcome! Make your Plans Perfect.</p>
        <button className="get-started-btn" onClick={handleClick}>
          Get Started
        </button>
      </header>
      </div>
      <div className={`login-signup-panel ${isClicked ? 'login-signup-panel-show' : ''}`}>
        <div className="login-comp"><Login/></div>
      </div>
    </div>
  )
}
