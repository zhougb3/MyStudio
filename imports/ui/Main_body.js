import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Motto} from '../api/collection.js'
import {MainList} from '../api/collection.js'
import { withTracker } from 'meteor/react-meteor-data';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class MainBody extends Component {
  
  constructor(props) {
    super(props);
    this.state = {hover:false};
  }
  
  jump(item, e) {
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  handleMouseEnter() {
    this.setState({hover:true});
  }
  
  handleMouseLeave() {
    this.setState({hover:false});
  }
  
  render() {
    const listItems = this.props.mainList.map((itemList) =>
        <li key = {itemList._id}><a onClick={this.jump.bind(this, itemList.item)}>{itemList.item}</a></li>
    );
    return (
        <div>
          <video className="video-backgroud" preload="auto" loop="" autoplay="true" muted="" id="bg_video"  loop="loop" poster="stellaragency.com/themes/gostellar/images/stellar-video-background-poster.png">
            <source src="video/bgvideo.mp4" type="video/mp4"/>
          </video>
          <div className="container" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
            <div className = "mottos">
                {this.props.motto[0] && this.props.motto[0].text}
            </div>
            <ReactCSSTransitionGroup
              transitionName="item"
              transitionAppear={false}
              transitionAppearTimeout={1500}
              transitionEnterTimeout={800}
              transitionLeaveTimeout={400}
              transitionEnter={true}
              transitionLeave={true}>
              {this.state.hover && 
                <ul>
                {listItems}
                </ul>
              }
            </ReactCSSTransitionGroup>
          </div>
        </div>
    );
  }
}

export default withTracker(() => {

  return {
    motto: Motto.find().fetch(),
    mainList:MainList.find().fetch(),
  };
})(MainBody);

