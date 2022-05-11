import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";

const MealDetailsScreen = ({ route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Text>Meal details screen</Text>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
