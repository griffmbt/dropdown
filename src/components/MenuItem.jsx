import React from "react";
import classes from "./MenuItem.module.css";

function MenuItem(props) {
    const { active, disabled, children, ...rest } = props;

    return (
        <div {...rest} disabled={disabled} active={active}>
            {props.children}
        </div>
    )
}

export default MenuItem;