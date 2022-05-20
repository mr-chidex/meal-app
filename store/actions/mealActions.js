import { SET_FILTER, TOGGLE_FAVORITE } from "../constants/mealConstants";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, payload: { mealId: id } };
};

export const setFilters = (filters) => {
  return { type: SET_FILTER, payload: filters };
};
