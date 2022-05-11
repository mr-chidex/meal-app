import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../components/mealItem";
import { MEALS } from "../data/data";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const catId = data?.id;

  const categoryMeals = MEALS.filter(
    (cat) => cat.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelect={() =>
              navigation.push("MealDetails", {
                mealId: item.id,
                mealTitle: item.title,
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 15,
  },
});
