import React, { Component, Fragment } from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import { LoginContext } from "../../../containers/App";
class person extends Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
  }
  componentDidMount() {
    const { position } = this.props;
    if (position === 0) {
      this.inputElement.current.focus();
    }
  }
  render() {
    const { name, age, children, onClick, onChange } = this.props;
    return (
      <Fragment>
        <LoginContext.Consumer>
          {auth => (auth ? <p>I am authorised!</p> : null)}
        </LoginContext.Consumer>
        <input ref={this.inputElement} type="text" onChange={onChange} />
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
