import React from 'react'

const HeroNav = () => {
  return (
    <header className="header">
    <nav className="header__nav">
      <div>
        <h1>KR</h1>
      </div>
      <div className="navbar">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
      </div>
      <div className="icon">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div className="nav__menu"> <i className="fa-solid fa-list" ></i> <a href=""></a>
      </div>
    </nav>
    <div className="Header__center">
      <div className="info">
        <h1>Katie Reed</h1>
        <h4>Web Developer & Designer</h4>
        <div><button>CONTACT ME</button></div>
      </div>
    </div>
  </header>
  )
}

export default HeroNav