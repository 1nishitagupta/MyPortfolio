import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { styles } from "../styles";
import NavBarList from "./NavBarList";
import { nishitaLogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex fixed items-center top-0 z-20 
        transition-all duration-300 ease-in-out 
        ${scrolling ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="w-full m-auto h-20 flex items-center justify-between">
        <div className="h-20 flex">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
          >
            <img
              src={nishitaLogo}
              alt="logo"
              style={{ filter: "invert(1)" }}
              className=" h-16 object-contain w-full"
            />
          </Link>
        </div>
        <NavBarList
          active={active}
          classes={"sm:flex hidden flex-row gap-10"}
          setActive={setActive}
          setToggle={setToggle}
        />
        <div className="sm:hidden flex">
          <img
            src={toggle ? close : menu}
            alt={"menu-icon"}
            className="cursor-pointer w-[24px]"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-4 black-gradient z-10 absolute top-16 right-0 m-4 min-w-[100px] rounded-xl`}
          >
            <NavBarList
              active={active}
              classes={"flex flex-col gap-4 list-none"}
              setActive={setActive}
              setToggle={setToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
