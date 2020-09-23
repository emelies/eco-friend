import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Menu from "./containers/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import Recipes from "./containers/Recipes/Recipes";
import SwapIt from "./containers/SwapIt/SwapIt";
import Challenge from "./containers/Challenge/Challenge";
import { useState } from "react";

function App() {
  // setting up the state hook [ACTUAL STATE, WAY OF CHANGING THE STATE]
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="App">
      {showHome ? <Home /> : null}
      <Switch>
        <Route path="/Recipes" exact component={Recipes}></Route>
        <Route path="/SwapIt" exact component={SwapIt}></Route>
        <Route path="/Challenge" exact component={Challenge}></Route>
      </Switch>
      {/* {the hook} passed throught the menu component */}
      <Menu setShowHome={setShowHome} />
    </div>
  );
}

export default App;
