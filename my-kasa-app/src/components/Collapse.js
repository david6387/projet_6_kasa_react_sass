import React, { useEffect, useState } from "react";

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  const collapseSwitch = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch("./data/values.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValues(data);
      });
  }, []);

  return (
    <div className="collapse">
      <button>
        <span>{title}</span>
        <img src="" alt="" onClick={collapseSwitch} />
      </button>
      {open && <div>{description}</div>}
    </div>
  );
}
