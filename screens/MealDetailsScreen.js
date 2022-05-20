import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";

const VirtualizedView = (props) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
};

const MealDetailsScreen = ({ route }) => {
  const { meals } = useSelector((state) => state.meals);
  const { mealId } = route.params;

  const selectedMeal = meals.find((meal) => meal.id === mealId);

  return (
    <VirtualizedView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity?.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability?.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      <FlatList
        data={selectedMeal.ingredients}
        keyExtractor={(ingredient) => ingredient}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <DefaultText>{item}</DefaultText>
          </View>
        )}
      />

      <View>
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <View key={step} style={styles.listItem}>
            <DefaultText>{step}</DefaultText>
          </View>
        ))}
      </View>
    </VirtualizedView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
