import { createStackNavigator } from "@react-navigation/stack";
import { Platform, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/HeaderButton";

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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              <Item
                title="Favorite"
                iconName="ios-star-outline"
                onPress={() => console.log("mark as favorite")}
              />
            </HeaderButtons>
          ),
        })}
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
