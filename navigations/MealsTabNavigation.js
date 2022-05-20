import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform, Text } from "react-native";

import MealsNavigator from "./MealsNavigator";
import colors from "../constants/colors";
import FavoriteNavigation from "./FavoriteNavigation";

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
        tabBarLabelStyle: { fontFamily: "OpenSans-Bold" },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-restaurant" size={size} color={color} />;
          },
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Meals</Text>
            ) : (
              "Meals"
            ),
        }}
        name="Meal"
        component={MealsNavigator}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-star" size={size} color={color} />;
          },
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Favorite</Text>
            ) : (
              "Favorite"
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigation;
