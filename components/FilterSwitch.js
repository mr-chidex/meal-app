import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import colors from "../constants/colors";

const FilterSwitch = ({ label, value, setValue }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        thumbColor={colors.primary}
        trackColor={{ true: colors.primary, false: "#bbb" }}
        value={value}
        onValueChange={(newVal) => setValue(newVal)}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 5,
  },
});
