import React , {useState , useEffect} from "react";

function Navbar() {
  const [scroll,setScrollY] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);




  return (
    <nav className={`${
      scrollY > 100 ? "navscroll" : "nav"
    } `}>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img className={`${ scrollY > 100 ? "logoblack" : "logowhite"} `} src="images/logo.png" alt="logo" />
          </div>
          <div className="menu">
            <div className="dropdown">
              <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Services</li>
                <li>Portfolio</li>
              </ul>
            </div>
            <div className="contact">
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
