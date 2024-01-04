import React from 'react'
import { navLinks } from '../constants'

const NavBarList = ({ active, classes, setActive, setToggle }) =>{
    return (
        <ul className={classes}>
          {
            navLinks.map((link)=>(
              <li className={`
                    font-bold
                    ${active == link.title ?
                    "text-white" :
                    "text-secondary"
                    }
                    hover:text-white text-[18px]
                    font-medium cursor-pointer
                `}
                onClick={() =>{
                    setToggle(false)
                    setActive(link.title)
                }}

              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
    )
}

export default NavBarList