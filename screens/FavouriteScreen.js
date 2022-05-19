import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/data";

const FavouriteScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || "m2");

  return <MealList listData={favMeals} navigation={navigation} />;
};

export default FavouriteScreen;
