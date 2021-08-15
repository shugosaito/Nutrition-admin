import React from "react";
import "./Header.css";

import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Nutrition Admin</h1>
      <HeaderNav />
    </header>
  );
}

export default Header;
