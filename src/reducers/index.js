import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  test: exampleReducer,
});

export default rootReducer;
