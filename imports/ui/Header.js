import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { withTracker } from 'meteor/react-meteor-data';
import {MainList} from '../api/collection.js'
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Header extends Component {
  constructor(props) {
    super(props);
    this.toastMenu = this.toastMenu.bind(this);
    this.goHome = this.goHome.bind(this);
    this.state = {isMenuClick:false};
  }

 toastMenu() {
    this.setState(prevState => ({
      isMenuClick: !prevState.isMenuClick
    }));
    if (this.state.isMenuClick) {
        //ReactDOM.findDOMNode(this).classList.remove(styles.ready);
    }
 }
 
  goHome() {
     FlowRouter.go('mainPage.show');
  }
  
  jump(item, e) {
    this.toastMenu();
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  render() {
    const listItems = this.props.mainList.map((itemList) =>
        <li key={itemList._id}><a onClick={this.jump.bind(this, itemList.item)}>{itemList.item}</a></li>
    );
    let temp = null;
    if (this.state.isMenuClick)
        temp = (
            <div className="bgcolor">
                <div className="toast">
                    <ul>
                        {listItems}
                    </ul> 
                </div>
            </div>    
        );
    return (
        <div>
            <header className="header">
                <div>
                    <a onClick={this.goHome}>Boat Studio</a>
                </div>
                <div className="myButton">
                    <button type = "button"className = {!this.state.isMenuClick ? "readyone" : "cancelone"}   onClick={this.toastMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className = {!this.state.isMenuClick ? "readytwo" : "canceltwo"}   onClick={this.toastMenu}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {temp}
            </ReactCSSTransitionGroup>
        </div>
    );
  }
}

export default withTracker(() => {

  return {
    mainList:MainList.find().fetch(),
  };
})(Header);


