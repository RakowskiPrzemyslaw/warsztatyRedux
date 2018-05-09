import { GET_CURRENT_DRINK } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_DRINK:
      console.log(action.payload.data.drinks[0]);
      return action.payload.data.drinks[0];
    default:
      return state;
  }
}
