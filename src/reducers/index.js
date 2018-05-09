import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import drinksReducer from './drinksReducer';
import currentDrinkReducer from './currentDrinkReducer';


const rootReducer = combineReducers({
  test: exampleReducer,
  drinks: drinksReducer,
  currentDrink: currentDrinkReducer,
});

export default rootReducer;
