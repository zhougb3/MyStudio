import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { withTracker } from 'meteor/react-meteor-data';
import {MainList} from '../api/collection.js'
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class MainFooter extends Component {

  render() {
    return (
        <footer>
            <div className = "bottom-footer">
                <div className = "boat">© 2018 BOAT Studio   <br/></div>
                <div className = "baby-page">{this.props.text}</div>
            </div>
        </footer>
    );
  }
}

export default withTracker(() => {

  return {
    mainList:MainList.find().fetch(),
  };
})(MainFooter);


