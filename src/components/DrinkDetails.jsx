import React, { Component } from 'react';


class DrinkDetails extends Component {
  render() {
    return (
      <div style={{ width: '60%', marginTop: 30 }}>
        <div className="card" style={{ width: '100%' }}>

          <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="card-img-top"
              src="http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
              alt="Card cap"
              style={{ minWidth: 300, height: 300, marginRight: 30 }}
            />
            <div>
              <h4 className="card-title">Margarita</h4>
              <p className="card-text">Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</p>
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
