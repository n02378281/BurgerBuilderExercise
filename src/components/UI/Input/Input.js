import React from 'react';
import classes from '../../UI/Input/Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    
    switch (props.elementType) {
        case('input'): inputElement=<input 
        className={classes.Input} 
        {...props.elementConfig} 
        value={props.value}/>; break;
        case('textarea'): inputElement= <textarea 
        className={classes.Textarea} 
        {...props.elementConfig} 
        value={props.value}/>; break;
        case('select'): 
        inputElement= (
        <select 
        className={classes.Textarea} 
        value={props.value}>
          {props.elementConfig.options.map(option=>(
              <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>); break;
        default: inputElement=<input className={classes.Input} {...props.elementConfig} value={props.value}/>;
    }

    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};
export default input;