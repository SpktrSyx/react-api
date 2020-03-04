import React, { Component } from 'react' ;
import Axios from 'axios';

export default class Container extends Component  {
  state = {
    data: null,
  }

  componentDidMount = () => {
    console.log("blabla");
    Axios.get('https://swapi.co/api/people/1/')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  render = () => {
    return <div />; 
  }
}