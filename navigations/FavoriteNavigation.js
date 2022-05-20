import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

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
        component={FavouriteScreen}
        options={({ navigation }) => ({
          title: "My Favorites",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              <Item
                title="Favorite"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
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
                iconName={route.params?.isFav ? "ios-star" : "ios-star-outline"}
                onPress={route.params.favToggle}
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
