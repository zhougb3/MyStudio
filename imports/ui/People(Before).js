import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Peoples } from '../api/collection.js';

class People extends Component {
    renderPeoples() {
        return this.props.peoples.map((people) => {
            return (
                <div key={people._id} className="people-container">
                    <img className="people-icon" src={people.icon}/>
                    <h2 className="people-name">{people.name}</h2>
                    <h3 className="people-gender">{people.gender}</h3>
                    <h3 className="people-age">{people.age}</h3>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="page-container">
                <div className="title-cover">
                    <h1 className="title-text">People</h1>
                </div>
                <div className="people-list">
                    {this.props.peoples && this.renderPeoples()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('peoples');
    return {
        peoples: Peoples.find({}).fetch(),
    };
})(People);