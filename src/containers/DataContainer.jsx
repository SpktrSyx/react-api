import React, { Component } from 'react' ;
import Axios from 'axios';
import Character from '../components/Character';
import Loader from 'react-loader-spinner';
import Planet from '../components/Planet';
import { ListGroup } from 'react-bootstrap';

const componentsByResource = {
  people: Character,
  planets: Planet,
}

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { resource, id } = this.props.match.params;

    let url = `https://swapi.co/api/${resource}`;
    if (id) {
      url += `/${id}`;
    }

    Axios.get(url)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  
  render = () => {
    const { data } = this.state;
    const { resource, id } = this.props.match.params;

      if (!data) {
        return (
          <div className="text-center">
            <Loader
              type="Puff"
              color="#FFCF39"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        );
      }

      if (!id) {
        return (
          <ListGroup>
            {data.results.map(item =>
              <ListGroup.Item>{item.name}</ListGroup.Item>
            )}
          </ListGroup>
        );
      }

    const ComponentName = componentsByResource[resource] || 'div';

    return <ComponentName {...data} />;
  }

}