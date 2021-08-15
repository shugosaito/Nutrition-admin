import React from "react";
import "./HeaderNav.css";

function HeaderNav() {
  return <nav className="header__nav">
    <ul className="header__list">
      <li className="header__item">Meal Admin</li>
      <li className="header__item">Workout Admin</li>
      <li className="header__item">Connect</li>
    </ul>
  </nav>;
}

export default HeaderNav;
