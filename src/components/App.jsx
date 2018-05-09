import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Searchbar from './Searchbar';
import DrinksList from './DrinksList';
import DrinkDetails from './DrinkDetails';


class App extends Component {
  state = {
    drinks: [],
    currentDrink: {},
  };

  componentWillMount() {
    this.getDrinks('Vodka');
  }

  getDrinks = (query) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
      .then((data) => {
        console.log(data);
        const { drinks } = data.data;
        this.setState({ drinks }, () => {
          if (drinks) {
            this.getCurrentDrink(drinks[0].idDrink);
          }
        });
      });
  };

  getCurrentDrink = (id) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        const currentDrink = data.data.drinks[0];
        this.setState({ currentDrink });
      });
  };

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


function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

export default connect(mapStateToProps)(App);
