import React, { Component } from 'react' ;
import Axios from 'axios';
import Character from '../components/Character';
import Loader from 'react-loader-spinner';
import Planet from '../components/Planet';

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
    console.log("Le composant Container vient juste d'être monté!");
    Axios.get(`https://swapi.co/api/${resource}/${id}`)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  
  render = () => {
    const { data } = this.state;
    const { resource } = this.props.match.params;

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

    const ComponentName = componentsByResource[resource] || 'div';

    return <ComponentName {...data} />;
  }

}