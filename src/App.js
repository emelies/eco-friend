import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Menu from "./containers/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import Recipes from "./containers/Recipes/Recipes";
import SwapIt from "./containers/SwapIt/SwapIt";
import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="App">
      {showHome ? <Home /> : null}
      <Switch>
        <Route path="/Recipes" exact component={Recipes}></Route>
        <Route path="/SwapIt" exact component={SwapIt}></Route>
      </Switch>

      <Menu setShowHome={setShowHome} />
    </div>
  );
}

export default App;
