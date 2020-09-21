import React, { useState } from "react";
import MenuButton from "../../components/Buttons/MenuButton/MenuButton";
import classes from "./Menu.module.css";

const Menu = (props) => {
  // Menu going up an down
  const [animation, setAnimation] = useState(false);
  function toggleButton() {
    setAnimation(!animation);
  }
  const reverseAnimation = classes.reverseAnimation;
  const isAnimated = classes.isAnimated;

  return (
    <div
      className={!animation ? reverseAnimation : isAnimated}
      onClick={() => toggleButton()}
    >
      {/* MENU BUTTONS */}
      {/* set show home (how we change the state, passing to the place clicked, the BUTTON) */}
      <MenuButton
        buttonName="Recipes"
        to="/Recipes"
        setShowHome={props.setShowHome}
      />
      <MenuButton
        buttonName="Swap it"
        to="/SwapIt"
        setShowHome={props.setShowHome}
      />
      <MenuButton
        buttonName="Challenge"
        to="/Challenge"
        setShowHome={props.setShowHome}
      />
    </div>
  );
};

export default Menu;
