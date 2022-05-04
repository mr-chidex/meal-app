import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: `${route.params?.data?.title} Meal`,
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="MealDetails"
        options={{ title: "Meal Details" }}
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
