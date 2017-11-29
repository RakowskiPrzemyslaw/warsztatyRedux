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
      currentDrinkIndex: 0,
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
        this.setState({ drinks, currentDrinkIndex: 0 }, () => {
          this.getCurrentDrink();
        });
      });
  }

  getCurrentDrink = () => {
    const id = this.state.drinks[this.state.currentDrinkIndex].idDrink;
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        const currentDrink = data.data.drinks[0];
        this.setState({ currentDrink });
      });
  }

  changeCurrentDrinkIndex = (currentDrinkIndex) => {
    this.setState({ currentDrinkIndex }, () => {
      this.getCurrentDrink();
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
            changeCurrentDrinkIndex={this.changeCurrentDrinkIndex}
          />
        </div>
      </div>
    );
  }
}

export default App;
