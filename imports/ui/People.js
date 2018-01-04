import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Peoples } from '../api/collection.js';
import { render } from 'react-dom';
import PeopleCard from './PeopleCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class People extends Component {
    renderCards() {
        return this.props.peoples.map((people) => (
            <div className="people-card">
                <MuiThemeProvider>
                    <PeopleCard people={people}/>
                </MuiThemeProvider>
            </div>
        ));
    }

    render() {
        var background_image = {
            backgroundImage: 'url(image/PeopleTitleCover.jpg)'
        };
        return (
            <div className="peoples-container">
                <div className="people-title-cover" style={background_image}>
                    <div className="people-cover-glass">
                        <div className="welcom">- Welcom to our studio -</div>
                        <div className="people-slogan">团结互助  共创未来</div>
                        <div className="line"></div>
                        <div className="brief-intro">齐集各个方向的专业人才</div>
                    </div>
                </div>
                <div className="people-card-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('peoples');
    return {
        peoples: Peoples.find().fetch(),
    }
})(People);