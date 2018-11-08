import React from "react";
import classes from "./Person.module.css";

const person = props => {
  const { name, age, children, onClick, onChange } = props;
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }
  return (
    <div className={classes.Person}>
      <input type="text" onChange={onChange} />
      <p onClick={onClick}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
