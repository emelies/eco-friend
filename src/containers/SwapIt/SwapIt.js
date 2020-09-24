import React from "react";
import Header from "../../components/Header/Header";
import CheckList from "../../components/CheckList/CheckList";
import classes from "./SwapIt.module.css";

function SwapIt() {
  return (
    <div>
      <Header header="SWAP IT" subheader="check-list" />
      <div className={classes.layout}>
        <CheckList />
      </div>
      <br></br>
    </div>
  );
}

export default SwapIt;
