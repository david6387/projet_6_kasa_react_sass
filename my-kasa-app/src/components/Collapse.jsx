import React, { useState } from "react";

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  const collapseSwitch = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="collapse">
      <button>
        <span>{title}</span>
        <img
          src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/arrow.png"
          alt=""
          className={open ? "rotate" : ""}
          onClick={collapseSwitch}
        />
      </button>
      {open && <p>{description}</p>}
    </div>
  );
}
