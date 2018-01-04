import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PeopleCard = (props) => (
  <Card>
    <CardMedia>
      <img src={props.people.icon} alt="" />
    </CardMedia>
    <CardTitle title={props.people.name} subtitle={"Age:" + props.people.age} />
    <CardText>{props.people.group}</CardText>
  </Card>
);

export default PeopleCard;