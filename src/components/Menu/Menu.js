import React, {useState} from "react";
import "./Menu.css";

const Menu = () => {
  const [animation, setAnimation] = useState(false);
  
  function toggleButton() {
    setAnimation(!animation);
        }
  
  function clickMe(){
    alert('button works');
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
      <div className="buttons">
      <button onClick={clickMe} className="bigButton1">
        recipes
      </button>
    
      <button onClick={clickMe} className="bigButton2">
        swap it
      </button>

      <button onClick={clickMe} className="bigButton3">
        challenge
      </button>
      </div>
     </div>

  );
};
  
export default Menu;


