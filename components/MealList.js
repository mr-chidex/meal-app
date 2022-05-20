import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./mealItem";

const MealList = ({ listData, navigation }) => {
  const { favoriteMeals } = useSelector((state) => state.meals);

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelect={() =>
              navigation.push("MealDetails", {
                mealId: item.id,
                mealTitle: item.title,
                isFav: favoriteMeals.some((meal) => meal.id === item.id),
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 15,
  },
});
