import { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import MealsNavigator from "./navigations/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);
  const [_, setError] = useState("");

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
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
}
