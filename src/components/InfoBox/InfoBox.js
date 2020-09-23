import React from "react";
import classes from "./InfoBox.module.css";

function InfoBox(props) {
  return (
    <div className={classes.infoBox}>
      <h3>{props.subheader}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default InfoBox;
