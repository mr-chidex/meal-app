import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <View>
      <Text>Category meal screen</Text>
      <Text>{data?.title}</Text>
      <Button
        title="MealDetails"
        onPress={() => navigation.push("MealDetails")}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
