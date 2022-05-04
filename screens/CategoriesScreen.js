import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/data";

const renderItems = ({ item }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={styles.card}
    onPress={() => console.log(item.color)}
  >
    <View>
      <Text>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        renderItem={renderItems}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
