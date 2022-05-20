import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultView from "../components/DefaultView";

const FavouriteScreen = ({ navigation }) => {
  const { favoriteMeals } = useSelector((state) => state.meals);

  return favoriteMeals?.length === 0 ? (
    <DefaultView>You have no favorite meal!</DefaultView>
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
