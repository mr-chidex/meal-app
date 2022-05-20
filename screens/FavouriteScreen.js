import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavouriteScreen = ({ navigation }) => {
  const { favoriteMeals } = useSelector((state) => state.meals);

  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

export default FavouriteScreen;
