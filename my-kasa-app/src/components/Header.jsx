import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <picture>
        <img
          src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/logo.png"
          alt="Logo de Kasa"
        ></img>
      </picture>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
