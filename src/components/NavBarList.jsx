import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const NavBarList = ({ active, classes, setActive, setToggle }) => {
  return (
    <ul className={classes}>
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={`
                    font-bold
                    ${active == link.title ? "text-white" : "text-[#606060]"}
                    hover:text-white text-[18px]
                    font-medium cursor-pointer
                `}
          onClick={() => {
            setToggle(false);
            setActive(link.title);
          }}
        >
          <Link to={`/${link.id}`}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBarList;
