import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {MainList} from '../api/collection.js'
import { withTracker } from 'meteor/react-meteor-data';

class Memu extends Component {

  jump(item, e) {
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  render() {
    const listItems = this.props.mainList.map((itemList) =>
        <li key = {itemList._id}><a onClick={this.jump.bind(this, itemList.item)}>{itemList.item}</a></li>
    );
    return (
        <div className="bgcolor">
          <div className="toast">
              <ul>
                  {listItems}
              </ul> 
          </div>
        </div>
    );
  }
}

export default withTracker(() => {

  return {
    mainList:MainList.find().fetch(),
  };
})(Memu);

