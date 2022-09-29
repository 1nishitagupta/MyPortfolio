import React , {useState} from 'react'

function Hamburger({isActive} , props) {
  return (
    <div className={isActive ? 'ham-dropdown' : 'claassss'}>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
    </ul>
  </div>
  )
}

export default Hamburger