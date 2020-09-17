import React, {useState} from "react";
import "./Menu.css";

const Menu = () => {
  const [animation, setAnimation] = useState(false);
  
  function toggleButton() {
    setAnimation(!animation);
        }
      
  return (
     <div
     className={
      !animation
        ? "menu-component reverse-animation"
        : " menu-component is-animated"
    }
    onClick={() => toggleButton()}
    >
      </div>
  );
};
  
export default Menu;


