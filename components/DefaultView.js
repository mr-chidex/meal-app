import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DefaultView = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default DefaultView;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: {
    fontFamily: "OpenSans",
    fontSize: 16,
    padding: 6,
    textAlign: "center",
  },
});
