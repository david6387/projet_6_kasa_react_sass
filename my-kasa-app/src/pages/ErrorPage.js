import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="error-page">
        <div>404</div>
        <div className="middle">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Retourner sur la page d’accueil
          </NavLink>
        </div>
      </div>
    </>
  );
}
