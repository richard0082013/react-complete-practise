import React, { Component, Fragment } from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
class person extends Component {
  componentDidMount() {
    const { position } = this.props;
    if (position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    const { name, age, children, onClick, onChange } = this.props;
    return (
      <Fragment>
        <input
          ref={input1 => {
            this.inputElement = input1;
          }}
          type="text"
          onChange={onChange}
        />
        <p onClick={onClick}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
      </Fragment>
    );
  }
}
person.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func
};
export default withClass(person, classes.Person);
