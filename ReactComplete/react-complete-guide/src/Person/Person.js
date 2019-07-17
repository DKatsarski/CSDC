import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Lets check if {props.name} is {props.age} out with a {Math.floor(Math.random() * 30)} rnd value!</p>
            <p>{props.children}</p>
        </div>
    )
};



export default person;