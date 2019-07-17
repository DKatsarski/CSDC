import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    animals: [
      { name: 'Max', age: 28 },
      { name: 'ivan', age: 32 },
      { name: 'Stephi', age: 52 },
    ]
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

  render() {
    return (
      <div className="App">
        <h1>hm...  its here</h1>
        <p>does this work</p>
        <button onClick={this.switchNameHandler.bind(this, "GOSHKO")}>Switch name</button>
        <Person 
        name={this.state.animals[0].name} 
        age={this.state.animals[0].age} />
        <Person
         name={this.state.animals[1].name} 
         age={this.state.animals[1].age}
         click={this.switchNameHandler}>SDFSDFSDF</Person>
        <Person
         name={this.state.animals[2].name} 
         age={this.state.animals[2].age} />

      </div>
    );
  }
}

export default App;
