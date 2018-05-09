import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searchbar from './Searchbar';
import DrinksList from './DrinksList';
import DrinkDetails from './DrinkDetails';

import { getDrinks, getCurrentDrink } from '../actions';


class App extends Component {
  componentWillMount(){
    this.props.getDrinks('Vodka');
    this.props.getCurrentDrink(14029);
  }

  render() {
    return (
      <div>
        <Searchbar />
        <div className="wrapper">
          <DrinkDetails />
          <DrinksList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test,
    currentDrink: state.currentDrink,
  };
}

export default connect(mapStateToProps, { getDrinks, getCurrentDrink })(App);
