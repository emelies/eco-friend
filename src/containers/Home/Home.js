import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }
  return <h1 className={classes.timeOfDayText}>Good {timeOfDay}!</h1>;
};

export default Home;
