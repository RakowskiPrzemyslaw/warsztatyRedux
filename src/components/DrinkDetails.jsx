import React, { Component } from 'react';
import _ from 'lodash';


class DrinkDetails extends Component {
  renderIngredient = (index) => {
    const ingredientMeasure = this.props.drink[`strMeasure${index + 1}`];
    const ingredientName = this.props.drink[`strIngredient${index + 1}`];
    if (ingredientName) {
      return <li key={index} className="list-group-item">{`${ingredientMeasure} ${ingredientName}`}</li>;
    }
    return null;
  }

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
            {_.times(15, this.renderIngredient)}
          </ul>
        </div>
      </div>
    );
  }
}

export default DrinkDetails;
