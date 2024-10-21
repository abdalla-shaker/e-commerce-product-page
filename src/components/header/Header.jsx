import { useState } from "react";

import LogoNav from "./LogoNav.jsx";
import CartProfileImage from "./CartProfileImage.jsx";

import "./header.css";

export default function Header() {
  const [activatingCart, setActivatingCart] = useState(false);

  const cartClickHandler = () => {
    setActivatingCart((prevState) => !prevState);
  };

  return (
    <header className="header" id="header">
      <div className="header-cont container flex justify-between">
        <LogoNav />
        <CartProfileImage
          onClickHandler={cartClickHandler}
          isActive={activatingCart}
        />
      </div>
    </header>
  );
}
