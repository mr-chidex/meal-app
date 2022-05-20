import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultView from "../components/DefaultView";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const catId = data?.id;

  const { filteredMeals } = useSelector((state) => state.meals);

  const categoryMeals = filteredMeals.filter(
    (cat) => cat.categoryIds.indexOf(catId) >= 0
  );

  return categoryMeals?.length === 0 ? (
    <DefaultView>
      You have no meals for this category!. Check your filters
    </DefaultView>
  ) : (
    <MealList listData={categoryMeals} navigation={navigation} />
  );
};

export default CategoryMealsScreen;
const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans",
    fontSize: 16,
    padding: 6,
  },
});
