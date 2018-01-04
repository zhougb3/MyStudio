import React from 'react';
import { Metor, Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Gallery from '../imports/ui/Gallery.js';
import People from '../imports/ui/People.js';
import App from '../imports/ui/App.js';
import Layout from '../imports/ui/Layout.js'
import '../imports/routes/route.js'

Meteor.startup(() => {
  render(<Layout />, document.getElementById('react-root'));
});
