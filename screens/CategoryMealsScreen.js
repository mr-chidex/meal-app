import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const catId = data?.id;

  const { filteredMeals } = useSelector((state) => state.meals);

  const categoryMeals = filteredMeals.filter(
    (cat) => cat.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={categoryMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
