import React from "react";
import classes from "./Cockpit.module.css";
import Aux from "../../hoc/Aux";
const cockpit = props => {
  let style = classes.Button;
  if (props.showPerson) {
    style = [classes.Button, classes.Red].join(" ");
  }
  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <button className={style} onClick={props.toggle}>
        Switch Name
      </button>
      <button onClick={props.login}>Login</button>
    </Aux>
  );
};

export default React.memo(cockpit);
