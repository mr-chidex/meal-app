import React from "react";
import { StyleSheet, Text } from "react-native";

const DefaultText = ({ children, otherStyle = {} }) => {
  return <Text style={{ ...styles.text, ...otherStyle }}>{children}</Text>;
};

export default DefaultText;

const styles = StyleSheet.create({
  text: { fontFamily: "OpenSans" },
});
