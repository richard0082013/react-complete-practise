import React from "react";
import "./Person.css";

const person = props => {
  const { name, age, children, onClick, onChange } = props;

  return (
    <div className="Person">
      <input type="text" onChange={onChange} />
      <p onClick={onClick}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
