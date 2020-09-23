import React from "react";
import classes from "./MenuButton.module.css";
import { Link } from "react-router-dom";

const MenuButton = (props) => {
  // another way of writing props.something by deconstruction
  const { setShowHome } = props;

  const changeHomeStateHandler = () => {
    // changing the state to FLASE = not displayed on the app
    setShowHome(false);
  };

  return (
    <Link
      className={classes.menuButtonStyling}
      to={props.to}
      // where the prop change is triggerd ONCLICK
      onClick={changeHomeStateHandler}
    >
      {props.buttonName}
    </Link>
  );
};

export default MenuButton;
