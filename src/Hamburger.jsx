import React , {useState} from 'react'

function Hamburger({isActive}) {
  return (
    <div className={isActive ? 'ham-dropdown' : 'claassss'}>
    <ul>
      <li>About</li>
      <li>Skills</li>
      <li>Services</li>
      <li>Portfolio</li>
    </ul>
  </div>
  )
}

export default Hamburger