import React ,{ Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Apps } from '../api/collection.js'

class App extends Component {
    render() {
        //<img className="app-icon" src={this.props.app[0] && this.props.app[0].icon}/>
        //<span className="app-description">{this.props.app[0] && this.props.app[0].description}</span>
        return ( 
            <div className="app-container">
                <div className="app-cover">
                    <img className="iPhone-frame" src="image/iPhoneFrame.png"/>
                    <img className="app-capture" src="image/QinGongShanXueCapture.jpg"/>
                    <img className="app-code" src={this.props.app[0] && this.props.app[0].code}/>
                    <h1 className="app-title-text">{this.props.app[0] && this.props.app[0].name}</h1>
                </div>
                <div className="app-info-1">
                    <button className="go-back">GO BACK</button>
                    <div className="info-message info-1">{this.props.app[0] && this.props.app[0].info1}</div>
                    <img className="info-capture info-capture-1" src="image/info-capture-1.jpg"/>
                </div>
                <div className="app-info-2">
                    <div className="info-message info-2">{this.props.app[0] && this.props.app[0].info2}</div>
                    <img className="info-capture info-capture-2" src="image/info-capture-2.jpg"/>
                </div>
                <div className="app-info-3">
                    <div className="info-message info-3">{this.props.app[0] && this.props.app[0].info3}</div>
                    <img className="info-capture info-capture-3" src="image/info-capture-3.jpg"/>
                </div>
            </div>
            
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('apps');
    return {
        app: Apps.find({name: "勤工善学"}).fetch(),
    };
})(App);