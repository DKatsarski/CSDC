import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        
        <div className="Person" style={style}>
            <p onClick={props.click}>Lets check if {props.name} is {props.age} out with a {Math.floor(Math.random() * 30)} rnd value!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    
    )
};



export default Radium(person);