import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Lets check if {props.name} is {props.age} out with a {Math.floor(Math.random() * 30)} rnd value!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
};


 
export default person;