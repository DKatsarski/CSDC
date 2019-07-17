import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'ivan', age: 32 },
      { name: 'Stephi', age: 52 },
    ],
    otherState: 'wtf',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "asd", age: 28 },
        { name: event.target.value, age: 32 },
        { name: 'AAAA', age: 52 }
      ]
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
      
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hm...  its here</h1>
        <p>does this work</p>
        <button onClick={this.togglePersonsHandler}>Switch name</button>

        {persons}

      </div>
    );
  }
}

export default App;
