import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png"

export default function Header() {
  return (
    <div className="header">
      <picture>
        <img
          src={Logo}
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
