import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentDrink } from "../actions";


class DrinksList extends Component {
  renderDrink = (drink, index) => {
    if (index < 15) {
      return (
        <li
          key={index}
          className="list-group-item drink-item"
          onClick={() => { this.props.getCurrentDrink(drink.idDrink); }}
        >
          {drink.strDrink}
        </li>
      );
    }
    return null;
  }

  render() {
    console.log(this.props);

    return (
      <div style={{ width: '35%', marginTop: 30 }}>
        <ul className="list-group" style={{ width: '100%' }}>
        {this.props.drinks
          ? this.props.drinks.map(this.renderDrink)
          : <li className="list-group-item drink-item">No results</li>
        }
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentDrink: state.currentDrink,
    drinks: state.drinks,
  };
}

export default connect(mapStateToProps, { getCurrentDrink })(DrinksList);
