import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const { active, disabled, children, src, ...rest } = props;

  return (
    <div {...rest} disabled={disabled} active={active} className={classes.menuItem}>
      <div>
        <img src={src} />
        <span>
          {props.children}
        </span>
        
      </div>
      
      <input type="checkbox" />
    </div>
  );
};

export default MenuItem;