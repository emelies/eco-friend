import React from "react";
import classes from "./Recipes.module.css";
import Header from "../../components/Header/Header";
import InfoBox from "../../components/InfoBox/InfoBox";

function Recipes() {
  return (
    <div className={classes.theClass}>
      <Header header="RECIPES" subheader="easy DIY" />
      <InfoBox />
    </div>
  );
}

export default Recipes;
