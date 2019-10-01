import React, {Component} from 'react';

import Aux from '../AAux/AAux';
import themes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout  extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
    }

    sidedrawerToggleHandler = () => {
       this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer}
       });
    }

    render(){
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sidedrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed= {this.sideDrawerClosedHandler}/>
            <main className = {themes.Content}>
                 {this.props.children}
            </main>
         </Aux>
        )
    }
} ;

export default Layout;