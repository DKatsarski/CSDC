import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Johnny', age: 29 },
      { name: 'Peto', age: 45 },
      { name: 'Branko', age: 29 }
    ]
  }

  swtichNameHandler = () => {
    //  console.log('was clicked');
    // this.state.persons[0].name = 'PETTREEEE'

    this.setState({
      persons:
        [
          { name: 'PETKOOOOOO', age: 29 },
          { name: 'Peto', age: 45 },
          { name: 'Branko', age: 229 }
        ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>first react sentance</h1>
        <p>asdfasdfasdfasdf</p>
        <button onClick={this.swtichNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Favorite Movies: Joker</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
