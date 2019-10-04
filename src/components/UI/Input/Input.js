import React from 'react';
import classes from '../../UI/Input/Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    
    switch (props.inputtype) {
        case('input'): inputElement=<input className={classes.Input} {...props}/>; break;
        case('textarea'): inputElement= <textarea className={classes.Textarea} {...props}/>; break;
        default: inputElement=<input className={classes.Input} {...props}/>;
    }

    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};
export default input;