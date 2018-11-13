import React, { PureComponent } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "../Persons/Person/Person";
import PropTypes from "prop-types";
class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] in constructor");
  }
  componentWillMount() {
    console.log("[Persons.js] in componentWillMount");
  }
  componentDidMount() {
    console.log("[Persons.js] in componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("[update persons.js] in componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[update persons.js] in shouldComponentUpdate",
      nextProps,
      nextState
    );
    return nextProps.persons !== this.props.persons;
  }
  componentWillUpdate(nextProps) {
    console.log("[update persons.js] in componentWillUpdate", nextProps);
  }
  componentDidUpdate() {
    console.log("[update persons.js] in componentDidUpdate", this.props);
  }
  render() {
    console.log("[Persons.js] in render");
    return (
      <ErrorBoundary>
        {this.props.persons.map((p, index) => (
          <Person
            onClick={() => this.props.clicked(index)}
            onChange={e => this.props.changed(e, index)}
            position={index}
            name={p.name}
            age={p.age}
            key={index}
          />
        ))}
      </ErrorBoundary>
    );
  }
}
Persons.propTypes = {
  persons: PropTypes.array
};
export default Persons;
