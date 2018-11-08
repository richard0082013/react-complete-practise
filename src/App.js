import React, { Component } from "react";
import Person from "./Person/Person";
import classes from "./App.module.css"; //in create-react-app 2.0 the css or scss module will extension with .module.css. 
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { name: "Richard", age: "26" },
      { name: "Max", age: "29" },
      { name: "Tony", age: "28" }
    ],
    showPerson: false
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "26" },
        { name: "Max", age: "29" },
        { name: "Tony", age: "28" }
      ]
    });
  };
  changeNameHandler = (e,index) => {
   const personIndex=index;
   const person = {...this.state.persons[personIndex]}
   person.name = e.target.value;
   const persons = [...this.state.persons];
   persons[index] = person;
   this.setState({
    persons:persons
   })
  };
  togglePersonsHandler = () => {
    const show = this.state.showPerson;
    this.setState({
      showPerson: !show
    });
  };
  deletePersonsHandler = index => {
    // const persons = this.state.persons; is not a good practice, it will mutate the original data
    const persons = [...this.state.persons]; // or const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let style = ''
    const { persons, showPerson } = this.state;
    let renderPersons = null;

    if (showPerson) {
      renderPersons = <div>
      {persons.map((p, index) => (
        <ErrorBoundary><Person
          onClick={() => this.deletePersonsHandler(index)}
          onChange={(e)=>this.changeNameHandler(e,index)}
          name={p.name}
          age={p.age}
          key={index}
        /></ErrorBoundary>
      ))}
    </div>
    style = classes.Red;
    }

    return (
     
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <button className={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {renderPersons}
      </div>
    );
    // Same as below
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App")
    // );
  }
}

export default App;
