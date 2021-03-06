import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderBtn from "../components/HeaderButton";
import colors from "../constants/colors";
import FilterScreen from "../screens/FilterScreen";

const Stack = createStackNavigator();

const FilterNav = () => {
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
        name="Filter"
        component={FilterScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              <Item
                title="Filters"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                  title="Save"
                  iconName="ios-save"
                  onPress={() => {
                    const saveHandler = route.params?.save;
                    saveHandler();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default FilterNav;
