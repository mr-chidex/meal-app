import { MEALS } from "../../data/data";
import { SET_FILTER, TOGGLE_FAVORITE } from "../constants/mealConstants";

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

    case SET_FILTER:
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (payload.glutenFree && !meal.isGluten) {
          return false;
        }
        if (payload.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (payload.vegetarianFree && !meal.isVegetarian) {
          return false;
        }
        if (payload.veganFree && !meal.isVegan) {
          return false;
        }

        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };

    default:
      return state;
  }
};

export default mealsReducer;
