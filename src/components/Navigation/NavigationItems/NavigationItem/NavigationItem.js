import React from 'react';
import {NavLink} from 'react-router-dom';

import themes from './NavigationItem.module.css';

const navigationItem = (props) =>(
    <li className={themes.NavigationItem}>
        <NavLink to={props.link}
        exact={props.exact}
        activeClassName={themes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;