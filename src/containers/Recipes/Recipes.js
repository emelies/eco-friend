import React from "react";
import classes from "./Recipes.module.css";
import Header from "../../components/Header/Header";
import InfoBox from "../../components/InfoBox/InfoBox";
import svg from "../../assets/plant.svg";

function Recipes() {
  return (
    <div className={classes.layout}>
      <Header header="RECIPES" subheader="easy DIY" />
      <img src={svg} className={classes.svg} alt="plant" />
      <Header header="HYGIENE" subheader="recipes" />

      <InfoBox
        subheader="deodorant"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />
      <InfoBox
        subheader="toothpaste"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />
      <InfoBox
        subheader="body butter"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />

      <img src={svg} className={classes.svg} alt="plant" />
      <Header header="CLEANING" subheader="recipes" />

      <InfoBox
        subheader="all-purpose spray"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />
      <InfoBox
        subheader="all-purpose scour"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />
      <InfoBox
        subheader="toilet bowl cleaner"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  is "
      />
    </div>
  );
}

export default Recipes;
