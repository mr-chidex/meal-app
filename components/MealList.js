import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import MealItem from "./mealItem";

const MealList = ({ listData, navigation }) => {
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
