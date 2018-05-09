import { GET_DRINKS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_DRINKS:
      console.log(action.payload);
      return action.payload.data.drinks;
    default:
      return state;
  }
}
