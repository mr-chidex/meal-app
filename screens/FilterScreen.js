import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import FilterSwitch from "../components/FilterSwitch";
import { setFilters } from "../store/actions/mealActions";

const FilterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveHandler = useCallback(() => {
    const appledFilters = {
      glutenFree: isGlutenFree,
      veganFree: isVegan,
      lactoseFree: isLactose,
      vegetarianFree: isVegetarian,
    };

    dispatch(setFilters(appledFilters));
  }, [isGlutenFree, isVegan, isLactose, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveHandler });
  }, [saveHandler]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        setValue={setIsGlutenFree}
      />

      <FilterSwitch
        label="Lactose-free"
        value={isLactose}
        setValue={setIsLactose}
      />

      <FilterSwitch label="Vegan-free" value={isVegan} setValue={setIsVegan} />

      <FilterSwitch
        label="Vegetarian-free"
        value={isVegetarian}
        setValue={setIsVegetarian}
      />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
});
