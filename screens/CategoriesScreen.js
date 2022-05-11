import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/data";

const CategoriesScreen = ({ navigation }) => {
  const navgatonHandler = (item) => {
    navigation.push("CategoryMeals", { data: item });
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        renderItem={({ item }) => (
          <CategoryGrid onSelect={() => navgatonHandler(item)} item={item} />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
