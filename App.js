import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import CategoriesScreen from "./screens/CategoriesScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);
  const [error, setError] = useState("");

  if (!fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={() => setError("error loading font")}
        onFinish={() => setFontLoading(true)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
