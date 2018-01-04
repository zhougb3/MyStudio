import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Apps } from '../api/collection.js';

import App from './App.js';

class Gallery extends Component {
    renderApps() {
        return this.props.apps.map((app) => {
            return (
                <div key={app._id} className="app-container">
                
                </div>
            );
        });
    }

    render() {
        return (
            <div className="page-container">
                <div className="title-cover">
                    <h1 className="title-text">Gallery</h1>
                </div>
                <div className="app-list">
                    {this.props.apps && this.renderApps()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('apps');
    return {
        apps: Apps.find({}).fetch(),
    };
})(Gallery);