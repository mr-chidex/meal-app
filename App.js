import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
// import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import mealsReducer from "./store/reducers/mealReducers";
import mealsReducer from "./store/reducers/mealReducers";
import SideDrawer from "./navigations/SideDrawer";

// const rootReducer = combineReducers({
//   meals: mealsReducer,
// });

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

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
    <Provider store={store}>
      <NavigationContainer>
        <SideDrawer />
      </NavigationContainer>
    </Provider>
  );
}
