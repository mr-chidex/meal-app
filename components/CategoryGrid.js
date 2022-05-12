import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

const CategoryGrid = ({ item, onSelect }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.grid}>
      <TouchableComponent
        style={{ flex: 1 }}
        activeOpacity={0.6}
        onPress={onSelect}
      >
        <View style={{ ...styles.card, backgroundColor: item.color }}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  card: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
    justifyContent: "flex-end",
    backgroundColor: "green",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
    textAlign: "right",
  },
});
