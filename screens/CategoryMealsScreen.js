import React from "react";
import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const catId = data?.id;

  const { filteredMeals } = useSelector((state) => state.meals);

  const categoryMeals = filteredMeals.filter(
    (cat) => cat.categoryIds.indexOf(catId) >= 0
  );

  return categoryMeals?.length === 0 ? (
    <Text style={styles.text}>You have no meals for this category!</Text>
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
