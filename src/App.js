import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

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
    const style = {
      backgroundColor: "green",
      color:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    const { persons, showPerson } = this.state;
    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {showPerson &&(style.backgroundColor='red')&& (
          <div>
            {persons.map((p, index) => (
              <Person
                onClick={() => this.deletePersonsHandler(index)}
                onChange={(e)=>this.changeNameHandler(e,index)}
                name={p.name}
                age={p.age}
                key={index}
              />
            ))}
          </div>
        )}
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
