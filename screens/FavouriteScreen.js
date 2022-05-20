import React from "react";
import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";

const FavouriteScreen = ({ navigation }) => {
  const { favoriteMeals } = useSelector((state) => state.meals);

  return favoriteMeals?.length === 0 ? (
    <Text style={styles.text}>You have no favorite meal!</Text>
  ) : (
    <MealList listData={favoriteMeals} navigation={navigation} />
  );
};

export default FavouriteScreen;
const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans",
    fontSize: 16,
    padding: 6,
  },
});
