import React, { Component } from 'react';


class DrinkDetails extends Component {
  render() {
    const { drink } = this.props;

    return (
      <div style={{ width: '60%', marginTop: 30 }}>
        <div className="card" style={{ width: '100%' }}>

          <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="card-img-top"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              style={{ minWidth: 300, height: 300, marginRight: 30 }}
            />
            <div>
              <h4 className="card-title">{drink.strDrink}</h4>
              <p className="card-text">{drink.strInstructions}</p>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1 1/2 oz Tequila</li>
            <li className="list-group-item">1/2 oz Triple sec</li>
            <li className="list-group-item">1 os Lime juice</li>
            <li className="list-group-item">Salt</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DrinkDetails;
