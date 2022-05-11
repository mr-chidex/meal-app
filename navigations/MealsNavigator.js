import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: `${route.params?.data?.title} Meal`,
        })}
      />
      <Stack.Screen
        name="MealDetails"
        options={({ route }) => ({
          title: `${route?.params?.mealTitle}`,
        })}
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
