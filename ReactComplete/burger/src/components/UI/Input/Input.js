import React from 'react';

const input = (props) => {
    switch (props.inputType) {
        case ('input'):
            inputType = <input {...props}/>
            break;
        case ('textarea'):
            inputType = <textarea {...props}/>
            break;
        default: 
        inputType = <input {...props}/>
            break;
    }
    return (
        <div>
            <label>{props.label}</label>
        </div>
    )
};


export default input;