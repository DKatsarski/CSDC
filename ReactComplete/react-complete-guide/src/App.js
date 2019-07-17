import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    animals: [
      { name: 'Max', age: 28 },
      { name: 'ivan', age: 32 },
      { name: 'Stephi', age: 52 },
    ],
    otherState: 'wtf',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('asdf');
    this.setState({
      animals: [
        { name: newName, age: 28 },
        { name: 'ivan', age: 32 },
        { name: 'AAAA', age: 52 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event) => {
    this.setState({
      animals: [
        { name: "asd", age: 28 },
        { name: event.target.value, age: 32 },
        { name: 'AAAA', age: 52 }
      ]
    })
  }

  render() {
let persons = null;

if  (this.state.showPersons) {
  persons = (
    <div>
    <Person
      name={this.state.animals[0].name}
      age={this.state.animals[0].age} />
    <Person
      name={this.state.animals[1].name}
      age={this.state.animals[1].age}
      click={this.switchNameHandler}
      changed={this.nameChangedHandler}>SDFSDFSDF</Person>
    <Person
      name={this.state.animals[2].name}
      age={this.state.animals[2].age} />
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
