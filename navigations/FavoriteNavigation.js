import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderBtn from "../components/HeaderButton";
import colors from "../constants/colors";
import FavouriteScreen from "../screens/FavouriteScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
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
      <Stack.Screen
        name="Favorites"
        options={{ title: "My Favorites" }}
        component={FavouriteScreen}
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

export default FavoriteNavigation;
