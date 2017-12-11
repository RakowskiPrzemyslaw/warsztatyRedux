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
      currentDrink: {},
    };
  }

  componentWillMount() {
    this.getDrinks('Vodka');
  }

  getDrinks = (query) => {
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
      .then((data) => {
        const { drinks } = data.data;
        this.setState({ drinks }, () => {
          this.getCurrentDrink(drinks[0].idDrink);
        });
      });
  }

  getCurrentDrink = (id) => {
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        const currentDrink = data.data.drinks[0];
        this.setState({ currentDrink });
      });
  }

  render() {
    return (
      <div>
        <Searchbar getDrinks={this.getDrinks} />
        <div className="wrapper">
          <DrinkDetails drink={this.state.currentDrink} />
          <DrinksList
            drinks={this.state.drinks}
            getCurrentDrink={this.getCurrentDrink}
          />
        </div>
      </div>
    );
  }
}

export default App;
