import React, { Component } from 'react';
import themes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {  
        
    console.log(themes);
         let ingredient = null;

        switch(this.props.type) {
            
            case('bread-bottom'):
             ingredient = <div className={themes.BreadBottom}></div>;
             break;
            
             case('bread-top'):
             ingredient = <div className={themes.BreadTop}><div className={themes.Seeds1}></div><div className={themes.Seeds2}></div></div>;
             break;
            
             case('meat'):
             ingredient = <div className={themes.Meat}></div>;
             break;
            
             case('cheese'):
             ingredient=<div className={themes.Cheese}></div>;
             break; 
            
             case('salad'):
             ingredient=<div className={themes.Salad}></div>;
             break;
            
             case('bacon'):
             ingredient=<div className={themes.Bacon}></div>;
             break;
            
             default:
                 ingredient=null;
        }
        return ingredient;
     }  
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default  BurgerIngredient;