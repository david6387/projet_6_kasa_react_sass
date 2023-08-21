import React, { useState } from "react";
import ArrowCollapse from "../images/arrow.png"

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  const collapseSwitch = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="collapse">
      <button>
        <span>{title}</span>
        <img
          src={ArrowCollapse}
          alt="Ouvrir et fermer menu déroulant"
          className={open ? "rotate" : "rotate-back"}
          onClick={collapseSwitch}
        />
      </button>
      <div className={`content ${open ? "open" : ""}`}>
      {Array.isArray(description) ? (
        <ul>{description.map((element, index) => 
        <li key={index}>{element}</li>)}</ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
    </div>
  );
}
