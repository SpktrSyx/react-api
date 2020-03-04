import React, { Component } from 'react' ;
import Axios from 'axios';
import Character from '../components/Character';
import Loader from 'react-loader-spinner';
import Planet from '../components/Planet';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const componentsByResource = {
  people: Character,
  planets: Planet,
}

const ListItem = ({ name, url }) => {
  const matches = url.match(/^https:\/\/swapi\.co\/api\/(\w+)\/(\d+)\/$/);
  const [match, resource, id] = matches;
  
  return (
    <ListGroup.Item>
      <Link to={`/${resource}/${id}`}>
        {name}
      </Link>
    </ListGroup.Item>
  );
}


export default class DataContainer extends Component {
  state = {
    data: null,
  }
  
  fetchData = () => {
    const { resource, id } = this.props.match.params;
  
    let url = `https://swapi.co/api/${resource}`;
    if (id) {
      url += `/${id}`;
    }
  
    Axios.get(url)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }
  
  componentDidMount = () => {
    this.fetchData();
  }

  componentDidUpdate = (prevProps) => {
    const { resource, id } = this.props.match.params;

    if (resource !== prevProps.match.params.resource || 
      id !== prevProps.match.params.id) {
        this.setState({ data: null});
        this.fetchData();
    }
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

      if (!id && data.results) {
        return (
          <ListGroup>
            {data.results.map( (item, index) =>
              <ListItem {...item} key={index} />
            )}
          </ListGroup>
        );
      }

    const ComponentName = componentsByResource[resource] || 'div';

    return (
      <div>
        <Link to={`/${resource}`}>
          <Button variant="primary">
            Back to list
          </Button>
        </Link>
        <ComponentName {...data} />
      </div>
    );
  }

}