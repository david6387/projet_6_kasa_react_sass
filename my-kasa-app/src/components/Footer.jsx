import React from "react";
import LogoWhite from "../images/logo.white.png"

export default function Footer() {
  return (
    <div className="footer">
      <picture>
        <img
          src={LogoWhite}
          alt="Logo de Kasa"
        ></img>
      </picture>
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
