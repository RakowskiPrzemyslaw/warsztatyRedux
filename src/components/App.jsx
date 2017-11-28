import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import DrinksList from './DrinksList';
import DrinkDetails from './DrinkDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentWillMount() {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
      .then((data) => {
        const { drinks } = data.data;
        this.setState({ drinks });
      });
  }

  render() {
    return (
      <div>
        <Searchbar />
        <div className="wrapper">
          <DrinkDetails />
          <DrinksList drinks={this.state.drinks} />
        </div>
      </div>
    );
  }
}

export default App;
