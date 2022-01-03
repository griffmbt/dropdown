import React, { useState } from "react";
import classes from "./Dropdown.module.css";

function Dropdown(props) {
  const [isOpen, setOpen] = useState(false);
  const { children, label } = props;

  const handleOpen = () => setOpen(true);

  return (
    <div className={classes.container}>
      <button onClick={handleOpen} className={classes.searchButton}>{label}</button>
      {isOpen && (<div className={classes.menu}>
          {children}
      </div>)}
    </div>
  );
}

export default Dropdown;
