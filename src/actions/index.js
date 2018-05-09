import axios from "axios/index";

export const GET_DRINKS = 'GET_DRINKS';
export const GET_CURRENT_DRINK = 'GET_CURRENT_DRINK';

export function getDrinks(query) {
  const request = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
  return {
    type: GET_DRINKS,
    payload: request,
  };
}

export function getCurrentDrink(id) {
  const request = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  console.log(request);
  return {
    type: GET_CURRENT_DRINK,
    payload: request,
  };
}
