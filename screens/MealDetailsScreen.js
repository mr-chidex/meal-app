import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/mealActions";

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

const MealDetailsScreen = ({ route, navigation }) => {
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const { mealId } = route.params;
  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = meals.find((meal) => meal.id === mealId);

  const toggleFavs = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId]);

  useEffect(() => {
    navigation.setParams({ favToggle: toggleFavs });
  }, [toggleFavs]);

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

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
