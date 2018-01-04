import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Apps } from '../api/collection.js';

import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 0};
    }

    renderInfo() {
        const temp = (
            <div>
                    <div className="info-title">{this.props.app[0].info[this.state.currentIndex].title}</div>
                    <div className="app-info-line"/>
                    <div className="info-content">{this.props.app[0].info[this.state.currentIndex].content}</div>
            </div>
        )
        return (
            <ReactCSSTransitionGroup
            transitionName="appintro"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={10}>
                {this.state.currentIndex == 1 && temp}
                {this.state.currentIndex == 2 && temp}
                {this.state.currentIndex == 0 && temp}                
            </ReactCSSTransitionGroup>
        );
    }

    render() {
        console.log(this.state.currentIndex);
        if (this.props.app[0]) {
            var background_image = {
                backgroundImage: 'url(' + this.props.app[0].cover + ')'
            };
            return ( 
                <div className="app-container">
                    <div className="app-title-cover" style={background_image}>
                        <div className="app-cover-glass">
                            <div className="welcom">- Welcom to visit our app -</div>
                            <div className="app-slogan">{this.props.app[0].slogan}</div>
                            <div className="line"></div>
                            <div className="brief-intro">{this.props.app[0].brief}</div>
                        </div>
                    </div>

                    <button className="go-back">GO BACK</button>

                    <div className="app-demo">
                        <div className="app-info">{this.renderInfo()}</div>
                        <ImageGallery items={this.props.app[0].captures} 
                            showBullets={true} 
                            showThumbnails={false} 
                            showFullscreenButton={false} 
                            showNav={false} 
                            showPlayButton={false}
                            onSlide={(currentIndex)=>this.setState({currentIndex})}/>
                        <div className="overflow-image-cover overflow-image-cover-1" />
                        <div className="overflow-image-cover overflow-image-cover-2" />
                        <img id="iPhone-frame" src="image/iPhoneFrame.png" />
                    </div>
                </div>
            );
        }
        else return null;
    }
}

export default withTracker(() => {
    Meteor.subscribe('apps');
    return {
        app: Apps.find({name: "勤工善学"}).fetch(),
    };
})(App);
