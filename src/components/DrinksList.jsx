import React, { Component } from 'react';

class DrinksList extends Component {
  render() {
    return (
      <div style={{ width: '35%', marginTop: 30 }}>
        <ul className="list-group" style={{ width: '100%' }}>
          <li className="list-group-item drink-item">3-Mile Long Island Iced Tea</li>
          <li className="list-group-item drink-item">69 Special</li>
          <li className="list-group-item drink-item">Abbey Cocktail</li>
          <li className="list-group-item drink-item">Abbey Martini</li>
          <li className="list-group-item drink-item">Adam & Eve</li>
        </ul>
      </div>
    );
  }
}

export default DrinksList;
