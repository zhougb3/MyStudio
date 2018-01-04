import { Meteor } from 'meteor/meteor';
import '../imports/api/collection.js';

import {Motto} from '../imports/api/collection.js';
import {MainList} from '../imports/api/collection.js';
import {Peoples} from '../imports/api/collection.js';
import {Apps} from '../imports/api/collection.js';

Meteor.publish('mottos', function() {
    return Motto.find();
});

Meteor.publish('mainList', function() {
    return MainList.find();
});

Meteor.publish('peoples', function() {
    return Peoples.find();
});

Meteor.publish('apps', function() {
    return Apps.find();
});