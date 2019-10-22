import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Johnny', age: 29 },
      { name: 'Peto', age: 45 },
      { name: 'Branko', age: 29 }
    ],
    otherState: 'this is the other state',
    showPersons: false
  }

  swtichNameHandler = (newName) => {
    //  console.log('was clicked');
    // this.state.persons[0].name = 'PETTREEEE'

    this.setState({
      persons:
        [
          { name: newName, age: 29 },
          { name: 'Peto', age: 45 },
          { name: 'Branko', age: 229 }
        ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons:
        [
          { name: 'Axx', age: 29 },
          { name: event.target.value, age: 45 },
          { name: 'Branko', age: 29 }
        ]
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swtichNameHandler.bind(this, '11111111111111')}
          changed={this.nameChangedHandler} >Favorite Movies: Joker</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div> 
    
      );

    }

    return (
      <div className="App">
        <h1>first react sentance</h1>
        <p>asdfasdfasdfasdf</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
          </button>
          {persons}
        
       
    

      </div>
    );
  }
}

export default App;
