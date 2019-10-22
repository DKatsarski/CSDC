import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    {
      name: 'Johnny', age: 29
    },
    {
      name: 'Peto', age: 45

    },
    {
      name: 'Branko', age: 29

    }
  ]
}


  render() {
    return (
      <div className="App">
        <h1>first react sentance</h1>
        <p>asdfasdfasdfasdf</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Favorite Movies: Joker</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
