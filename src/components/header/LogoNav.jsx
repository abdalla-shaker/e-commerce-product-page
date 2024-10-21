import { useState } from "react";

import NavLinks from "./NavLinks.jsx";
import BurgerIcon from "./BurgerIcon.jsx";

import logo from "../../assets/images/logo.svg";

export default function LogoNav() {
  const [navIsActive, setNavIsActive] = useState(false);

  const navClickHandler = () => {
    setNavIsActive((prevState) => !prevState);
  };

  return (
    <div className="logo__nav__cont flex items-center">
      <BurgerIcon isActive={navIsActive} clickHandler={navClickHandler} />
      <div className="logo-cont">
        <img src={logo} alt="logo" />
      </div>
      <nav className={`nav-cont ${navIsActive ? "active" : ""}`} id="nav">
        <NavLinks isActive={navIsActive} />
      </nav>
    </div>
  );
}
