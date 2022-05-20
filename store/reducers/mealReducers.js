import { MEALS } from "../../data/data";
import { TOGGLE_FAVORITE } from "../constants/mealConstants";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FAVORITE:
      const existingFavIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === payload.mealId
      );

      if (existingFavIndex >= 0) {
        const updatedFav = [...state.favoriteMeals];
        updatedFav.splice(existingFavIndex, 1);

        return {
          ...state,
          favoriteMeals: updatedFav,
        };
      } else {
        const newFav = state.meals.find((meal) => meal.id === payload.mealId);
        return {
          ...state,
          favoriteMeals: [newFav, ...state.favoriteMeals],
        };
      }

    default:
      return state;
  }
};

export default mealsReducer;
