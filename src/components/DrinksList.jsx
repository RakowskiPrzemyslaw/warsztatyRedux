import React, { Component } from 'react';

class DrinksList extends Component {
  renderDrink(drink, index) {
    if (index < 15) {
      return <li key={index} className="list-group-item drink-item">{drink.strDrink}</li>;
    }
    return null;
  }

  render() {
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

export default DrinksList;
