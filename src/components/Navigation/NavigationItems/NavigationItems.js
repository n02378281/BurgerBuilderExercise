import React from 'react';

import themes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
    <ul className={themes.NavigationItems}>
       <NavigationItem link="/" exact>Burger Builder</NavigationItem>
       <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;