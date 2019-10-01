import React from 'react';

import themes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
    <ul className={themes.NavigationItems}>
       <NavigationItem link="/" active>Burger Builder</NavigationItem>
       <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;