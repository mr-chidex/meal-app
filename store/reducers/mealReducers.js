import { createSlice } from "@reduxjs/toolkit";

import { MEALS } from "../../data/data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    favMeals(state, action) {},
  },
});

const mealsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export const { favMeals } = mealsSlice.actions;
export default mealsSlice.reducer;

// export default mealsReducer;
