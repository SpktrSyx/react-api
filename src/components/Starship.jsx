import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';
import LinkContainer from '../containers/LinkContainer';

const Starship = ({ name, crew, consumables, manufacturer, edited, films }) =>
<Card>
  <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Starships</Card.Subtitle>
    </Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>Crew : {crew}</ListGroup.Item>
    <ListGroup.Item>Consumables : {consumables}</ListGroup.Item>
    <ListGroup.Item>Manufacturer : {manufacturer}</ListGroup.Item>
    <ListGroup.Item>Films : <LinkContainer url={films} />
    {/* a faire */}
    </ListGroup.Item>
  </ListGroup>
  <Card.Footer>
    <small className="text-muted">
      Last update {new Date(edited).toDateString() }
    </small>
  </Card.Footer>
</Card>

export default Starship;