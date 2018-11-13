import React, { Component, Fragment } from "react";
import classes from "./App.module.css"; //in create-react-app 2.0 the css or scss module will extension with .module.css.
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";

export const LoginContext = React.createContext(false);
class App extends Component {
  constructor(props) {
    console.log("[App.js] in constructor", props);
    super(props);
    this.state = {
      persons: [
        { name: "Richard", age: 26 },
        { name: "Max", age: 29 },
        { name: "Tony", age: 28 }
      ],
      showPerson: false,
      toggleClicked: 0,
      authorizated: false
    };
  }
  componentWillMount() {
    console.log("[App.js] in componentWillMount");
  }
  componentDidMount() {
    console.log("[App.js] in componentDidMount");
  }
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Max", age: 29 },
        { name: "Tony", age: 28 }
      ]
    });
  };
  changeNameHandler = (e, index) => {
    const personIndex = index;
    const person = { ...this.state.persons[personIndex] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const show = this.state.showPerson;
    // this.setState({
    //   showPerson: !show,
    //   toggleClicked: this.state.toggleClicked + 1
    // });
    // above is not a good practise, as we do not garantee this. state is correct, so we change as following
    this.setState((prevState, props) => {
      return {
        showPerson: !show,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };
  deletePersonsHandler = index => {
    // const persons = this.state.persons; is not a good practice, it will mutate the original data
    const persons = [...this.state.persons]; // or const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  loginHandler = () => {
    const isAuth = this.state.authorizated;
    this.setState({ authorizated: !isAuth });
  };
  render() {
    console.log("[App.js] in render");
    const { persons, showPerson } = this.state;
    let renderPersons = null;

    if (showPerson) {
      renderPersons = (
        <Persons
          persons={persons}
          clicked={this.deletePersonsHandler}
          changed={this.changeNameHandler}
        />
      );
    }
    return (
      <Fragment>
        <Cockpit
          showPerson={showPerson}
          login={this.loginHandler}
          toggle={this.togglePersonsHandler}
        />
        <LoginContext.Provider value={this.state.authorizated}>
          {renderPersons}
        </LoginContext.Provider>
      </Fragment>
    );
    // Same as below
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App")
    // );
  }
}

export default withClass(App, classes.App);
