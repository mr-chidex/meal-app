import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FilterSwitch from "../components/FilterSwitch";

const FilterScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        setValue={setIsGlutenFree}
      />

      <FilterSwitch label="Vegan-free" value={isVegan} setValue={setIsVegan} />

      <FilterSwitch
        label="Lactose-free"
        value={isLactose}
        setValue={setIsLactose}
      />

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
