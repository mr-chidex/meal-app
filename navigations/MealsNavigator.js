import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
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
      initialRouteName="Categories"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
        headerTitleStyle: {
          fontFamily: "OpenSans-Bold",
        },
        headerBackTitleStyle: { fontFamily: "OpenSans" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          title: "Meal Categories",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
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
          title: `${
            route?.params?.mealTitle?.length > 20
              ? route?.params?.mealTitle?.substring(0, 20) + "..."
              : route?.params?.mealTitle
          }`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              <Item
                title="Favorite"
                iconName={route.params?.isFav ? "ios-star" : "ios-star-outline"}
                onPress={route.params?.favToggle}
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
