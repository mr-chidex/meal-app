import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/data";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const catId = data?.id;

  const categoryMeals = MEALS.filter(
    (cat) => cat.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={categoryMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
