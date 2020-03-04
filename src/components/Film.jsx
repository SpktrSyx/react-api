import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';

const Film = ({ title, director, edited, producer, release_date }) =>
<Card>
  <Card.Header as="h3">{title}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Film</Card.Subtitle>
    </Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>Director : {director}</ListGroup.Item>
    <ListGroup.Item>Producer : {producer}</ListGroup.Item>
    <ListGroup.Item>Release date : {release_date}</ListGroup.Item>
   </ListGroup> 
  <Card.Footer>
    <small className="text-muted">
      Last update {new Date(edited).toDateString() }
    </small>
  </Card.Footer>
</Card>

export default Film;