import { TOGGLE_FAVORITE } from "../constants/mealConstants";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, payload: { mealId: id } };
};
