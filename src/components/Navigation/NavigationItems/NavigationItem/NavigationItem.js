import React from 'react';

import themes from './NavigationItem.module.css';
import { classes } from 'istanbul-lib-coverage';

const navigationItem = (props) =>(
    <li className={themes.NavigationItem}>
        <a href={props.link} className={props.active? classes.active: null}>{props.children}</a>
    </li>
);

export default navigationItem;