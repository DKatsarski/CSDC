import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';


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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
              persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />

        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }



    return (
      <StyleRoot>
        <div className="App">
          <h1>hm...  its here</h1>
          <p className={classes.join(' ')}>does this work</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch name</button>

          {persons}

        </div>
      </StyleRoot>
    );

  }
}

export default Radium(App);
