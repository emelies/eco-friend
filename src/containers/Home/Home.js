import React from "react";
import classes from "./Home.module.css";
import placeholder from "../../assets/placeholder.png";

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

  return (
    <div>
      <h1 className={classes.timeOfDayText}>Good {timeOfDay}!</h1>

      <img
        src={placeholder}
        alt="placeholder"
        className={classes.illustration}
      />
    </div>
  );
};

export default Home;
