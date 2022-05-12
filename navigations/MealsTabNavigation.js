import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";

import FavouriteScreen from "../screens/FavouriteScreen";
import MealsNavigator from "./MealsNavigator";
import colors from "../constants/colors";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsTabNavigation = () => {
  return (
    <Tab.Navigator
      activeColor={colors.secondary}
      inactiveColor="grey"
      barStyle={{ backgroundColor: "#eee" }}
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-restaurant" size={size} color={color} />;
          },
        }}
        name="Meals"
        component={MealsNavigator}
      />
      <Tab.Screen
        name="Favorite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-star" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigation;
