import React, { Component } from 'react';
import Header from './Header.js' 

export default class Layout extends Component {

  render() {
    return (
        <div>
            <Header />
            {this.props.main}
            {this.props.footer}
        </div>
    );
  }
}

