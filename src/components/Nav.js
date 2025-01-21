import Logo from "../assets/Logo.svg";
import MenuIcon from "../assets/HamburgerIcon.svg";
import "./Nav.css";
import Basket from "../assets/Basket .svg";
import { useState } from "react";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="drop-down">
          <button className="menu" onClick={() => setOpen(!open)}>
            <img src={MenuIcon} alt="Menu hidden" />
          </button>
          <NavLinks
            className={`dropdown-content links ${open ? "open" : ""}`}
          />
        </div>
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
        <button className="menu">
          <img src={Basket} alt="Menu hidden" />
        </button>
        <NavLinks className="links hidden" />
      </nav>
    </header>
  );
};
export default Nav;
