import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';

const Character = ({ name, gender, birth_year, edited }) =>
<Card>
  <Card.Header>{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Character</Card.Subtitle>
    </Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>Gender : {gender}</ListGroup.Item>
    <ListGroup.Item>Birth year : {birth_year}</ListGroup.Item>
  </ListGroup>
  <Card.Footer>
    <small className="text-muted">
      Last update {new Date(edited).toDateString() }
    </small>
  </Card.Footer>
</Card>

export default Character;