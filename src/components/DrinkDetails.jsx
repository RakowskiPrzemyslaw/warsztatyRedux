import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getCurrentDrink } from "../actions";

class DrinkDetails extends Component {

  renderIngredient = (index) => {
    const ingredientMeasure = this.props.currentDrink[`strMeasure${index + 1}`];
    const ingredientName = this.props.currentDrink[`strIngredient${index + 1}`];
    if (ingredientName) {
      return <li key={index} className="list-group-item">{`${ingredientMeasure} ${ingredientName}`}</li>;
    }
    return null;
  }

  render() {
    console.log(this.props);
    const drink = this.props.currentDrink;

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

function mapStateToProps(state) {
  return {
    currentDrink: state.currentDrink,
  };
};

export default connect(mapStateToProps, { getCurrentDrink })(DrinkDetails);
