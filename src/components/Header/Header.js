import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.header}>
      <h1>{props.header}</h1>
      <h3>{props.subheader}</h3>
    </div>
  );
}

export default Header;
