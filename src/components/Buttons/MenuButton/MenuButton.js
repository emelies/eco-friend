import React from "react";
import classes from "./MenuButton.module.css";
import { Link } from "react-router-dom";

const MenuButton = (props) => {
  const { setShowHome } = props;

  const changeHomeStateHandler = () => {
    setShowHome(false);
  };

  return (
    <Link
      className={classes.menuButtonStyling}
      to={props.to}
      onClick={changeHomeStateHandler}
    >
      {props.buttonName}
    </Link>
  );
};

export default MenuButton;
